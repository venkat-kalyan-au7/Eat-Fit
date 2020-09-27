import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./styles.css"
import Route from "./Routes/Routes"
import axios from "axios"
import {getCookie,signout} from "./utils/cookie"

axios.defaults.baseURL ='http://localhost:5000/api';


axios.interceptors.request.use((config) => {
  const token = getCookie("token");
  config.headers.Authorization = token;

  return config;
});

// null for success, and second parameter cllback for failure
axios.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    signout(() => {
      window.location.href = "/signin";
    });
  }

  return Promise.reject(error);
});

export default function App() {
  return (
    <>
     
       <Route />
    </>
  );
}