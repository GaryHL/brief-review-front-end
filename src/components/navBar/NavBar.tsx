import './navBar.scss';
import {CgMenuGridR} from 'react-icons/cg'

const NavBar = () => {
  return (
    <nav className="container_navbar">
        <h2>Brief Review</h2>
        <div className="links">
            <CgMenuGridR/>
        </div>
    </nav>
  )
}

export default NavBar