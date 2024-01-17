import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Project } from "~/utils/types";

export interface ProjectsHeaderMobileProps {
  projects: object[];
  setSelectedProject: (project: object) => void;
  user: object;
}

const ProjectsHeaderMobile = ({
  projects,
  setSelectedProject,
  user,
}: ProjectsHeaderMobileProps) => {
  const setProjectByName = (name: string) => {
    projects.forEach((p: Project) => {
      if (p.name === name) {
        setSelectedProject(p);
      }
    });
  };

  return (
    <div className="fit-content ">
      <Select
        onValueChange={(e) => {
          setProjectByName(e);
        }}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Sélectionner un projet" />
        </SelectTrigger>
        <SelectContent>
          {projects.map((project: Project, index: number) => {
            return (
              <SelectItem key={index} value={project.name}>
                {project.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      {user.authenticated ? <ProjectAdd /> : <></>}
    </div>
  );
};

export default ProjectsHeaderMobile;
