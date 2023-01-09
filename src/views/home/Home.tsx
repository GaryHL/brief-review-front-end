import React ,{useEffect}from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./home.scss";
import FormPost from "../../components/formPost/FormPost";
import ContainerFeed from "../../components/containerFeed/ContainerFeed";

const Home = () => {
   // useEffect(() => {
   //    const navigate = useNavigate();
   //    localStorage.getItem("auth_token") ? null : navigate("/login");
   // }, []);

   return (
      <>
         <NavBar />
         <div className="container_home">
            <div className="">div vacio</div>
            <div className="">
               <FormPost />
               <ContainerFeed />
            </div>
            <div className="">div vacio</div>
         </div>
      </>
   );
};

export default Home;
