import { useEffect } from "react";
import { Badge } from "./ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"

interface Stack {
    name: string,
    image: string
}

interface Experience  {
    company_name: string;
    description: string;
    year_start: string;
    year_end: string;
    title: string;
    role: string;
    stack: Stack[]
    id: string;
    created_at: string;
}

  
export default function Experience({experience}: {experience: Experience}){
    
    return (
        <Card className="max-w-prose mb-4 rounded-lg ">
        <CardHeader>
            <Badge variant={"secondary"} className="w-fit">
                {experience.year_start.split("-")[0]}
                {
                    experience.year_end ? ` - ${experience.year_end.split("-")[0]}` : ` - Present`
                }
            </Badge>
            <CardTitle>{experience.title}</CardTitle>
            <CardDescription> {experience.company_name}</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {experience.description}
            </p>
            
        </CardContent>
        <CardFooter>
           {
                experience.stack.map((stack, index) => (
                     <Badge key={index}  className="w-fit mx-1">{stack.name}</Badge>
                ))
           }
           
        </CardFooter>
        </Card>
    )

}