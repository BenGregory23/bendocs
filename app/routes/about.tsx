
import { ScrollArea } from '~/components/ui/scroll-area'

export default function About() {
    return (
        <ScrollArea className="h-screen w-full  rounded-none p-6 flex justify-center items-center">
            <div className="flex flex-row justify-center w-full  ">
                <section className="flex flex-col lg:max-w-3xl">

                   
                   
                  
                    <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-justify ">
                       Je suis un développeur junior passionné par le développement. Récemment diplômé d'une licence professionnelle en développement web, j'ai acquis une solide expérience grâce à mes études, mes stages et mes expériences en alternance. Je suis constamment motivé à apprendre de nouvelles technologies et à relever de nouveaux défis. Actuellement, je me concentre sur le perfectionnement de mes compétences en Vue.js et en Go. Je suis également bilingue en anglais et en français.
                    </p>

                    <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose text-justify ">
                        Explorez mes compétences et découvrez mes projets ici. Merci de votre visite et n'hésitez pas à me contacter pour toute question ou opportunité de collaboration !
                    </p>

                </section>
            </div>
        </ScrollArea>
    )

}
