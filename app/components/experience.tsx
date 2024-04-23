import { useEffect } from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { motion } from "framer-motion";
import markdownit from 'markdown-it'

interface Stack {
  name: string;
  image: string;
}

interface Experience {
  company_name: string;
  description: string;
  year_start: string;
  year_end: string;
  title: string;
  role: string;
  stack: Stack[];
  id: string;
  created_at: string;
}

export default function Experience({ experience }: { experience: Experience }) {
  const md = markdownit();
 
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div variants={containerVariants}>
      <Card className="max-w-prose mb-4 rounded-lg ">
        <CardHeader>
          <Badge variant={"secondary"} className="w-fit">
            {experience.year_start.split("-")[0]}
            {experience.year_end
              ? ` - ${experience.year_end.split("-")[0]}`
              : ` - Present`}
          </Badge>
          <CardTitle>{experience.title}</CardTitle>
          <CardDescription> {experience.company_name}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify" dangerouslySetInnerHTML={{
            __html: md.render(experience.description),
          }}>


          </p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-rox flex-wrap">
            {experience.stack.map((stack, index) => (
              <motion.div key={index} variants={badgeVariants}>
                <Badge key={index} className="w-fit mx-1">
                  {stack.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
