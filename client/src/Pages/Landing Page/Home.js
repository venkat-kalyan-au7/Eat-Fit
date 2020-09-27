import React from "react";
import "./Home.css"
import web from "../../Image/home.jpg"
import {NavLink} from "react-router-dom"
import Goal from "../Landing Page/Goals"

import Banner from "../../Components/Banner/Banner1"
import Banner2 from "../../Components/Banner/Banner2"

const Home = () =>{
    return (
  <>
  <section id="header" 
  className="d-flex align-items-center">
  <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
          <h1>Count your daily calories with
          <strong className="brand-Name"> EatFit</strong>
          </h1>
          <h4 className="my-3"> Take control of your goals. Track calories, 
          breakdown ingredients, and log activities with EatFit. </h4>
          <div className="mt-3"> 
          <NavLink to="/service" > <button className="btn">
        
          Get Started
          
          </button></NavLink>
          {/* <div>Already have an account? 
            <NavLink to="/service" className="login">  Login</NavLink>
          </div> */}
          
          </div>
            </div>
           <div className="col-lg-6 order-1 order-lg-2 header-img">
           <img src={web} className="img-fluid animated"  alt="home img"/>
           </div>
           </div>
          </div>
          </div>
          </div>
  
  
  
  </section>
             <Goal/> 
             
             <Banner/>
             <Banner2/>
             {/* <Homee/> */}
  
            
             
  </>
    );
    
  
  };
  export default Home;