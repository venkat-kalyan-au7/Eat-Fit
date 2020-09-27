import express from "express"

const router = express.Router()

import {Dinner} from "../controllers/dinner"

router.post("/dinner",Dinner);

module.exports = router;