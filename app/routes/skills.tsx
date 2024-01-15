import { Fragment, useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { useLoaderData } from "@remix-run/react";
import { Skill } from "~/components/skills/skill";
import { stack_type } from "~/utils/stack_type"
import SkillCategory from "~/components/skills/skill-category";
import SkillCategoryMobile from "~/components/skills/skill-category-mobile";




export async function loader() {
    const supabaseURL = "https://oplyzkzywrzqngstylak.supabase.co";
    const supabaseKEY = process.env.SUPABASE_KEY

    if (supabaseKEY === undefined || supabaseKEY === null) {
        throw new Error("There was an error, missing API KEY")
    }
    const supabase = createClient(supabaseURL, supabaseKEY)

    const { data: skills, error } = await supabase.from("stack").select("*")
    console.log(skills)

    const current_stack = skills?.filter((skill) => skill.isMainStack === true)
    const tools = skills?.filter((skill) => skill.type === stack_type.TOOLS)
    const frontend = skills?.filter((skill) => skill.type === stack_type.FRONTEND)
    const backend = skills?.filter((skill) => skill.type === stack_type.BACKEND)
    const database = skills?.filter((skill) => skill.type === stack_type.DATABASE)
    const language = skills?.filter((skill) => skill.type === stack_type.LANGUAGE)


    return {
        skills,
        current_stack,
        tools,
        frontend,
        backend,
        database,
        language
    }
}


const Skills = () => {
    const [isMobile, setIsMobile] = useState(false)
    const data = useLoaderData<typeof loader>();



    useEffect(() => {
        if (window.matchMedia('(max-width: 768px)').matches) {
          setIsMobile(true)
        }
    }, [])
    
    
    if(isMobile){
        return (
            <div className="flex justify-center items-center  ">
            <div className="flex flex-col justify-center ">
                <SkillCategoryMobile array={data.language} title={stack_type.LANGUAGE} />
                <SkillCategoryMobile array={data.frontend} title={stack_type.FRONTEND} />
                <SkillCategoryMobile array={data.backend} title={stack_type.BACKEND} />
                <SkillCategoryMobile array={data.database} title={stack_type.DATABASE} />
                <SkillCategoryMobile array={data.tools} title={stack_type.TOOLS} />
            </div>
        </div>
        )
    }

    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="flex flex-col justify-center">
                <SkillCategory array={data.language} title={stack_type.LANGUAGE} />
                <SkillCategory array={data.frontend} title={stack_type.FRONTEND} />
                <SkillCategory array={data.backend} title={stack_type.BACKEND} />
                <SkillCategory array={data.database} title={stack_type.DATABASE} />
                <SkillCategory array={data.tools} title={stack_type.TOOLS} />
            </div>
        </div>

    )


}


export default Skills