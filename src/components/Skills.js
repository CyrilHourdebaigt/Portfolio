import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaKey, FaNetworkWired } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiStyledcomponents } from 'react-icons/si';

const Skills = () => {
    const skillsData = [
        { category: 'Langages', skills: [
            { name: 'HTML', icon: <FaHtml5 size="40" color="#e34c26" /> },
            { name: 'CSS', icon: <FaCss3Alt size="40" color="#1572B6" /> },
            { name: 'JavaScript', icon: <FaJsSquare size="40" color="#f0db4f" /> },
        ]},
        { category: 'Frameworks', skills: [
            { name: 'React', icon: <FaReact size="40" color="#61DBFB" /> },
            { name: 'Node.js', icon: <FaNodeJs size="40" color="#3C873A" /> },
            { name: 'Express.js', icon: <SiExpress size="40" color="#000000" /> },
        ]},
        { category: 'Bibliothèques', skills: [
            { name: 'Styled Components', icon: <SiStyledcomponents size="40" color="#db7093" /> },
        ]},
        { category: 'Bases de Données', skills: [
            { name: 'MongoDB', icon: <SiMongodb size="40" color="#4DB33D" /> },
        ]},
        { category: 'Outils / Concepts', skills: [
            { name: 'JWT', icon: <FaKey size="40" color="#000000" /> },
            { name: 'API REST', icon: <FaNetworkWired size="40" color="#5A29E4" /> },
        ]},
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '0px' }}>
            {skillsData.map((category, index) => (
                <div key={index} style={{ textAlign: 'center', padding: '0px', background: '#e0e0e0', borderRadius: '10px', width:'auto' }}>
                    <h3 style={{ marginBottom: '10px', color: '#000', fontWeight: 'bold' }}>{category.category}</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px' }}>
                        {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} style={{ textAlign: 'center' }}>
                                {skill.icon}
                                <p style={{ color: '#000', fontWeight: 'bold' }}>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
