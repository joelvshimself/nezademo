import { useState, useEffect } from "react";
import "../styles/products.css";

// Define la interfaz para los productos
interface Product {
  title: string;
  image: string;
  description: string;
}

// Lista de productos
const products: Product[] = [
    {
      title: "Sitios Web",
      image: "./webv.webp",
      description:
        `• Aumenta tu presencia digital y credibilidad con un sitio web profesional.\n` +
        `• Mejora la conversión de clientes con un diseño enfocado en experiencia de usuario.\n` +
        `• Adaptado a cualquier dispositivo y optimizado para motores de búsqueda (SEO).\n\n` +
        `Tecnologías: HTML, CSS, JavaScript, React, Next.js, Vite, SEO On-page.`
    },
    {
      title: "Apps",
      image: "./myCover.webp",
      description:
        `• Conecta con tus clientes directamente en sus teléfonos móviles.\n` +
        `• Mejora la retención y la fidelización con una experiencia personalizada.\n` +
        `• Ideal para servicios bajo demanda, reservas, eventos o e-commerce.\n\n` +
        `Tecnologías: React Native, Expo, Firebase, REST APIs, iOS/Android Deployment.`
    },
    {
      title: "Automatización",
      image: "./automatizacion.webp",
      description:
        `• Reduce costos operativos y errores humanos con procesos automatizados.\n` +
        `• Aumenta la eficiencia y velocidad de respuesta en tu negocio.\n` +
        `• Escalable y adaptable a distintas áreas (ventas, inventario, logística).\n\n` +
        `Tecnologías: Python, Node.js, Zapier, RPA, APIs REST/SOAP.`
    },
    {
      title: "Marketing Digital",
      image: "./ads.webp",
      description:
        `• Llega a más clientes con campañas optimizadas en redes sociales y Google Ads.\n` +
        `• Posiciona tu marca con contenido atractivo y estrategias orientadas a resultados.\n` +
        `• Analiza el impacto real con dashboards e informes mensuales.\n\n` +
        `Herramientas: Meta Ads, Google Ads, Canva, Meta Business Suite, Google Analytics, UTM Tags.`
    }
  ];
  
  

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Bloquea el scroll del fondo cuando se abre el modal
  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Limpieza por si acaso
    };
  }, [selectedProduct]);

  return (
    <section className="products-container">
      <h2>Nuestros Productos</h2>
      <div className="wrapper">
        {products.map((product, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${product.image})` }}
            onClick={() => setSelectedProduct(product)}
          >
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProduct.title}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>
                {selectedProduct.description}
            </p>

            <button className="modal-close" onClick={() => setSelectedProduct(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
