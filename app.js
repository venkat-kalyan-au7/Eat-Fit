import express from "express"
import morgan from "morgan"
import cors from "cors"

//importing routes

import authRoutes from "./routes/authRoutes"

const app = express()


app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use(cors());

app.use(morgan('tiny'))


app.use("/api", authRoutes);


module.exports= app
