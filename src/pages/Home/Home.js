import React from 'react';
import ProfileImage from '../../assets/images/profil.JPEG';
import CVFile from '../../assets/documents/CV.pdf';
import {motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Skills from '../../components/Skills';
import './Home.css';

const Home = () => {
    return (
        <motion.div
            style={{
                padding: '20px',
                textAlign: 'center',
                color: 'white',
                marginBottom: '0px',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <h1 style={{ color:'black', fontStyle: 'italic'}}>Transformez vos idées en réalité numérique</h1>
                <img
                    src={ProfileImage}
                    alt="Moi"
                    style={{ width: '150px', borderRadius: '50%', marginTop: '20px' }}
                />
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    backgroundColor: '#fff',
                    color: '#0083b0',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => window.location.href = '#/projects'}
            >
                Voir mes projets
            </motion.button>

            <div className="container" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '40px',
                marginTop: '40px',
                padding: '0 40px',
                }}>

                <motion.section
                    id="about"
                    className='about-section'
                    style={{
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        borderRadius: '10px',
                        marginBottom: '0px',
                        color: '#333',
                        flex: 1,
                        textAlign: 'left',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <h2>À propos de moi</h2>
                    <p>
                    <Typewriter
                        words={[
                        "Bonjour, je m'appelle Cyril Hourdebaigt et je suis développeur web. J'ai suivi une formation en développement web, au cours de laquelle j'ai travaillé sur divers projets utilisant React, Node.js, et d'autres technologies modernes. J'ai eu la chance de suivre cette formation en alternance au sein d'une préfecture pour le ministère de l'Intérieur, ce qui m'a permis de gagner une précieuse expérience professionnelle. Cela m'a appris à collaborer efficacement au sein d'une équipe tout en menant des missions de manière autonome.",
                        ]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={40}
                        delaySpeed={1000}
                    />
                    </p>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <a
                        href={CVFile}
                        download="CV.pdf"
                        style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            color: '#fff',
                            backgroundColor: '#ff5722',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                        }}
                        >
                        Télécharger mon CV
                        </a>
                    </div>
                </motion.section>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2.5 }}
                    style={{ flex: 1, }}
                >
                    < Skills />
                </motion.div>
            </div>
        </motion.div>
        
    );
};

export default Home;
