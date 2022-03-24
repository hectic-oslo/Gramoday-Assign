const express=require('express')
const router= new express.Router()
const combPrice=require('../Models/combPrice')
 const auth=require('../middle-ware/auth')



router.post('/combPrice',auth,async(req,res)=>{
    const {marketTypes,marketName,cmdtyName,priceUnit,convFctr,price}=req.body
     
  
    try {
       const existMarket= await combPrice.findOne({marketId:req.query.mId,cmdtyId:req.query.pId,})
         
       if(existMarket){


        const cost={
            priceUnit,
            convFctr,
            price
        }
     
    
   existMarket.users.push(req.user)
      existMarket.prices.push(cost)
      await existMarket.save()
       res.status(200).send(existMarket)


        }
        
        else{ 
            const NcombPrice=new combPrice({
                marketId:req.query.mId,
                cmdtyId:req.query.pId,
               marketName,
               marketTypes,
               cmdtyName,
           })
           const cost={
            priceUnit,
            convFctr,
            price
        }
      NcombPrice.users.push(req.user)
      NcombPrice.prices.push(cost)
      await NcombPrice.save()
       res.status(200).send(NcombPrice)

        }
           
     
          
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/combPrice/:id',auth,async(req,res)=>{
  
    try {
     
        const existMarket= await combPrice.findById({_id:req.params.id})
    const {_id,marketId,cmdtyId,users,marketName,cmdtyName}=existMarket

       
        const price=existMarket.prices.reduce((acc,item)=>((item.price)/(item.convFctr))+acc,0)/existMarket.prices.length
           
       
       res.status(200).json(
           {
            _id,
            marketId,
            marketName,
            cmdtyId,
            cmdtyName,
            users,
            
            
            
               "priceUnit":"Kg",
               "price":price})
     
          
    } catch (error) {
        res.status(400).send(error)
    }
 })




module.exports=router