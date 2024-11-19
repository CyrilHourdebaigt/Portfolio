import React, { useState } from 'react';
import './Projects.css';
import ProjectImage1 from '../../assets/images/grimoir.webp';
import ProjectImage2 from '../../assets/images/kasa.png';
import ProjectImage3 from '../../assets/images/booki.jfif';
import ProjectImage4 from '../../assets/images/archi.PNG';
import ProjectImage5 from '../../assets/images/pref.png';
import ProjectImage6 from '../../assets/images/grimoirmodal.png';
import ProjectImage7 from '../../assets/images/kasamodal.png';
import ProjectImage8 from '../../assets/images/bookimodal.png';
import ProjectImage9 from '../../assets/images/archimodal.png';
import ProjectImage10 from '../../assets/images/prefmodal.png';

const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
  
    const projects = [
      {
        id: 1,
        title: 'Mon vieux grimoir',
        description: 'Application permettant de gérer et rechercher des livres comme un véritable grimoire. Utilisation de Express et MongoDB.',
        image: ProjectImage1,
        modalImage: ProjectImage6,
        githubLink: 'https://github.com/CyrilHourdebaigt/Mon-vieux-grimoir.git',
      },
      {
        id: 2,
        title: 'Kasa',
        description: 'Plateforme de location de logements temporaires avec une interface utilisateur intuitive. Utilisation de React.',
        image: ProjectImage2,
        modalImage: ProjectImage7,
        githubLink: 'https://github.com/CyrilHourdebaigt/Kasa.git',
      },
      {
        id: 3,
        title: 'Booki',
        description: 'Site internet qui permet de trouver des hébergements et des activités dans la ville de son choix. Utilisation de HTML & CSS.',
        image: ProjectImage3,
        modalImage: ProjectImage8,
        githubLink: 'https://github.com/CyrilHourdebaigt/Agence.git',
      },
      {
        id: 4,
        title: 'Sophie Bluel',
        description: 'Site portfolio d’une architecte d’intérieur. Utilisation de JavaScript.',
        image: ProjectImage4,
        modalImage: ProjectImage9,
        githubLink: 'https://github.com/CyrilHourdebaigt/Portfolio-architecte-sophie-bluel.git',
      },
      {
        id: 5,
        title: 'Préfecture des Pyrénées-Atlantiques',
        description: 'Application statistiques pour le bureau du développement territorial et des finances locales. Cette application permet d’afficher des statistiques internes à travers des tableaux et des graphiques. Utilisation de React et de Chart.js',
        image: ProjectImage5,
        modalImage: ProjectImage10,
      },
    ];
  
    const openModal = (project) => {
      setSelectedProject(project);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
      setSelectedProject(null);
    };
  
    return (
      <div>
        <h1>Mes Projets</h1>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openModal(project)}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Modale pour afficher les détails du projet */}
        {showModal && selectedProject && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedProject.modalImage} alt={selectedProject.title} className="modal-image" />
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              {selectedProject.githubLink && (
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    Voir le code sur GitHub
                </a>
                )}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Projects;
  