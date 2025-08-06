import React from 'react';
import './css/ContactInfoCard.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactInfoCard = ({ iconUrl, text }) => {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);

  const handleClick = () => {
    if (isEmail) {
      window.open(`mailto:${text}`, '_blank');
    } else {
      navigator.clipboard.writeText(text);
      toast.success('✅ Copied to clipboard!', {
        position: 'top-center',
        autoClose: 2000,
        pauseOnHover: false,
        theme: 'dark',
      });
    }
  };

  return (
    <div className="contact-details-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
