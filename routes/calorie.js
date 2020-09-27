import express from "express"

const router = express.Router()

import {Bcal,Lcal,Dcal,Allcal} from "../controllers/bodyCalories"


router.post("/get-breakfast",Bcal);

router.post("/get-lunch",Lcal);

router.post("/get-dinner",Dcal);

router.post("/get-total",Allcal);



module.exports = router;