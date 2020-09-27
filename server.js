import app from "./app"
import mongoose from "mongoose"

const DATABASE_URL = require('./config/keys').DATABASE_URL


mongoose.connect(DATABASE_URL,{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:true
}).then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err)
})

const PORT = process.env.PORT||5000

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})