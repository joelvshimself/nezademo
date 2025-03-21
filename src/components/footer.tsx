import "../styles/footer.css";
import { FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="./star.png" alt="Logo estrella" className="logo-icon" />
                    <span className="logo-text">Neza</span>
                </div>

                {/* <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">For the record</a></li>
                        </ul>
                    </div>

                </div> */}

                <div className="footer-social">
                <a href="https://www.instagram.com/neza.startup/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
