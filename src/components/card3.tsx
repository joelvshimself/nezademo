import { useState, MouseEvent } from "react";
import "../styles/card3.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="card-body"
      style={{
        transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

const ThreeDCardDemo: React.FC = () => {
  return (
    <>
      <h2 className="card-title">Nuestro Trabajo</h2>
      <div className="card-container">
        <a href="https://elreydelpaste.vercel.app" target="_blank" rel="noopener noreferrer">
        <Card
          title="El Rey del Paste"
          description="Un restaurante de pastes en Nuevo León con una tradición única."
          imageUrl="./reydelpaste.png"
        />
        </a>
        <a href="https://mycoverwebs.vercel.app" target="_blank" rel="noopener noreferrer">
        <Card
          title="myCoverApp"
          description="Una aplicación para la compra masiva de tickets en iOS."
          imageUrl="./landingcover.png"
        />
        </a>
      </div>
    </>
  );
};

export default ThreeDCardDemo;
