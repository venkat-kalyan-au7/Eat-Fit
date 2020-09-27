import express from "express"

const router = express.Router()

import {signUp,
    activateAccount,
    signIn,
    forgotPassword,
    resetPassword} from "../controllers/auth"

import {userSignupValidator , userSigninValidator} from "../validation/auth"
import {runValidation} from "../validation/index"

router.post("/signup", userSignupValidator, runValidation, signUp);

  
router.post("/account-activation", activateAccount);


router.post("/signin", userSigninValidator, runValidation,  signIn);
  

router.post("/forgot-password", forgotPassword);

  
router.post("/reset-password",   resetPassword);
  
module.exports = router;

