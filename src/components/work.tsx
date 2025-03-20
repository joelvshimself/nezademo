import "../styles/work.css";

const projects = [
    { name: "Rey del Paste", className: "large-box" },
    { name: "myCoverApp", className: "medium-box" }
];

const Work = () => {
    return (
        <section className="work-container">
            <h2>Nuestro Trabajo</h2>
            <div className="work-grid">
                {projects.map((project, index) => (
                    <div key={index} className={`work-item ${project.className}`}>
                        <span className="project-name">{project.name}</span>
                        <div className="project-placeholder"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
