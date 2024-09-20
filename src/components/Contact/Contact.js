import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container contact-form mt-5">
        <div className="contact-image">
          <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
        </div>
        <h3 className="text-center mb-4">Get In Touch</h3>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="form-group mb-3">
                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" required />
              </div>
              <div className="form-group mb-3">
                <input type="email" name="txtEmail" className="form-control" placeholder="Your Email *" required />
              </div>
              <div className="form-group mb-3">
                <input type="tel" name="txtPhone" className="form-control" placeholder="Your Phone Number *" required />
              </div>
              <div className="form-group mb-3">
                <textarea name="txtMsg" className="form-control" placeholder="Your Message *" required></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-contact">Send Message</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 contact-info">
            <h5>For more support</h5>
            <p>Email: demerkarthi@gmail.com</p>
            <p>Phone: +91 7339347755</p>
            <p>Address: Palangantham , Madurai ,TN</p>
            <p>Follow us on social media:</p>
            <ul className="list-unstyled">
              <li><a href="https://www.linkedin.com/in/dhanakarthikeyan-p-541b76254/" target='_blank' className="social-link">Linked In</a></li>
              <li><a href="https://github.com/DemerKarthi" target='_blank' className="social-link">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
