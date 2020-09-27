import express from "express"

const router = express.Router()

import {Logdata} from "../controllers/getLog"


router.post("/get-log",Logdata);



module.exports = router;

