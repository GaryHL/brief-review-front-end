import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Post from "../../components/post/Post";
import axios from "axios";
import "./profile.scss";
import NavBar from "../../components/navBar/NavBar";

const Profile = () => {

   const navigate = useNavigate();
   localStorage.getItem('auth_token') ? null : navigate('/login'); 


   const baseUrl = import.meta.env.VITE_BACKEND_URL;

   const [user, setUser] = useState(localStorage.getItem("auth_name"));




   const getPosts = async () => {
      const res = await axios.get(`${baseUrl}/api/posts`);

      let user_posts = res.data;

      let filterData = user_posts.filter(
         (item) => item.creator === user
      );

      setData(filterData);
   };

   const [data, setData] = useState([]);

   useEffect(() => {
      getPosts();
   }, []);

   return (
      <>
      <NavBar/>
         <div className="container_profile">
            <div className="container_user_data">
               <img className="user_image" src="https://imgs.search.brave.com/_6IS3UaEcpsH9uc9edr1gYAkKBeCPCabWZ5KUIZxRaE/rs:fit:256:256:1/g:ce/aHR0cDovL3d3dy5y/YS5hYy5hZS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wMi91/c2VyLWljb24tcGxh/Y2Vob2xkZXIucG5n" alt="user image" />
               <div className="user_details">
                  <h1 className="user_name">{user}</h1>
               </div>
            </div>
            <div className="container_posts">
               {data.map((item) => {
                  return <Post key={item.id} data={item} />;
               })}
            </div>
         </div>
      </>
   );
};

export default Profile;
