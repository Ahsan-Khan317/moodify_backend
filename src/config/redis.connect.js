import Redis from "ioredis";


const redis = new Redis(`redis://default:UIaTvrlstYEE45UunVydXaUkvi3hsc9x@redis-17462.crce283.ap-south-1-2.ec2.cloud.redislabs.com:17462`)



redis.on("connect",()=>{
    console.log("server is connected to redis successfully")
})
redis.on("error", (err) => {
    console.log("Redis error:", err);
});

export default redis