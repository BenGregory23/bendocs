
import { stack_type } from "~/utils/stack_type"

interface Skill {
  name: string,
  image_path: string,
  isMainStack: boolean,
  type: stack_type
}

export const Skill = ({ skill }: any) => {


  if (!skill || !skill.svg) {
    // Handle the case where skill or skill.svg is undefined or empty
    return null;
  }

  return (
    <div className="p-3 max-w-30 w-24 h-24 lg:w-30 lg:h-30 flex-col border  flex justify-center items-center mb-2">
      <header>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      </header>
     
      <i className={`text-6xl dark:text-white ${skill.svg ? skill.svg : null}`} />
    </div>
  );
};