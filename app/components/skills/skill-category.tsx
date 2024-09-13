import { Skill } from "./skill";
import { stackTypeDescriptions } from "~/utils/stack_type";
import { motion } from "framer-motion";

const SkillCategory = ({ array, title }: any) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="flex flex-col m-1"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col justify-start my-3"
        variants={containerVariants}
      >
        {title}
        <p className="text-sm text-muted-foreground m-0">
          {stackTypeDescriptions[title]}
        </p>
      </motion.div>

      <motion.div
        className="flex lg:flex-row space-x-3"
        variants={containerVariants}
      >
        {array.map((skill: any, index: number) => (
          <motion.div key={index} variants={skillVariants}>
            <Skill skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillCategory;
