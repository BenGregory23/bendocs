
import { ScrollArea } from '~/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"


export default function About() {
    return (
        <ScrollArea className="h-screen w-full  rounded-none p-6 flex justify-center items-center">
            <div className="flex flex-row justify-center w-full h-screen items-center rounded-none ">
                <section className="flex flex-col lg:max-w-prose">

                    <div className="flex flex-row items-center justify-center space-x-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 rounded-none">
                            Ben Gregory
                        </h2>
                    </div>

               
                   
                  
             

               


                    <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-justify ">


                    Je suis un développeur web passionné. Fort d'une année d'expérience dans le domaine du développement, j'ai eu l'opportunité de travailler sur des projets variés, allant de la création de sites web interactifs à la conception d'applications robustes. 
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-justify ">
                    Je suis spécialisé en React pour le frontend et Javascript/Java pour le backend, et je suis constamment en quête d'apprentissage pour rester à la pointe de la technologie.
                    Je travaille actuellement chez <a className="text-blue-500 underline" target='_blank' href='https://sii-group.com/fr-FR'>Sii</a> en tant que développeur fullstack à Niort.

                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-justify ">
                        En dehors du développement, j'ai une passion pour l'escalade, les jeux vidéo (surtout compétitifs), et je suis un fervent fan de Formule 1. Mon objectif à court terme est de maîtriser le langage <a  className="text-blue-500 underline" href="https://golang.org/" target="_blank"> Go (Golang)</a>, et de perfectionner mes compétences en utilisant <a className="text-blue-500 underline" href="https://spring.io/guides" target="_blank">Spring Boot</a>. À long terme, je vise à développer un SAAS complet. Je suis toujours ouvert aux nouvelles opportunités et aux collaborations passionnantes dans le monde du développement.
                    </p>

                </section>
            </div>
        </ScrollArea>
    )

}
