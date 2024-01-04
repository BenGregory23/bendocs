import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "~/components/ui/sheet"
import { Title } from "./title"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

import { Button } from "~/components/ui/button"
import { Link } from "@remix-run/react"

export default function Header(){
    return(
        <div className="flex w-screen items-center justify-between h-16 text-2xl font-bold px-6">
             <Title />
             <Sheet>
            
        <SheetTrigger>
           <HamburgerMenuIcon className="w-6 h-6" />

        </SheetTrigger>
        <SheetContent className="rounded-none">
        <div className="flex flex-col justify-between lg:min-h-screen  
        dark:bg-primary-900 dark:text-white   rounded-none ">
            <div>
            <Title />
            <div className="w-full">
  
  
                <ul className="mt-8 space-y-2">
                    <li>
                        <Link to="/about"><Button className="w-full font-semibold text-left flex justify-start" variant={"secondary"} > A Propos de moi</Button></Link>
                    </li>
                    <li>
                        <Link to="/about" ><Button className="w-full font-semibold text-left flex justify-start" variant={"ghost"} > Compétences</Button></Link>
                    </li>
                    <li>
                        <Link to="/docs/experiences" ><Button className="w-full font-semibold text-left flex justify-start" variant={"ghost"} > Expériences</Button></Link>
                    </li>
                    <li>
                        <Link to="/docs/projets" ><Button className="w-full font-semibold text-left flex justify-start" variant={"ghost"} > Projets</Button></Link>
                    </li>
                    <li>
                        <Link to="/docs/formations" ><Button className="w-full font-semibold text-left flex justify-start" variant={"ghost"} > Formations</Button></Link>
                    </li>
                  

                </ul>
            </div>
            </div>
          
           
            <div className="mt-8 flex flex-col space-y-2">
               
                <Button>Me Contacter</Button>
            </div>
            
        </div>
        </SheetContent>
        </Sheet>
        </div>
        
    )
}