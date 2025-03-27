import { Link, NavLink } from "react-router-dom"

function Header(){

   return(
      <header>
        <Link to="/">
            <img id="logo" width="268" src="../images/logo.png" alt="Logo Olivia" />
        </Link>

        <div className="burger_menu">
            <i id="toggle-button" className="fa-solid fa-bars" />
        </div>
        <nav className="hidden">
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/about">A propos</NavLink></li>
                <li><NavLink to="/skills">Compétences</NavLink></li>
                <li><NavLink to="/projects">Projets</NavLink></li>
                <li><NavLink id="contact-button" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    </header>
   )
}
export default Header