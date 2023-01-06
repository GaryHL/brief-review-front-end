import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from '../views/auth/register/Register'
import Login from "../views/auth/login/Login";
import Home from "../views/home/Home";

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/chat" />
            <Route path="/select-tech" />
            <Route path="/briefs" />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
