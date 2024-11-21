import { ScrollArea } from "~/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export default function About() {
  return (
    <ScrollArea className="h-screen w-full  rounded-none p-6 flex justify-center items-center">
      <div className="flex flex-row justify-center w-full h-screen items-center rounded-none ">
        <section className="flex flex-col lg:max-w-prose">
          <div className="flex flex-row items-center justify-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/BenGregory23.png" />
              <AvatarFallback>BG</AvatarFallback>
            </Avatar>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 rounded-none">
              Ben Gregory
            </h2>
          </div>

          <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-pretty ">
            Je suis un développeur web passionné. Fort de deux années
            d'expériences dans le domaine du développement, j'ai eu
            l'opportunité de travailler sur des projets variés, allant de la
            création de sites web interactifs à la conception d'applications
            robustes.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-pretty ">
            Je maitrise plusieurs technologies et frameworks, tels que React,
            Vue. Avec une préférence pour Vue ces derniers temps. Niveau backend
            j'utilise le plus souvent Javascript/Java. Je suis constamment en
            quête d'apprentissage pour rester à la pointe de la technologie. Je
            travaille actuellement chez{" "}
            <a
              className="text-accentGreen underline"
              target="_blank"
              rel="noreferrer"
              href="https://Corben.fr"
            >
              Corben
            </a>{" "}
            en tant que développeur fullstack à Tours (en full remote).
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-pretty ">
            En dehors du développement, j'ai une passion pour l'escalade, les
            jeux vidéo (surtout compétitifs), et je suis un fervent fan de
            Formule 1. Mon objectif à court terme est de maîtriser le langage{" "}
            <a
              className="text-accentGreen underline"
              href="https://golang.org/"
              target="_blank"
            >
              {" "}
              Go (Golang)
            </a>
            , et de perfectionner mes compétences en utilisant{" "}
            <a
              className="text-accentGreen underline"
              href="https://spring.io/guides"
              target="_blank"
            >
              Spring Boot
            </a>
            . À long terme, je vise à développer un SAAS complet. Je suis
            toujours ouvert aux nouvelles opportunités et aux collaborations
            passionnantes dans le monde du développement.
          </p>
        </section>
      </div>
    </ScrollArea>
  );
}
