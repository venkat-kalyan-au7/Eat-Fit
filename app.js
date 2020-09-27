import express from "express"
import morgan from "morgan"
import cors from "cors"
import path from "path"


//importing auth middleware
import {authorize} from "./middlewares/auth"

//importing routes
import authRoutes from "./routes/authRoutes"
import profile from "./routes/profile"
import breakfast from "./routes/breakfast"
import lunch from "./routes/lunch"
import dinner from "./routes/dinner"
import getlog from "./routes/log"
import calories from "./routes/calorie"


const app = express()


app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use(cors());

app.use(morgan('tiny'))


app.use("/api", authRoutes);
app.use("/api/user",authorize, profile);
app.use("/api/user/log",authorize,breakfast);
app.use("/api/user/log",authorize,lunch);
app.use("/api/user/log",authorize,dinner);
app.use("/api/user/log",authorize,getlog);
app.use('/api/user/cal',authorize,calories);

if(process.env.NODE_ENV == "production"){
    app.use(express.static('client/build'))
    
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", 'index.html'))
    })
}



module.exports= app
