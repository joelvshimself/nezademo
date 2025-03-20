import "../styles/products.css";

const products = [
    { title: "Sitios Web", image: "./webv.png" },
    { title: "Apps", image: "./myCover.png" },
    { title: "Automatizacion", image: "./automatizacion.png" },
    { title: "Marketing", image: "./ads.png" },
    
    

    
];

const Products = () => {
    return (
        <section className="products-container">
            <h2>Nuestros Productos</h2>
            <div className="wrapper">
                {products.map((product, index) => (
                    <div key={index} className="item" style={{ backgroundImage: `url(${product.image})` }}>
                        <h3>{product.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
