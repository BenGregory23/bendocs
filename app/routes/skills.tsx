import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLoaderData } from "@remix-run/react";
import { stack_type } from "~/utils/stack_type";
import SkillCategory from "~/components/skills/skill-category";
import SkillCategoryMobile from "~/components/skills/skill-category-mobile";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export async function loader() {
  const supabaseURL = "https://oplyzkzywrzqngstylak.supabase.co";
  const supabaseKEY = process.env.SUPABASE_KEY;

  if (supabaseKEY === undefined || supabaseKEY === null) {
    throw new Error("There was an error, missing API KEY");
  }
  const supabase = createClient(supabaseURL, supabaseKEY);

  const { data: skills } = await supabase.from("stack").select("*");


  const current_stack = skills?.filter((skill) => skill.isMainStack === true);
  const tools = skills?.filter((skill) => skill.type === stack_type.TOOLS);
  const frontend = skills?.filter(
    (skill) => skill.type === stack_type.FRONTEND
  );
  const backend = skills?.filter((skill) => skill.type === stack_type.BACKEND);
  const database = skills?.filter(
    (skill) => skill.type === stack_type.DATABASE
  );
  const language = skills?.filter(
    (skill) => skill.type === stack_type.LANGUAGE
  );

  return {
    skills,
    current_stack,
    tools,
    frontend,
    backend,
    database,
    language,
  };
}

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  const data = useLoaderData<typeof loader>();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile) {
    return (
      <div className="flex justify-center items-center  ">
        <div className="flex flex-col justify-center ">
          <SkillCategoryMobile
            array={data.language}
            title={stack_type.LANGUAGE}
          />
          <SkillCategoryMobile
            array={data.frontend}
            title={stack_type.FRONTEND}
          />
          <SkillCategoryMobile
            array={data.backend}
            title={stack_type.BACKEND}
          />
          <SkillCategoryMobile
            array={data.database}
            title={stack_type.DATABASE}
          />
          <SkillCategoryMobile array={data.tools} title={stack_type.TOOLS} />
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="h-screen max-h-screen w-full  rounded-none overflow-scroll">
    <div className="flex justify-center  items-center w-full p-3 ">
       
        <div className="flex flex-col justify-center  ">
          <SkillCategory array={data.language} title={stack_type.LANGUAGE} />
          <SkillCategory array={data.frontend} title={stack_type.FRONTEND} />
          <SkillCategory array={data.backend} title={stack_type.BACKEND} />
          <SkillCategory array={data.database} title={stack_type.DATABASE} />
          <SkillCategory array={data.tools} title={stack_type.TOOLS} />
        </div>
       
    </div>
    </ScrollArea>

  );
};

export default Skills;
