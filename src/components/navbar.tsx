
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Neza</div>
            <ul className="navbar-links">
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
