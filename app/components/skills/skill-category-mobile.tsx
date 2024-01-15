import { Skill } from "./skill"
import { stack_type, stackTypeDescriptions } from "~/utils/stack_type"
import { Card, CardContent } from "~/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel"


const SkillCategoryMobile = ({ array, title }: any) => {
    return (
        <div className="flex flex-col lg:m-1 rounded-none ">
            <div className="flex flex-col justify-start my-3 lg:pl-0 pl-3 ">
                {title}
                <p className="text-sm text-muted-foreground m-0">
                    {stackTypeDescriptions[title]}
                </p>
            </div>


       
         
                <div className="w-screen flex flex-row flex-wrap space-x-2  lg:pl-0 pl-3">
             
                    {
                        array.map((skill, index)=>{
                            return <Skill key={index} skill={skill}/>
                            
                        })
                    }
                </div>
          

        </div >
    )
}

export default SkillCategoryMobile