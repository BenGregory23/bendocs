import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/components/ui/card"
import { Link } from "@remix-run/react"
import { Badge } from "~/components/ui/badge";



export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-3 rounded-none">

      <div className="flex flex-col justify-center items-center w-full h-full p-3 rounded-none lg:max-w-3xl">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
        Ben GREGORY <Badge variant={"secondary"}>Docs</Badge>
        
      </h1>

      <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-justify ">
      Bienvenue sur <span className="
       font-bold
      ">Docs</span>, mon site où je partage mes expériences, mes projets, mes compétences et mes formations, en gros c'est mon portfolio.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-justify ">
      Ce site est aussi un projet personnel de prise en main du framework <a href="https://remix.run/" target="_blank" className="text-blue-500 underline">Remix</a>. Pratiquant React depuis plusieurs années, et ayant déjà utilisé NextJS, j'ai décidé d'essayer Remix.
      </p>

      <div className="flex flex-row flex-wrap justify-center items-center w-full p-3 rounded-none   lg:my-10">
        <Card className="lg:max-w-prose min-w-60  lg:w-64 lg:h-30 m-2 rounded-lg  hover:outline">
          <Link to="/experiences">
            <CardContent className="flex flex-col justify-center items-center p-8">
              

                <CardTitle>A propos de moi</CardTitle>
                <CardDescription>
                  Découvrez qui je suis
                </CardDescription>
        
            </CardContent>
          </Link>
        </Card>

        <Card className="max-w-prose  min-w-60 lg:w-64 lg:h-30 m-2 rounded-lg hover:outline">
          <Link to="/experiences">
            <CardContent className="flex flex-col justify-center items-center p-8">
              

                <CardTitle>Expériences</CardTitle>
                <CardDescription>
                Découvrez mes expériences
                </CardDescription>
        
            </CardContent>
          </Link>
        </Card>

        <Card className="max-w-prose min-w-60 lg:w-64 lg:h-30 m-2 rounded-lg  hover:outline">
          <Link to="/experiences">
            <CardContent className="flex flex-col justify-center items-center p-8">
              

                <CardTitle>Projets</CardTitle>
                <CardDescription>
                  Découvrez mes projets
                </CardDescription>
        
            </CardContent>
          </Link>
        </Card>

        <Card className="max-w-prose min-w-60 lg:w-64 lg:h-30 m-2 rounded-lg  hover:outline">
          <Link to="/experiences">
            <CardContent className="flex flex-col justify-center items-center p-8">
              

                <CardTitle>Compétences</CardTitle>
                <CardDescription>
                  Ma stack technique
                </CardDescription>
        
            </CardContent>
          </Link>
        </Card>


     
    
      </div>
      </div>
      
    </div>
  );
}
