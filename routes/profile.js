import express from "express"

const router = express.Router()

import {Profile} from "../controllers/profile"

router.post("/profile",Profile);


module.exports = router;