import { Link } from "react-router-dom";
import { FaRecycle } from "react-icons/fa"; // Import icons for visual appeal
import "./PublicSpace.css"; 

function PublicSpace() {
  return (
    <div className="public-space-container">
      <h1 className="public-space-heading">Welcome to the Smart Recycling Platform</h1>
      <p className="public-space-description">
        Join us in making the world greener by recycling plastic waste!
      </p>
      <div className="public-space-icons">
        <FaRecycle className="recycle-icon" />
      </div>
      <p className="public-space-action">
        Visit the school or student spaces to track progress.
      </p>
      <div className="public-space-buttons">
        <Link to="/school" className="action-button school-button">School Space</Link>
        <Link to="/student" className="action-button student-button">Student Space</Link>
      </div>
      <div className="progress-section">
        <p>Current Recycling Progress:</p>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default PublicSpace;
