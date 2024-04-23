import { ScrollArea } from "~/components/ui/scroll-area";
import { createClient } from "@supabase/supabase-js";
import { useLoaderData } from "@remix-run/react";
import Experience from "~/components/experience";
import { Meta, Links, Scripts } from "@remix-run/react";
import { useRouteError } from "@remix-run/react";
import { motion } from "framer-motion";

export async function loader() {
  const supabaseUrl = "https://oplyzkzywrzqngstylak.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wbHl6a3p5d3J6cW5nc3R5bGFrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDI4NjQ0NywiZXhwIjoyMDE5ODYyNDQ3fQ.lwO3UrPUhuqINVXZBveLZynfcAeoR4I90wl8lwlOP6s";
  const supabase = createClient(supabaseUrl, supabaseKey);

  // fetch data from Supabase
  let { data: experiences, error } = await supabase
    .from("experiences")
    .select("*")
    .order("year_start", { ascending: false });

  if (error) {
    throw error;
  }

  return {
    experiences,
  };
}

export default function Experiences() {
  const data = useLoaderData<typeof loader>();



  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const experienceVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <ScrollArea className="h-screen w-full  rounded-none p-6 flex flex-row justify-center items-center ">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center items-center w-full h-full p-3"
        variants={containerVariants}
      >
        {data.experiences.map((experience, index) => (
          <motion.div key={index} variants={experienceVariants}>
            <Experience key={index} experience={experience} />
          </motion.div>
        ))}
      </motion.div>
    </ScrollArea>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
        The page failed to load. Please try again later.
      </body>
    </html>
  );
}
