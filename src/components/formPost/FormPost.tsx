import React, { useState } from "react";
import { useBoolean } from "../../hooks/useBoolean";
import { useNavigate } from "react-router-dom";
import "./formPost.scss";
import axios from "axios";
import swal from "sweetalert";

const FormPost = () => {

   const user = localStorage.getItem('auth_name');
   console.log(user)
   const navigate = useNavigate();
   const formPost = useBoolean(false);
   const baseUrl = import.meta.env.VITE_BACKEND_URL;

   return (
      <>
         {/* <form
            method="POST"
            encType="multipart/form-data"
            action={`${baseUrl}/api/posts/create`}
         >
            <input type="text" name="description" />
            <input type="file" name="img_post" />
            <input type="text" name="creator" />
            <input type="text" name="date" />
            <button type="submit" onClick={() => navigate("/")}>
               Publicar
            </button>
         </form> */}

         <div
            className={
               formPost.boolean
                  ? "container_form_post active"
                  : "container_form_post"
            }
         >
            <form
            className="form_post_tag"
               method="POST"
               encType="multipart/form-data"
               action={`${baseUrl}/api/posts/create`}
            >
               <div className="base_form">
                  <img
                     src="https://imgs.search.brave.com/qpv_k67nNv0KESGNLbEXmh2lqltrNshhUXV_YPhSpk0/rs:fit:736:731:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC82MS9hZC82ZC82/MWFkNmRlYTNmZDI3/YzFjZjQyMjljNTEy/NzJlOTA3OS5qcGc"
                     alt=""
                     className="img_user"
                  />
                  <input
                     onClick={() => formPost.setTrue()}
                     type="text"
                     name="description"
                     placeholder="Escribe un post"
                     className="input_user"
                     required
                  />
               </div>
               <div className="post_form">
                  <input
                     required
                     name="img_post"
                     type="file"
                     placeholder="image"
                     className="custom_file_input"
                  />
                  <input
                     required
                     name="creator"
                     type="text"
                     placeholder="creator"
                     value={user}
                     className="no-input"
                     />
                  <input
                     className="no-input"
                     required
                     defaultValue={'date-defaul'}
                     name="date"
                     type="text"
                     placeholder="date"
                  />
                  <button className="submit-form" type="submit">
                     Publicar
                  </button>
               </div>
            </form>
         </div>
      </>
   );
};

export default FormPost;
