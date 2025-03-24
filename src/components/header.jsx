import { Link } from "react-router-dom"

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
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">A propos</Link></li>
                <li><Link to="/skills">Compétences</Link></li>
                <li><Link to="#">Projets</Link></li>
                <li><Link id="contact-button" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
   )
}
export default Header