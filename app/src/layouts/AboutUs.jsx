import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Welcome to our platform where schools and students can get involved in recycling efforts and track progress!</p>
      </header>

      <section className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          Our platform aims to empower schools and students to actively participate in recycling and sustainability efforts.
          By joining, schools can track their recycling statistics, improve their rank, and make a positive impact on the environment.
          Students can track their personal contributions, see their impact, and be part of a community working towards a greener future.
        </p>
      </section>

      <section className="inscription-section">
        <div className="inscription-card">
          <h3>School Inscription</h3>
          <p>
            Schools can register on our platform to access valuable data about their recycling activities. This includes tracking
            progress, setting goals, and comparing ranks with other schools. Schools can also encourage their students to participate
            in the recycling initiatives and stay engaged in sustainability practices.
          </p>
          <Link to="/school-inscription" className="cta-button">
            Register Your School
          </Link>
        </div>
        <div className="inscription-card">
          <h3>Student Inscription</h3>
          <p>
            Students can sign up to track their recycling activities, monitor their progress, and see how they compare with peers
            in their school. By participating, students contribute to their school's overall recycling effort, helping them reach
            new milestones and make a significant impact on the environment.
          </p>
          <Link to="/student-inscription" className="cta-button">
            Register as a Student
          </Link>
        </div>
      </section>

      <footer className="about-us-footer">
        <p>For more information, please feel free to contact us!</p>
      </footer>
    </div>
  );
}

export default AboutUs;
