import "./navBar.scss";
import { CgMenuGridR } from "react-icons/cg";
import {useNavigate} from 'react-router-dom';
import { useBoolean } from "../../hooks/useBoolean";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const NavBar = () => {
   const openNavbar = useBoolean(false);

   const navigate = useNavigate();

   const logoutSubmit = (e:React.FormEvent) =>{

      e.preventDefault();

      axios.post('http://127.0.0.1:8000/api/logout').then(res=>{
         if(res.data.status === 200){
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_name');
            swal("Success",res.data.message,"success");
            navigate('/login');
            // window.location.reload();
         }
      });


   }

   return (
      <>
         <div className={openNavbar.boolean ? "menu open" : "menu close"}>
            <div className="menu_header">
               <h2 className="logo">Brief Review</h2>
               <CgMenuGridR
                  className="btn_menu"
                  onClick={() => openNavbar.setTogle()}
               />
            </div>
            <ul className="options_menu">
               <li>
                  <Link to="/login" className="option_menu">
                     Iniciar sesion
                  </Link>
               </li>
               <li>
                  <Link to="/register" className="option_menu">
                     Registrarse
                  </Link>
               </li>
               <li className="option_menu logout" onClick={logoutSubmit}>Cerrar sesion</li>
            </ul>
         </div>
         <nav className="container_navbar">
            <h2 className="logo">Brief Review</h2>
            <CgMenuGridR onClick={() => openNavbar.setTogle()} />
         </nav>
      </>
   );
};

export default NavBar;
