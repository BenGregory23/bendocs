import { createClient } from "@supabase/supabase-js";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useAuth } from "~/utils/AuthContext";
import ProjectsHeader from "~/components/projects/projects-header";
import ProjectsHeaderMobile from "~/components/projects/projects-header-mobile";
import Project from "../components/Project";

export async function loader() {
  const supabaseUrl = "https://oplyzkzywrzqngstylak.supabase.co";
  const supabaseKey =
    process.env.SUPABASE_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wbHl6a3p5d3J6cW5nc3R5bGFrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDI4NjQ0NywiZXhwIjoyMDE5ODYyNDQ3fQ.lwO3UrPUhuqINVXZBveLZynfcAeoR4I90wl8lwlOP6s";

  if (supabaseKey === undefined || supabaseKey === null) {
    throw new Error("Error : Missing API Key");
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: projects, error } = await supabase.from("projects").select("*");

  if (error) {
    throw error;
  }

  return { projects };
}

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const { projects } = useLoaderData<typeof loader>();
  const { user } = useAuth();
  const [project, setSelectedProject] = useState(projects[0]);
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsMobile(true);
    }
  }, [project]);

  return (
    <div className="flex flex-col lg:h-screen w-full justify-center items-center rounded-none ">
      <div className="flex flex-row sticky z-50 lg:z-10 lg:static justify-center items-center w-full lg:min-h-24 h-fit  space-x-4 border-b rounded-none">
        {isMobile ? (
          <ProjectsHeaderMobile
            projects={projects}
            setSelectedProject={setSelectedProject}
            user={user}
          />
        ) : (
          <ProjectsHeader
            projects={projects}
            setSelectedProject={setSelectedProject}
            user={user}
          />
        )}
      </div>

      <Project project={project} />
    </div>
  );
}
