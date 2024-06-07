import mongoose from 'mongoose';

let isConnected= false;

export const connectToDB = async()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('Mongodb is already connected');
        return;
    }


    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"PromptShare",
            useNewUrlparser:true,
            useUnifiedTopology:true,
        })
        isConnected=true;
        console.log('MongoDB connnected');
    }
    catch(err){
        console.log(err);
    }
}