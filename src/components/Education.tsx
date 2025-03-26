import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Education</h2>
        <div className="education-item">
          <h3>Your Degree</h3>
          <p>University Name, Graduation Year</p>
          <p>Additional details about your studies and achievements</p>
        </div>
        {/* Add more education items as needed */}
      </motion.div>
    </section>
  );
};

export default Education;
