import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/components/ui/card";
import { Link } from "@remix-run/react";
import { Badge } from "~/components/ui/badge";
import { useRef } from "react";
import { motion } from "framer-motion";
import LetterByLetterAnimation from "~/components/animation/LetterByLetterAnimation";


export default function Index() {
  const title = useRef();

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-3 rounded-none    bg-transparent bg-[linear-gradient(to_right,#80808012_2px,transparent_1px),linear-gradient(to_bottom,#80808012_2px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
      <div className="flex flex-col justify-center items-center w-full h-full p-3 rounded-none lg:max-w-3xl bg-transparent">
        <h1
          ref={title}
          className="flex  items-end scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-transparent "
        >
          <LetterByLetterAnimation text="Ben GREGORY" />
          <Badge variant={"secondary"} className="bg-accentGreen">Docs</Badge>
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-justify bg-transparent ">
          Bienvenue sur{" "}
          <span className="font-bold">
            Docs
          </span>
          , mon site où je partage mes expériences, mes projets, mes compétences
          et mes formations.
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-justify bg-transparent ">
          Ce site est aussi un projet personnel de prise en main du framework{" "}
          <a
            href="https://remix.run/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            Remix
          </a>
          . Pratiquant React depuis plusieurs années, et ayant déjà utilisé
          NextJS, j'ai décidé d'essayer Remix.
        </p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-row flex-wrap justify-center items-center w-full p-3 gap-3 rounded-none   lg:my-10 bg-transparent"
        >
          <motion.div variants={cardVariants}>
            <Card className="lg:max-w-prose min-w-60  lg:w-64 lg:h-30  rounded-lg  hover:outline">
              <Link to="/about">
                <CardContent className="flex flex-col justify-center items-center p-8">
                  <CardTitle>A propos de moi</CardTitle>
                  <CardDescription>Découvrez qui je suis</CardDescription>
                </CardContent>
              </Link>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="max-w-prose  min-w-60 lg:w-64 lg:h-30 rounded-lg hover:outline">
              <Link to="/experiences">
                <CardContent className="flex flex-col justify-center items-center p-8">
                  <CardTitle>Expériences</CardTitle>
                  <CardDescription>Découvrez mes expériences</CardDescription>
                </CardContent>
              </Link>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="max-w-prose min-w-60 lg:w-64 lg:h-30  rounded-lg  hover:outline">
              <Link to="/projects">
                <CardContent className="flex flex-col justify-center items-center p-8">
                  <CardTitle>Projets</CardTitle>
                  <CardDescription>Découvrez mes projets</CardDescription>
                </CardContent>
              </Link>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="max-w-prose min-w-60 lg:w-64 lg:h-30  rounded-lg  hover:outline">
              <Link to="/skills">
                <CardContent className="flex flex-col justify-center items-center p-8">
                  <CardTitle>Compétences</CardTitle>
                  <CardDescription>Ma stack technique</CardDescription>
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        </motion.div>
        {/* <div className="absolute inset-0 -z-20 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div> */}

      </div>

    </div>
  );
}
