// components/Loader.jsx
import '../styles/loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner" />
      <p className="loader-text">Cargando...</p>
    </div>
  );
};

export default Loader;
