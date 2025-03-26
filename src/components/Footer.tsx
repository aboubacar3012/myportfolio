import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
