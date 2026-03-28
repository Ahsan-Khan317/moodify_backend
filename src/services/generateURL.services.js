import ImageKit, { toFile } from '@imagekit/nodejs';
const client = new ImageKit({
  privateKey:process.env.IMAGEKIT_PRIVATE_KEY

});


const uploadToImageKit = async({filename,buffer,folder})=>{
  const res =   await client.files.upload({
  file: await toFile(Buffer.from(buffer)),
  fileName:filename,
  folder:folder
});
return res

}

export default uploadToImageKit