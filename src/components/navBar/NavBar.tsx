import "./navBar.scss";
import { CgMenuGridR } from "react-icons/cg";
import { useBoolean } from "../../hooks/useBoolean";
import { Link } from "react-router-dom";

const NavBar = () => {
   const openNavbar = useBoolean(false);

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
               <li className="option_menu">Cerrar sesion</li>
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
