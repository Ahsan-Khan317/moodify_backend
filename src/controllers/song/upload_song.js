import id3 from "node-id3";
import uploadToImageKit from "../../services/generateURL.services.js";
import songmodel from "../../models/song.model.js";
const upload_song = async (req, res) => {
try{
    const {mood} = req.body
  const buffer = req.file?.buffer;

  const song = id3.read(buffer);

  const titles = song?.title
const imagebuffer =  song.image?.imageBuffer

const [songURL ,posterURL ] = await Promise.all([

 uploadToImageKit({
    filename:titles+".mp3",
     buffer , 
    folder:"moodify/songs"
 }),
   uploadToImageKit({
    filename:titles+".png",
     buffer:imagebuffer, 
    folder:"moodify/posters"
 })
])


const result = await songmodel.create({
 
  songurl:songURL.url,
  posterurl:posterURL.url,
  title:titles,
  mood:mood



})




res.status(201).json({
  message:"song created successfully",
  result,
  success:true
})

}
catch(err){
  res.status(401).json({
  message:err.message,
  
  success:false
})
}
  
};
export default upload_song;
