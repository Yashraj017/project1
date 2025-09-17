import { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialMedia from './SocialMedia';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message || 'Form submitted successfully!');
    } catch (error) {
      alert('Failed to submit the form. Please try again!');
    }
  };

  return (
    <>

    <Navbar />

    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <section className="mb-5">
        <h2>Get in Touch Us at :-</h2>
        <p><strong>Address:</strong> <a href="https://maps.app.goo.gl/c1HP4bXoTLUeGW9A9"> Shop No.1, Grampanchyat Building, Chh.Shivaji Maharaj Chowk, Varvand, Tal-Daund, Dist-Pune, 412215 </a></p>
        <p><strong>Phone:</strong> <a href="tel:+91-9960247787">+91-9960247787</a></p>
        <p><strong>Email:</strong> <a href="mailto:vaibhavijewellers@gmail.com">vaibhavijewellers@gmail.com</a></p>
        <p><strong>Follow Us:</strong> 
          <a href="#"> Instagram</a> | 
          <a href="#"> Facebook</a> | 
          <a href="#"> Pinterest</a>
        </p>
      </section>

      <section className="mb-5">
        <h2>Store Hours</h2>
        <p><strong>Monday - Saturday:</strong> 10:00 AM - 8:00 PM</p>
        <p><strong>Sunday:</strong> Closed</p>
      </section>

      <form onSubmit={handleSubmit} id="contactForm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="inquiry" className="form-label">Type of Inquiry</label>
          <select className="form-select" id="inquiry" value={formData.inquiry} onChange={handleChange}>
            <option>General Inquiry</option>
            <option>Custom Design Request</option>
            <option>Jewelry Repair</option>
            <option>Appointment Booking</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea className="form-control" id="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      <center>
        <section className="mb-5">
          <h2>Visit Us</h2>
          <p>We’d love to meet you in person! Find us on the map below:</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d946.1976463805132!2d74.4087729!3d18.447815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc31757a7c62d4f%3A0xe179634f41b9d8a0!2sVaibhavi%20jewellers!5e0!3m2!1sen!2sin!4v1740726495164!5m2!1sen!2sin"
            width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </center>

      <section className="text-center mb-5">
        <h2>Let’s Create Something Special</h2>
        <p>Whether you’re looking for the perfect engagement ring or want to redesign an heirloom piece, we’re here to help.</p>
        <a href="#" className="btn btn-outline-success">Book an Appointment</a>
      </section>

    </div>
    <SocialMedia />
    <Footer />
    </>
  );

}


export default Contact;
