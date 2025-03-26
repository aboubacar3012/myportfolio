import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>CSS/SASS</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>
          {/* Add more skill categories as needed */}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
