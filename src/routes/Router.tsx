import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Register from "../views/auth/register/Register";
import Login from "../views/auth/login/Login";
import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/home"
               element={
                  localStorage.getItem("auth_token") ? (
                     <Navigate to="/login" />
                  ) : (
                     <Home />
                  )
               }
            />

            <Route
               path="/"
               element={
                  localStorage.getItem("auth_token") ? (
                     <Home />
                  ) : (
                     <Navigate to="/login" />
                  )
               }
            />
            <Route
               path="/login"
               element={
                  localStorage.getItem("auth_token") ? (
                     <Navigate to="/" />
                  ) : (
                     <Login />
                  )
               }
            />
            <Route
               path="/Register"
               element={
                  localStorage.getItem("auth_token") ? (
                     <Navigate to="/" />
                  ) : (
                     <Register />
                  )
               }
            />
            <Route
               path="/profile"
               element={
                  localStorage.getItem("auth_token") ? (
                     <Profile />
                  ) : (
                     <Navigate to="/login" />
                  )
               }
            />

            <Route path="/chat" />
            <Route path="/select-tech" />
            <Route path="/briefs" />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
