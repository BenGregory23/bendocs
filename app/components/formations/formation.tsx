import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge";
import { Key } from "react";

export default function Formation({formation}:any) {
    return(
        <Card className="max-w-prose mb-4 rounded-lg ">
        <CardHeader>
            <Badge variant={"secondary"} className="w-fit">
                {formation.year_start.split("-")[0]}
                {
                    formation.year_end ? ` - ${formation.year_end.split("-")[0]}` : ` - Present`
                }
            </Badge>
            <CardTitle>{formation.title}</CardTitle>
            <CardDescription>{formation.school_name}</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {formation.description}
            </p>    
        </CardContent>
        <CardFooter className="flex flex-rox flex-wrap">
           {
                formation.stack.map((stack: any, index:Key) => (
                     <Badge key={index}  className="w-fit m-1">{stack.name}</Badge>
                ))
           }
        </CardFooter>
        </Card>
    )
}