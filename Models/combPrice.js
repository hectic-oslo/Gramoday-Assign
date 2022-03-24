const mongoose=require('mongoose')



const userSchema=mongoose.Schema({
   
    user:{
        type:mongoose.Schema.Types.ObjectId,
         
        ref:'User'
    },
    
  
},{
    timestamps:true
})

const priceSchema=mongoose.Schema({
   
    priceUnit:{
        type:String,
        required:true,  
    },
    price:{
        type:Number,
        required:true,  
    },
    convFctr:{
        type:Number,
        required:true,
    }
},{
    timestamps:true
})
const combPriceSchema=mongoose.Schema({
    marketId:{
         type:mongoose.Schema.Types.ObjectId,
        //  required:true,
         ref:'Market'

   },
    marketName:{
        type:String,
        
    },
    cmdtyId:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'Cmdty'

   },
   cmdtyName:{
       type:String,
       
   },
   marketTypes: {
    type: String,
    
    trim: true,
  },
   users:[userSchema],
     prices:[priceSchema],

   
    
},{
},{
    timestamps:true
})

const combPrice=mongoose.model('combPrice',combPriceSchema)

module.exports=combPrice