import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge";
import { Key } from "react";
import {motion} from "framer-motion"



export default function Formation({formation}:any) {
    const containerVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    }


    const badgeVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    }
    return(
        <motion.div variants={containerVariants}>
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
                    <motion.div key={index} variants={badgeVariants}>
                        <Badge key={index}  className="w-fit m-1">{stack.name}</Badge>
                    </motion.div>
                     
                ))
           }
        </CardFooter>
        </Card>
        </motion.div>
    )
}