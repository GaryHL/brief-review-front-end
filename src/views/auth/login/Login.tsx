import { Link } from "react-router-dom";
import FormLogin from "../../../components/formLogin/FormLogin";
import './login.scss'

const login = () => {
   return (
      <div className="container_login">
         <h1>Iniciar sesión</h1>
         <FormLogin />
         <Link to="/register" className="link">Crear cuenta</Link>
         {/* <p >Or sign up using</p>
         <div className="container_social">
            <a href=""className="item_social">a</a>
            <a href=""className="item_social">a</a>
            <a href=""className="item_social">a</a>
         </div> */}
      </div>
   );
};

export default login;
