
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#inicio" className="navbar-logo">Neza</a>


            <ul className="navbar-links">
                <li><a href="#productos">Productos</a></li>
                <li><a href="#nuestros">Clientes</a></li>
                <li><a href="https://wa.me/525537391771?text=Solicito%20informes%20de%20NEZA" target="_blank" rel="noopener noreferrer">Contacto</a></li>

            </ul>
        </nav>
    );
};

export default Navbar;
