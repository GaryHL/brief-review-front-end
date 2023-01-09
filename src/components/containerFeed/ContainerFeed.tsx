import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../post/Post";

const ContainerFeed = () => {
   const baseUrl = import.meta.env.VITE_BACKEND_URL;

   const getPosts = async () => {
      const res = await axios.get(`${baseUrl}/api/posts`);
      console.log(res);
      setData(res.data.reverse());
      console.log(data);
      // console.log("url_images",data[0].img_post + img_post)
   };

   const [data, setData] = useState([]);

   useEffect(() => {
      getPosts();
   }, []);

   return (
      <div className="container_feed">
         {data.map((item) => {
            return <Post key={item.id} data={item} />;
         })}
      </div>
   );
};

export default ContainerFeed;