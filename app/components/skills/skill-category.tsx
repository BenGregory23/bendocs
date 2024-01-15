import { Skill } from "./skill"
import { stack_type, stackTypeDescriptions } from "~/utils/stack_type"
const SkillCategory = ({ array, title }: any) => {
    return (
        <div className="flex flex-col m-1">
            <div className="flex flex-col justify-start my-3 ">
                {title}
                <p className="text-sm text-muted-foreground m-0 ">

                    {stackTypeDescriptions[title]}
                </p>
            </div>


            <div className="flex lg:flex-row space-x-3">
                {
                    array.map((skill, index) => {
                        return <Skill key={index} skill={skill} />
                    })
                }

            </div>

        </div>
    )
}

export default SkillCategory