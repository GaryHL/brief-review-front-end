import { Link } from "react-router-dom";
import FormRegister from "../../../components/formRegister/FormRegister";
import './register.scss'

const login = () => {
   return (
      <div className="container_register">
         <h1>Registrarse</h1>
         <FormRegister />
         <Link to="/login" className="link">¿Ya tienes una cuenta?</Link>

      </div>
   );
};

export default login;
