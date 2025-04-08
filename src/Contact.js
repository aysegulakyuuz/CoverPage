import React from 'react';
import './App.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="ContactPage">
      <h2>Contact</h2>
      <p>Contact us by filling out the form below:</p>
      <div className="ImageContact"></div>
      {/* Contact form */}
      <ContactForm />
    </div>
  );
};

export default Contact;
