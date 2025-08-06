import React from 'react'
import './css/ContactMe.css';
import ContactInfoCard from './ContactInfoCard';
import ContactForm from './ContactForm';
import Mail from '../assets/ticon/mail.svg'
import Github from '../assets/devop/github.svg';

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>
            Contact Me
        </h5>

        <div className='contact-content'>
            <div style={{ flex: 1}}>
                <ContactInfoCard 
                iconUrl={Mail}
                text='dilshadrangrejj@gmail.com'
                />
                <ContactInfoCard 
                iconUrl={Github}
                text='https://github.com/dilshad-rangrej'
                />
            </div>
            <div style={{ flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe