import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "./home.scss";

const Home = () => {
   return (
      <>
         <NavBar />
         <div className="container_home">
            <h1>Home page</h1>
         </div>
      </>
   );
};

export default Home;
