import { motion } from "framer-motion";
import ProjectAdd from "./project-add";
import ProjectButton from "./project-button";
import { Badge } from "../ui/badge";

const ProjectsHeader = ({ projects, setSelectedProject, user }: any) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={"visible"}
      variants={containerVariants}
      className="flex flex-row sticky  z-50 lg:z-10 lg:static justify-center items-center w-full h-full p-1 space-x-4 rounded-none overflow-x-scroll"
    >
      {projects.map((currentProject: any, index: number) => (
        <motion.div variants={buttonVariants} className="w-full relative">
          <ProjectButton
            key={index}
            title={currentProject.name}
            id={currentProject.id}
            project={currentProject}
            setProject={setSelectedProject}
          />
          {currentProject.isNew ? (
            <Badge className="absolute -top-2 -left-1">New</Badge>
          ) : (
            <></>
          )}
        </motion.div>
      ))}
      {user.authenticated ? <ProjectAdd /> : <></>}
    </motion.div>
  );
};

export default ProjectsHeader;
