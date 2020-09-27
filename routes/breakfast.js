import express from "express"

const router = express.Router()

import {Breakfast} from "../controllers/breakfast"


router.post("/breakfast",Breakfast);



module.exports = router;