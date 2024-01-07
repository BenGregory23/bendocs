import { Link } from "@remix-run/react"
import { Button } from "../ui/button"


export default function ProjectButton(props: { title: string, id: number, setProject: any, project: object }) {
    return (
        <Button onClick={()=>props.setProject(props.project)} variant={"outline"} className="flex flex-col justify-center items-center p-3 hover:outline-none">
            {props.title}
            
        </Button>
    )
}