import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import "./formLogin.scss";

const FormLogin = () => {
   return (
      <div className="container_form">
         <form action="" className="form_login">
            <p>User name</p>
            <label htmlFor="password" className="container_input">
               <AiOutlineUser />
               <input name="user" type="text" placeholder="User" />
            </label>
            <p>Password</p>
            <label htmlFor="password" className="container_input">
               <RiLockPasswordLine />
               <input name="password" type="password" placeholder="Password" />
            </label>
            <button className="form_submit" type="submit">
               LOGIN
            </button>
         </form>
      </div>
   );
};

export default FormLogin;
