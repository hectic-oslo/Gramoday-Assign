const express=require('express')
const connectDB=require('./db/mongoose')
//const taskRouter=require('./Routes/taskRouter')
const userRouter=require('./Routes/userRouter')
const cmdtyRouter=require('./Routes/cmdtyRouter')
const marketRouter=require('./Routes/marketRouter')
 const combRouter=require('./Routes/combPRouter')





connectDB()
const app=express()
app.use(express.json())          

app.use(userRouter)
app.use(cmdtyRouter)
app.use(marketRouter)
app.use(combRouter)



const PORT=process.env.PORT ||3100
app.listen(PORT,()=>{
    console.log(`server is up on ${PORT}`);
})