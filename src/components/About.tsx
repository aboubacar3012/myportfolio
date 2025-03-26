import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>About Me</h2>
        <p>
          I am a passionate developer with experience in building web applications.
          This is where you can write more about yourself, your background, interests, and what drives you.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
