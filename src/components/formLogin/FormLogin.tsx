import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./formLogin.scss";
import axios from "axios";
import swal from "sweetalert";

const FormLogin = () => {
   
   const baseUrl = import.meta.env.VITE_BACKEND_URL;
   const navigate = useNavigate();

   const [loginInput, setLoginInput] = useState<{
      email: string;
      password: string;
      error_list: Array;

   }>({
      email: "",
      password: "",
      error_list:[],
   });

   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
   };

   const loginSubmit =(e:React.FormEvent) =>{
      e.preventDefault();

      const data = {
         email:loginInput.email,
         password:loginInput.password,
      }

      axios.post(`${baseUrl}/api/login`, data).then(res=> {
         if(res.data.status === 200){
            localStorage.setItem('auth_token',res.data.token);
            localStorage.setItem('auth_name',res.data.username);
            swal("Success",res.data.message,"success");
            navigate('/home');
         }
         else if(res.data.status === 401){
            swal("Warning", res.data.message, "warning")
         }
         else{
            setLoginInput({ ...loginInput, error_list: res.data.validation_errors });

         }
      });

   }

   return (
      <div className="container_form_login">
         <form action="" className="form_login" onSubmit={loginSubmit}>
            <p>Email</p>
            <span>{loginInput.error_list.email}</span>
            <label htmlFor="password" className="container_input">
               <AiOutlineUser />
               <input
                  name="email"
                  type="email"
                  onChange={handleInput}
                  value={loginInput.email}
                  placeholder="Email"
               />
            </label>
            <p>Password</p>
            <span>{loginInput.error_list.password}</span>
            <label htmlFor="password" className="container_input">
               <RiLockPasswordLine />
               <input
                  name="password"
                  type="password"
                  onChange={handleInput}
                  value={loginInput.password}
                  placeholder="Password"
               />
            </label>
            <button className="form_submit" type="submit">
               LOGIN
            </button>
         </form>
      </div>
   );
};

export default FormLogin;
