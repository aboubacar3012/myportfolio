import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Job Title</h3>
          <p>Company Name, Date Range</p>
          <ul>
            <li>Responsibility or achievement</li>
            <li>Responsibility or achievement</li>
            <li>Responsibility or achievement</li>
          </ul>
        </div>
        {/* Add more experience items as needed */}
      </motion.div>
    </section>
  );
};

export default Experience;
