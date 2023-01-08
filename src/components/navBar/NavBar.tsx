import "./navBar.scss";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useBoolean } from "../../hooks/useBoolean";
import { Link,Navigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const NavBar = () => {
   const openNavbar = useBoolean(false);

   const navigate = useNavigate();

   const logoutSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      axios.post("http://127.0.0.1:8000/api/logout").then((res) => {
         if (res.data.status === 200) {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("auth_name");
            swal("Success", res.data.message, "success");
            navigate("/login");
            // window.location.reload();
         }
      });
   };

   return (
      <>
         <div className={openNavbar.boolean ? "menu open" : "menu close"}>
            <div className="menu_header">
               <h2 className="logo">Brief Review</h2>
               <AiOutlineDoubleLeft
                  className="btn_menu"
                  onClick={() => openNavbar.setTogle()}
               />
            </div>
            <ul className="options_menu">
               <li className="option_menu">
                  <Link to="/" className="option_menu">
                     Home
                  </Link>
               </li>
               <li className="option_menu">
                  <Link to="/profile" className="option_menu">
                     Mi Perfil
                  </Link>
               </li>
               
               <li className="option_menu" onClick={logoutSubmit}>
                  Cerrar sesion
               </li>
            </ul>
         </div>
         <nav className="container_navbar">
            <h2 className="logo">Brief Review</h2>
            <CgMenuGridR
               className="btn_menu"
               onClick={() => openNavbar.setTogle()}
            />
         </nav>
      </>
   );
};

export default NavBar;
