import { useLoaderData } from "@remix-run/react";
import { Project } from "~/utils/types";
import { createClient } from "@supabase/supabase-js";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Input } from "~/components/ui/input";
import { Form, Link } from "@remix-run/react";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { useEffect } from "react";

export const loader = async ({ params }: { params: any }) => {
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

export const ProjectDetails = () => {
  const { project }: { project: Project } = useLoaderData<typeof loader>();

  useEffect(() => {
    console.log("LOADINNNNG");
  });

  console.log(project);

  return <h1 className="text-white">QUOI</h1>;
};
