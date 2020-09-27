import express from "express"

const router = express.Router()


import {Lunch} from "../controllers/lunch"

router.post("/lunch",Lunch);



module.exports = router;

