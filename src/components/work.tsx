import "../styles/work.css";

// const projects = [
//     { name: "Rey del Paste", className: "large-box" },
//     { name: "myCoverApp", className: "medium-box" }
// ];

const Work = () => {
    return (
        <div className="card-container">
          <div className="card-body">
            <h2 className="card-title">Make things float in air</h2>
            <p className="card-description">
              Hover over this card to unleash the power of CSS perspective
            </p>
            <div className="card-image">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="thumbnail"
              />
            </div>
            <div className="card-footer">
              <a href="https://twitter.com/mannupaaji" target="_blank" rel="noopener noreferrer" className="card-link">
                Try now →
              </a>
              <button className="card-button">Sign up</button>
            </div>
          </div>
        </div>
      );
    };

export default Work;
