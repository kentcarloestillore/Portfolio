import './Contact.css';
import {
    FaPhoneAlt,
    FaFacebook,
    FaEnvelope,
    FaLinkedin,
    FaGithub
} from 'react-icons/fa';

function Contact() {
    return (
        <section className="contact-section" id="contact-section">
            <div className="contact-container">
                <h2>Contact</h2>
                <p className="contact-subtitle">
                    Feel free to reach out through any of the platforms below.
                </p>

                <div className="contact-list">
                    <div className="contact-card">
                        <FaPhoneAlt className="contact-icon" />
                        <div className="contact-text">
                            <span className="contact-title">Phone</span>
                            <span className="contact-preview">+63 995 476 1765</span>
                        </div>
                    </div>

                    <a
                        href="https://www.facebook.com/kentcarloestillore"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >
                        <FaFacebook className="contact-icon" />
                        <div className="contact-text">
                            <span className="contact-title">Facebook</span>
                            <span className="contact-preview">
                                facebook.com/kentcarloestillore
                            </span>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kent-carlo-estillore-166b0b310/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >
                        <FaLinkedin className="contact-icon" />
                        <div className="contact-text">
                            <span className="contact-title">LinkedIn</span>
                            <span className="contact-preview">
                                linkedin.com/in/kentcarloestillore
                            </span>
                        </div>
                    </a>

                    <a
                        href="https://github.com/kentcarloestillore"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >
                        <FaGithub className="contact-icon" />
                        <div className="contact-text">
                            <span className="contact-title">GitHub</span>
                            <span className="contact-preview">
                                github.com/kentcarloestillore
                            </span>
                        </div>
                    </a>

                    <a
                        href="mailto:kentcarloestillore@gmail.com"
                        className="contact-card"
                    >
                        <FaEnvelope className="contact-icon" />
                        <div className="contact-text">
                            <span className="contact-title">Email</span>
                            <span className="contact-preview">
                                kentcarloestillore@gmail.com
                            </span>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Contact;
