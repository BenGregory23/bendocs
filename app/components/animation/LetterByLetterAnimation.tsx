import { motion } from "framer-motion";

interface LetterByLetterAnimationProps {
  text: string,
}

const LetterByLetterAnimation = ({ text }:LetterByLetterAnimationProps) => {
  return (
    <div>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-transparent"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default LetterByLetterAnimation;
