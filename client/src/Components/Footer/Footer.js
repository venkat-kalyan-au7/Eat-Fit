import React from "react"
import "./Footer.css"
import {NavLink} from "react-router-dom"


const about =() =>{
 return(
<>
<div className="container-fluid div footer">
      <div className="row text-center">
    

  <p className="paraa"><NavLink className="para" to="/about"> Privacy Policy </NavLink>| 
  <NavLink className="para" to="/about">Terms And Conditions </NavLink>|
  <NavLink className="para" to="/about"> About EatFit</NavLink>
  <br></br>©2020 EatFit. All Rights Reserved.</p>
  
  
  
  </div>
  </div>
</>
 );
};
export default about;