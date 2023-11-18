// HelpAndSupportPage.js
import React from 'react';
import './Help.css'; // Import the CSS file for styling

const HelpAndSupportPage = () => {
  return (
    <div className="help-and-support-container">
      <header>
        <h1>Help and Support</h1>
      </header>
      <main>
        <section className="faq-section">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <p>
            Here are some common questions and answers that may help you. If you don't find
            what you're looking for, feel free to contact us.
          </p>
          <div className="faq-item">
            <h3>How do I reset my password?</h3>
            <p>
              To reset your password, go to the login page and click on the "Forgot Password" link.
              Follow the instructions sent to your email to reset your password.
            </p>
          </div>
          {/* Add more FAQ items as needed */}
        </section>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>
            If you need further assistance, please don't hesitate to contact our support team.
          </p>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>Thank you for reaching out to us. We will get back to you as soon as possible.</p>
      </footer>
    </div>
  );
};

export default HelpAndSupportPage;
