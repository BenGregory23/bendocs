import { createClient } from "@supabase/supabase-js";
import { useLoaderData } from "@remix-run/react";
import ProjectButton from "~/components/projects/project-button";
import { Edit, Link as LinkIcon, MoreHorizontal, Plus, Scroll } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Button } from "~/components/ui/button";
import {  useState, useRef } from "react";
import { ScrollArea } from "~/components/ui/scroll-area";
import { marked } from "marked";
import ProjectAdd from "~/components/projects/project-add";

export async function loader() {
  const supabaseUrl = "https://oplyzkzywrzqngstylak.supabase.co";
  const supabaseKey = process.env.SUPABASE_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  const publicUrl = supabase.storage
    .from("bendocs_images")
    .getPublicUrl("projects_images/loleaf_image_1.png");
  console.log(publicUrl);

  const { data: projects, error } = await supabase.from("projects").select("*");

    if (error) {
        throw error;
    }

  return { projects };
}

export default function Projects() {
  const data = useLoaderData();
  
  const [project, setSelectedProject] = useState(data.projects[0]);
  

  return (
    <div className="flex flex-col lg:h-screen w-full justify-center items-center rounded-none ">
      <div className="flex flex-row sticky z-50 lg:z-10 lg:static justify-center items-center w-full lg:min-h-24 h-fit p-3 space-x-4 border-b rounded-none">
        {data.projects.map((currentProject, index) => (
          <ProjectButton
            key={index}
            title={currentProject.name}
            id={currentProject.id}
            project={currentProject}
            setProject={setSelectedProject}
          />
        ))}
      <ProjectAdd/>
      </div>

      <ScrollArea className="flex flex-grow w-full ">
        <div className="flex justify-center items-center w-full h-full rounded-none">
          <div className="flex flex-col w-4/5 lg:w-1/2 justify-center items-center rounded-none">
            <div className="flex flex-col flex-grow px-10  justify-start items-center  space-y-4  lg:min-w-[550px] my-10 ">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl lg:mt-12">
                {project.name}
              </h1>
              <div className="flex flex-row space-x-4">
                {project.stack.map((technology, index) => (
                  <Badge key={index} variant={"secondary"}>
                    {technology}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-row space-x-4">
                {project.link && (
                  <a href={project.link} target="_blank">
                    <Badge>
                      {" "}
                      <LinkIcon
                        className="bg-transparent h-4 w-4 "
                        color="black"
                      />{" "}
                      Voir le projet{" "}
                    </Badge>{" "}
                  </a>
                )}

                {project.source_link && (
                  <a href={project.source_link} target="_blank">
                    <Badge>
                      {" "}
                      <LinkIcon
                        className="bg-transparent h-4 w-4 "
                        color="black"
                      />{" "}
                      Voir les sources{" "}
                    </Badge>{" "}
                  </a>
                )}
              </div>

              <p className="text-xl text-muted-foreground p-1">
                {project.subtitle}
              </p>
            </div>

            <div className="flex flex-col  justify-center items-center  lg:w-full ">
              {project.images !== null && (
                <Carousel className="my-10 mt-0" >
                  <CarouselPrevious />
                  <CarouselContent className="h-96 max-w-prose">
                    {project.images.map((image, index) => (
                      <CarouselItem
                        key={index}
                        className="h-96 flex items-center"
                      >
                        <img
                          src={`https://oplyzkzywrzqngstylak.supabase.co/storage/v1/object/public/bendocs_images/projects_images/${image}.png`}
                          alt=""
                          className="rounded-lg object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext/>
                </Carousel>
              )}
              <p
                className="lg:max-w-prose pb-3 w-full text-lg font-medium tracking-tight rounded-none text-justify"
                dangerouslySetInnerHTML={{
                  __html: marked(project.description),
                }}
              ></p>
            </div>
          </div>
        </div>
        <Button className="fixed bottom-10 right-10">
        
          Modifier</Button>
      </ScrollArea>
    </div>
  );
}
