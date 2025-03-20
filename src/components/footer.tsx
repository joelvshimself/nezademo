import "../styles/Footer.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <span className="logo-icon">⭐</span>
                    <span className="logo-text">Neza</span>
                </div>

                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">For the record</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Communities</h4>
                        <ul>
                            <li><a href="#">For Artists</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Brand</a></li>
                            <li><a href="#">Investors</a></li>
                            <li><a href="#">Vendors</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Websites</a></li>
                            <li><a href="#">Mobile Apps</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-social">
                    <FaInstagram className="social-icon" />
                    <FaTwitter className="social-icon" />
                    <FaFacebook className="social-icon" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
