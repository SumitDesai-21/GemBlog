    import mongoose from 'mongoose'
    // mongoose ODM 
// connecting mongoDB with backend

const connectDB = async() =>{
    try{
        // connet mongoDB
        mongoose.connection.on('connected', ()=>{
            console.log('Database Connected.');  
        });
        await mongoose.connect(`${process.env.MONGODB_URI}`)
    }   
    catch(error){
        console.log('Failed to connect MongoDB Server.', error);
    }
}

export default connectDB;