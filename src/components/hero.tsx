import "../styles/hero.css";
import { useState, useEffect } from "react";

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 600); // Espera 1 segundo antes de activar la transformación
    }, []);
    return (
        <section className="hero-section">
            <div className="hero-gradient-background" />

            <h1 className="hero-title">NEZA</h1>

            <div className="card-group">
                {[...Array(4)].map((_, index) => (
                        <div key={index} className="card-wrapper">
                            <div className={`bigcard card ${loaded ? "active" : ""}`}></div>
                            <div className={`littlecard card ${loaded ? "active" : ""}`}></div>
                        </div>
                    ))}
            </div>
            <br />
            <br /><br /><br /><br /><br />
        </section>
    );
};

export default Hero;
