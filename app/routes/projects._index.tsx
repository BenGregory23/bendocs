import { createClient } from "@supabase/supabase-js";
import { Link, useLoaderData } from "@remix-run/react";
import { Badge } from "~/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";
import { ScrollArea } from "~/components/ui/scroll-area";
import { marked } from "marked";
import markdownit from "markdown-it"
import { useAuth } from "~/utils/AuthContext";
import ProjectsHeader from "~/components/projects/projects-header";
import ProjectsHeaderMobile from "~/components/projects/projects-header-mobile";
import { motion } from "framer-motion";

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
  const md = markdownit();
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="flex flex-col lg:h-screen w-full justify-center items-center rounded-none ">
      <div className="flex flex-row sticky z-50 lg:z-10 lg:static justify-center items-center w-full lg:min-h-24 h-fit p-3 space-x-4 border-b rounded-none">
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

      <ScrollArea className="flex flex-grow w-full ">
        <div className="flex justify-center items-center w-full h-full rounded-none">
          <div className="relative flex flex-col w-4/5 lg:w-1/2 justify-center items-center rounded-none">
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
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Badge>
                      {" "}
                      <svg
                        className=" mx-1 rounded-none bg-transparent text-primary"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
                          fill="black"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>{" "}
                      Voir le projet{" "}
                    </Badge>{" "}
                  </a>
                )}

                {project.source_link && (
                  <a
                    href={project.source_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Badge>
                      {" "}
                      <svg
                        className=" mx-1 rounded-none bg-transparent "
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
                          fill="black"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>{" "}
                      Voir les sources{" "}
                    </Badge>{" "}
                  </a>
                )}
              </div>

              <p className="text-xl text-muted-foreground p-1 lg:max-w-prose">
                {project.subtitle}
              </p>
            </div>

            <div className="flex flex-col  justify-center items-center  lg:w-full ">
              {project.images !== null && (
                <Carousel className="my-10 mt-0">
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
                  <CarouselNext />
                </Carousel>
              )}
              <p
                className="markdown lg:max-w-prose pb-3 w-full text-lg font-medium tracking-tight rounded-none text-justify"
                dangerouslySetInnerHTML={{
                  __html: md.render(project.description),
                }}
              ></p>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center relative lg:w-full lg:h-48 border bg-primary text-secondary my-5 lg:p-3 lg:max-w-prose"
              >
                <h1 className="scroll-m-20 p-3 text-xl font-extrabold tracking-tight lg:text-4xl rounded-none bg-transparent text-secondary">
                  <span className="rounded-none bg-transparent font-bold text-secondary text-4xl lg:text-6xl">
                    {"{"}
                  </span>
                  Ce projet vous intéresse ?{" "}
                  <span className="rounded-none bg-transparent font-bold text-secondary text-4xl lg:text-6xl">
                    {"}"}
                  </span>
                </h1>

                <div className="m-2 flex flex-col space-y-2 bg-transparent">
                  <Button variant={"outline"}>
                    <a
                      href={project.source_link}
                      target="_blank"
                      className="rounded-none bg-transparent"
                      rel="noreferrer"
                    >
                      Aller voir le code source
                    </a>
                  </Button>
                  {project.link === null ? null : (
                    <Button variant={"outline"}>
                      <a
                        href={project.link}
                        target="_blank"
                        className="rounded-none bg-transparent"
                        rel="noreferrer"
                      >
                        Aller voir le projet
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {user.authenticated && (
          <Link to={project.id + '/edit'}>
          <Button className="fixed bottom-10 right-10"> Modifier</Button>
          </Link>
        )}
      </ScrollArea>
    </div>
  );
}
