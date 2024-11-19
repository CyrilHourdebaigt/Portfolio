import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css'; 

const Contact = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Contactez-moi</h1>
            <p>
                Vous souhaitez me contacter pour un projet ou une opportunité professionnelle ? <br></br>N'hésitez pas à m'envoyer un message !
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '10px' }}>
                     Nom :
                    <input type="text" name="name" style={{ marginTop: '5px', padding: '10px' }} />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '10px' }}>
                    Email :
                    <input type="email" name="email" style={{ marginTop: '5px', padding: '10px' }} />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '10px' }}>
                    Message :
                    <textarea name="message" rows="5" style={{ marginTop: '5px', padding: '10px' }}></textarea>
                </label>
                <button type="submit" style={{ padding: '10px',width:'140px', backgroundColor: '#333', color: 'white', border: 'none' }}>
                    Envoyer
                </button>
            </form>
            <div className="reseau" style={{ marginTop: '20px' }}>
                <h3>Me retrouver sur :</h3>
                <ul style={{ display: 'flex', justifyContent: 'row', gap:'50px', listStyle: 'none', padding: 0, maxWidth: '400px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <FaGithub style={{ marginRight: '10px',  fontSize: '36px' }} />
                        <a href="https://github.com/CyrilHourdebaigt" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <FaLinkedin style={{ marginRight: '10px',  fontSize: '36px', color: '#0a66c2' }} />
                        <a href="https://www.linkedin.com/in/cyril-hourdebaigt/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <FaEnvelope style={{ marginRight: '10px',  fontSize: '36px', color: '#1cb746' }} />
                        <a href="mailto:hourdebaigt_cyril@hotmail.com">
                            hourdebaigt_cyril@hotmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
