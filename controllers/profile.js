import Pmodel from "../models/Profile"




exports.Profile=(req,res)=>{
  
    const { Name, Email, Age, Height,Weight,Blood ,Sex } = req.body;
   

    
//bmi formula Formula: weight (kg) / [height (m)]2
    const Bmi = Weight / (Height * Height) ;
    const newprofile = new Pmodel( {Name, Email, Age, Height,Weight,Blood ,Sex, Bmi});
     

    Pmodel.findOne({Email:Email}).exec((err,user)=>{
        if(err){
            return res.status(400).json(
                {
                    error:"Something went wrong",
                }
                )
        }
        if(user){
            return res.status(400).json({
                message:"E-mail already exists",
            })
        }
        
    

    newprofile.save((err,result)=>{

        if(err){
            return res.status(400).json(
                {
                    error:"Something went wrong",
                }
                )
        }
        if(result){
            return res.status(400).json({
                message:"Your profile sucessfully created",
            })
        }

    })

});   
    

};