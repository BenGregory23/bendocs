import { stack_type } from "~/utils/stack_type"

interface Skill {
    name:string,
    image_path: string,
    isMainStack: boolean,
    type: stack_type
}

export async function loader(){

    

}

export const Skill = (skill:any) =>{

    return (
        <div className="p-20 border bg-slate-900">
            TEST
            <h1 className="text-white">{skill.name}</h1>
        </div>
    )

}