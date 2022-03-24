const mongoose=require("mongoose")

const connectDB=async()=>{

   try{
          const connect=await mongoose.connect('mongodb+srv://gramAssign:superhuman189@cluster0.gbqt5.mongodb.net/test',{
              useNewUrlParser:true,
              useUnifiedTopology:true
          })
          console.log(`Mongodb Connencted`);
       
   }
   catch(error)
   {
         console.log(`Error:${error}`);
         process.exit(1)
   }

}
module.exports=connectDB