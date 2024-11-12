import { motion } from 'framer-motion';



// eslint-disable-next-line react/prop-types
const FloatingImage = ({ imageSrc, altText }) => {
  return (
    <motion.div
      className="floating-image-container"
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
    >
      <img src={imageSrc} alt={altText} className="floating-image" />
    </motion.div>
  );
};

export default FloatingImage;
