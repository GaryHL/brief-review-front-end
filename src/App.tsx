import { useState } from "react";
import "./App.css";
import Router from '../src/routes/Router';
import axios from "axios";


function App() {

   // axios.defaults.baseUrl = "http://127.0.0.1:8000"; 
   axios.defaults.headers.post['Content-Type']= 'application/json';
   axios.defaults.headers.post['Accept']= 'application/json';
   axios.interceptors.request.use(function (config){
      const token = localStorage.getItem('auth_token');
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      return config;
   })
   axios.defaults.withCredentials = true;

   return (
      <div className="App">
        <Router/>
      </div>
   );
}

export default App;
