import mongoose from "mongoose";

async function connectDB () {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1)
        
    }
  
    

}


export default connectDB