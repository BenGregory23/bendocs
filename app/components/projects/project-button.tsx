import { Link } from "@remix-run/react"
import { Button } from "../ui/button"


export default function ProjectButton(props: { title: string, id: number, setProject: any, project: object }) {
    return (
        <Button onClick={()=>props.setProject(props.project)} variant={"outline"} className="flex flex-col justify-center items-start py-3 px-5 hover:outline-none">
            {props.title}
          
            
        
            {/* <p className="text-sm font-light text-muted-foreground">{props.project.subtitle}</p> */}
           
        </Button>
    )
}