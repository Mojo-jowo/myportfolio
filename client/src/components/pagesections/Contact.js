import React from 'react';
import { Link } from 'react-router-dom';


import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <section className="contact-form">
                <h1 className="contactheader">Contact me</h1>
                <p className="contactstatement">
                    I’m interested in opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
                </p>
                <form action="mailto:ojowoandrew@gmail.com" className="form">
                    <input type="text" placeholder="name" className="contactname" required/>
                    <input type="email" placeholder="email" className="contactemail" />
                    <input type="text" placeholder="Subject" className="contactsubject"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Talk to me..." className="textarea"></textarea>
                    <br />
                    <button>Send</button>
                </form>
                
            </section>

            <section className="contact-icons">

                <a href="https://twitter.com/mojo_jowoo" target="_blank" rel="noreferrer" className="contact-item">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="mailto:ojowoandrew@gmail.com" target="_blank" rel="noreferrer" className="contact-item">
                    <i class="fas fa-envelope"></i>
                    <p>ojowoandrew@gmail.com</p>
                </a>
                
            </section>
        </div>
    )
}

export default Contact;
