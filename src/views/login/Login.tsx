import FormLogin from "../../components/formLogin/FormLogin";
import './login.scss'

const login = () => {
   return (
      <div className="container_login">
         <h1>Iniciar sesión</h1>
         <FormLogin />
         <p >Or sign up using</p>
         <div className="container_social">
            <a href=""className="item_social">a</a>
            <a href=""className="item_social">a</a>
            <a href=""className="item_social">a</a>
         </div>
      </div>
   );
};

export default login;
