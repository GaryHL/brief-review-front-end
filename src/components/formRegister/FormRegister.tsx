import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./formRegister.scss"; 
import swal from 'sweetalert';

const FormRegister = () => {

   const navigate = useNavigate();

   const baseUrl = import.meta.env.VITE_BACKEND_URL;

   const [registerInput, setRegisterInput] = useState<{
      name: string;
      email: string;
      password: string;
      error_list: Array;
   }>({
      name: "",
      email: "",
      password: "",
      error_list: [],
   });

   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
   };

   const registerSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const data = {
         name: registerInput.name,
         email: registerInput.email,
         password: registerInput.password,
      };
      // axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`${baseUrl}/api/register`, data).then((res) => {
         if (res.data.status === 200) {
            localStorage.setItem('auth_token',res.data.token);
            localStorage.setItem('auth_name',res.data.username);
            swal("Success",res.data.message,"success");
            navigate('/home');
         } else {
            setRegisterInput({
               ...registerInput,
               error_list: res.data.validation_errors,
            });
         }
      });
      // });
   };

   return (
      <div className="container_form">
         <form onSubmit={registerSubmit} action="" className="form_login">
            <p>Nombre </p>
            <span>{registerInput.error_list.name}</span>
            <label className="container_input">
               <AiOutlineUser />
               <input
                  name="name"
                  onChange={handleInput}
                  value={registerInput.name}
                  type="text"
                  placeholder="Nombre"
               />
            </label>
            <p>Email </p>
            <span>{registerInput.error_list.email}</span>
            <label className="container_input">
               <AiOutlineUser />
               <input
                  name="email"
                  onChange={handleInput}
                  value={registerInput.email}
                  type="text"
                  placeholder="Email"
               />
            </label>
            <p>Password</p>
            <span>{registerInput.error_list.password}</span>
            <label className="container_input">
               <RiLockPasswordLine />
               <input
                  name="password"
                  onChange={handleInput}
                  value={registerInput.password}
                  type="password"
                  placeholder="Password"
               />
            </label>
            {/* <p>Confirm password</p>
        <label className="container_input">
          <RiLockPasswordLine />
          <input
            name="confirm_password"
            type="password"
            placeholder="Confirm_password"
            onChange={handleInput}
            value={registerInput.confirm_password}
          />
        </label> */}
            <button className="form_submit" type="submit">
               REGISTRARSE
            </button>
         </form>
      </div>
   );
};

export default FormRegister;
