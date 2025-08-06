import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './css/ContactForm.css';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const form = useRef();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully! 🎉'); // 👈 Better toast
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send message. Please try again 😓'); // 👈 Better toast
        }
      );
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="fname" placeholder="Your First Name" required />
          <input type="text" name="lname" placeholder="Your Last Name" required />
        </div>
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Message" rows={3}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
