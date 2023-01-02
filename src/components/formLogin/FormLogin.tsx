import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import "./formLogin.scss";

const FormLogin = () => {
   return (
      <div className="container_form">
         <div className="line"></div>
         <form action="" className="form_login">
            <label htmlFor="password" className="container_input">
               <AiOutlineUser />
               <input name="user" type="text" placeholder="User" />
            </label>
            <label htmlFor="password" className="container_input">
               <RiLockPasswordLine />
               <input name="password" type="password" placeholder="Password" />
            </label>
            <button className="form_submit" type="submit">
               LOGIN
            </button>
         </form>
         <div className="line"></div>
      </div>
   );
};

export default FormLogin;
