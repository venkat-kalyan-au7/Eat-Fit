import React from "react";
import {BrowserRouter,Switch} from "react-router-dom"
import Signup from "../Components/Auth/Register"
import Signin from "../Components/Auth/Login"
import Activate from "../Components/Auth/Activate";
import Forgot from "../Components/Auth/Forgot";
import Reset from "../Components/Auth/Reset";
import Logout from "../Components/Auth/Logout";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";
import Home from "../Pages/Landing Page/Home";
import About from "../Pages/About Page/About";
import Navbar from "../Components/Navbar/Navbar";
import Service from "../Pages/OurServices Page/Service";
import Profile from "../Components/Profile/Profile";
import Log from '../Pages/Calories/Calorie';
import Info from "../Pages/FoodInfo/Info"

const Routes = () => {
    return (
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <PublicRoute path="/" exact component={Home} />
          <PublicRoute path="/about" exact component={About} />
          <PublicRoute path="/food" exact component={Info}/>
   
  
          <PublicRoute restricted path="/signup" exact component={Signup} />
          <PublicRoute restricted path="/signin" exact component={Signin} />
          <PublicRoute
            restricted
            path="/auth/activate/:token"
            exact
            component={Activate}
          />
          <PublicRoute
            restricted
            path="/auth/password/forgot"
            exact
            component={Forgot}
          />
          <PublicRoute
            restricted
            path="/auth/password/reset/:token"
            exact
            component={Reset}
          />
          <PublicRoute
          path ="/logout"
          exact
          component={Logout}
          />
          <PrivateRoute path="/service" exact component={Service} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <PrivateRoute path="/log" exact component={Log} />
      
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;
