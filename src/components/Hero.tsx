import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = ['Frontend', 'Backend', 'DevOps', 'IA', 'Mobile'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="avatar-container">
            <img 
              src="/profile-photo.jpg" 
              alt="Aboubacar" 
              className="avatar-image" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                document.querySelector('.avatar-fallback')?.setAttribute('style', 'display: flex');
              }}
            />
            <div className="avatar-fallback">
              <span>AB</span>
            </div>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Salut, je suis Aboubacar
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Développeur full-stack passionné par l'IA et le DevOps
        </motion.h2>
        
        <motion.div 
          className="rotating-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span>Spécialiste </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={textIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="highlight"
            >
              {rotatingTexts[textIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.a 
            href="#contact" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Me contacter
          </motion.a>
          <motion.a 
            href="#projects" 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mes projets
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }} 
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }} 
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }} 
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
