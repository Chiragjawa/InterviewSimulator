//for connecting to database

import mongoose from "mongoose";



//Database connections take time → We use async/await to handle them properly.
//async makes connectDB return a promise.
//await pauses execution until MongoDB is connected.
//This prevents race conditions where the program might continue before the connection is established.


//Promise	A value that will be available in the future.
//async function	Always returns a promise.
//await	Waits for a promise to resolve before continuing execution.

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected`);

    }
    catch(error){
console.log("error occured");

    }
}
export default connectDB;
