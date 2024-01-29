import { useLoaderData } from "@remix-run/react";
import { Project } from "~/utils/types";
import { createClient } from "@supabase/supabase-js";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Input } from "~/components/ui/input";
import { Form, Link  } from "@remix-run/react";
import { ActionFunctionArgs, redirect } from "@remix-run/node";

export const loader = async ({ params }) => {
  const supabaseURL = "https://oplyzkzywrzqngstylak.supabase.co";
  const supabaseKEY = process.env.SUPABASE_KEY;

  if (supabaseKEY === undefined || supabaseKEY === null) {
    throw new Error("There was an error, missing API KEY");
  }
  const supabase = createClient(supabaseURL, supabaseKEY);

  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.projectId)
    .single();

  return { project: project };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  console.log("HELLO");
  const supabaseURL = "https://oplyzkzywrzqngstylak.supabase.co";
  const supabaseKEY = process.env.SUPABASE_KEY;

  if (supabaseKEY === undefined || supabaseKEY === null) {
    throw new Error("There was an error, missing API KEY");
  }

  const supabase = createClient(supabaseURL, supabaseKEY);
  const formData = await request.formData();

  console.log(formData.get("name"));
  const name = formData.get("name");
  const subtitle = formData.get("subtitle");
  const description = formData.get("description");
  const sourceLink = formData.get("sourceLink");
  const link = formData.get("link");
  const stack = String(formData.get("stack")).split(",");
  console.log(stack);

  console.log(formData.get("id"));

  const { error } = await supabase
    .from("projects")
    .update({
      name: name,
      subtitle: subtitle,
      description: description,
      source_link: sourceLink,
      link: link,
      stack: stack,
    })
    .eq("id", formData.get("id"));

  console.log(error);

  return redirect("/projects");
};

const EditProject = () => {
  const { project }: { project: Project } = useLoaderData<typeof loader>();

  return (
    <div className="flex justify-center lg:p-12 w-full h-full ">
      <Form
        key={project.id}
        id="project-form"
        method="PUT"
        className="w-full  lg:flex lg:space-x-10"
      >
        <div className="w-1/2 space-y-7">
          <div>
            <label htmlFor="name">Nom du projet</label>
            <Input
              id="name"
              name="name"
              placeholder="Nom du projet"
              defaultValue={project.name}
            />
          </div>

          <div>
            <label htmlFor="subtitle">Sous-titre</label>
            <Textarea
              id="subtitle"
              name="subtitle"
              placeholder="Sous-titre"
              defaultValue={project.subtitle}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="sourceLink">Lien vers le code source</label>
            <Input
              id="sourceLink"
              name="sourceLink"
              placeholder="Lien vers le code source"
              defaultValue={project.source_link}
            />
          </div>

          {project.link !== null &&
          project.link !== undefined &&
          project.link !== "" ? (
            <div className="flex flex-col space-y-2">
              <label htmlFor="link">Lien vers le projet</label>
              <Input
                id="link"
                name="link"
                placeholder="Lien vers le projet"
                defaultValue={project.link}
              />
            </div>
          ) : null}

          <div className="flex flex-col space-y-2">
            <label htmlFor="stack">Stack</label>
            <Input
              id="stack"
              name="stack"
              placeholder="Stack"
              defaultValue={String(project.stack)}
            />
          </div>
          <div className="flex space-x-4 ">
            <Button type="submit">Save</Button>
            <Button variant={"destructive"} type="button">
              <Link to="/projects" className="bg-transparent rounded-none">Cancel</Link>
            </Button>
          </div>
        </div>

        <div className="w-1/2">
          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            name="description"
            placeholder="Description"
            defaultValue={project.description}
            rows={25}
          />
        </div>
        <input type="hidden" name="id" value={project.id} />
      </Form>
    </div>
  );
};

export default EditProject;
