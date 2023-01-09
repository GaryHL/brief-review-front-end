import React from "react";
import "./post.scss";

const Post = ({ data }) => {

  const baseUrl = import.meta.env.VITE_BACKEND_URL;


   let date = data.updated_at.split("T")[0];

   return (
      <div className="container_post">
         <div className="container_info_post">
            <img
               src="https://imgs.search.brave.com/K-TBP22uKNJgsxn2V4JDwLTHMgQfPPS-gpDA8EcN5pE/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9saDUu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tLy1t/ZVFxdUlxM09aTS9U/WDVwaXY2Z3FHSS9B/QUFBQUFBQUFGay81/OVJsYllSSjZEYy9z/MTYwMC81MS5qcGc"
               className="img_user"
               alt=""
            />
            <div className="name_date">
               <h4 className="creator">{data.creator}</h4>
               <p className="date">{date}</p>
            </div>
         </div>
         <p className="description_post">{data.description}</p>
         <img className="img_post" src={`${baseUrl}/${data.img_post}`}></img>
      </div>
   );
};

export default Post;
