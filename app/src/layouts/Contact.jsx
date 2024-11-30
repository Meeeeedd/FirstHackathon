import { useState } from "react";
import "./Contact.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    // Handle form submission logic (e.g., API call)
  };

  return (
    <div className="contact-us-container">
      <header className="contact-us-header">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
      </header>

      <section className="contact-info-section">
        <h2>Our Contact Information</h2>
        <p>If you need assistance, here's how you can get in touch with us:</p>
        <ul>
          <li>Email: <a href="mailto:support@recyclingplatform.com">support@recyclingplatform.com</a></li>
          <li>Phone: <a href="tel:+1234567890">+1 234 567 890</a></li>
          <li>Address: 123 Recycling Street, Green City, Eco Land</li>
        </ul>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;
