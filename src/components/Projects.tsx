import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  tech: string;
  description: string;
  imgSrc: string;
  githubUrl: string;
  liveUrl: string;
  fullDescription: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Application E-commerce',
      tech: 'React, Node.js, MongoDB',
      description: 'Plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
      imgSrc: '/projects/ecommerce.jpg',
      githubUrl: '#',
      liveUrl: '#',
      fullDescription: `Cette plateforme e-commerce complète offre une expérience utilisateur fluide avec:
      
      • Un frontend React avec gestion d'état par Redux
      • Backend Node.js avec Express et MongoDB
      • Système de paiement avec Stripe
      • Gestion des commandes et des utilisateurs
      • Administration complète des produits
      • Responsive design et performances optimisées`
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      tech: 'Vue.js, Firebase, D3.js',
      description: 'Tableau de bord interactif pour visualiser des données analytiques en temps réel.',
      imgSrc: '/projects/dashboard.jpg',
      githubUrl: '#',
      liveUrl: '#',
      fullDescription: `Dashboard analytics avec visualisations de données complexes:
      
      • Développé avec Vue.js et Vue Router
      • Graphiques interactifs avec D3.js
      • Données en temps réel via Firebase
      • Filtres avancés et export PDF/CSV
      • Thème sombre/clair et paramètres personnalisables`
    },
    {
      id: 3,
      title: 'Application Mobile',
      tech: 'React Native, Expo, Firebase',
      description: 'Application mobile multi-plateforme pour la gestion de tâches et rappels.',
      imgSrc: '/projects/mobile.jpg',
      githubUrl: '#',
      liveUrl: '#',
      fullDescription: `Application mobile de gestion de tâches avec:
      
      • Interface intuitive développée avec React Native
      • Construction et déploiement via Expo
      • Stockage des données et authentification avec Firebase
      • Notifications push pour les rappels
      • Synchronisation cross-device
      • Mode hors-ligne avec synchronisation automatique`
    },
    {
      id: 4,
      title: 'Infrastructure DevOps',
      tech: 'Docker, Kubernetes, AWS',
      description: 'Architecture microservices déployée sur Kubernetes avec CI/CD automatisé.',
      imgSrc: '/projects/devops.jpg',
      githubUrl: '#',
      liveUrl: '#',
      fullDescription: `Infrastructure cloud moderne avec:
      
      • Architecture microservices containerisée avec Docker
      • Orchestration avec Kubernetes sur AWS EKS
      • CI/CD automatisé avec GitHub Actions
      • Monitoring avec Prometheus et Grafana
      • Infrastructure as Code avec Terraform
      • Gestion des secrets avec Vault`
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Projets
      </motion.h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 }
            }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image-container">
              <img 
                src={project.imgSrc} 
                alt={project.title} 
                className="project-image"
                onError={(e) => {
                  e.currentTarget.src = '/projects/placeholder.jpg';
                }}
              />
              <div className="project-overlay">
                <motion.button 
                  className="view-project-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Voir détails
                </motion.button>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="tech">{project.tech}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <motion.a 
                  href={project.githubUrl} 
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href={project.liveUrl}
                  className="live-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal pour afficher les détails du projet */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-modal-btn"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              
              <div className="modal-content">
                <div className="modal-image-container">
                  <img 
                    src={selectedProject.imgSrc} 
                    alt={selectedProject.title} 
                    className="modal-image"
                    onError={(e) => {
                      e.currentTarget.src = '/projects/placeholder.jpg';
                    }}
                  />
                </div>
                
                <div className="modal-details">
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-tech">{selectedProject.tech}</p>
                  <div className="modal-description" dangerouslySetInnerHTML={{ 
                    __html: selectedProject.fullDescription.replace(/\n/g, '<br />') 
                  }} />
                  
                  <div className="modal-links">
                    <motion.a 
                      href={selectedProject.githubUrl} 
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> Code source
                    </motion.a>
                    <motion.a 
                      href={selectedProject.liveUrl}
                      className="btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Voir le projet
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
