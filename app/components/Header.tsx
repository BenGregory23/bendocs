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
import { Link, useLocation } from "@remix-run/react"
import Contact from "./contact"


const isLinkActive = (currentPath: string, path: string) => {
    return currentPath === path;
  }

export default function Header(){
    const location = useLocation();

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
                        <Link to="/about"><Button className="w-full font-semibold text-left flex justify-start"  variant={isLinkActive(location.pathname, "/about") ? "secondary" : "ghost"} > A Propos de moi</Button></Link>
                    </li>
                    <li>
                        <Link to="/skills" ><Button className="w-full font-semibold text-left flex justify-start"  variant={isLinkActive(location.pathname, "/skills") ? "secondary" : "ghost"} > Compétences</Button></Link>
                    </li>
                    <li>
                        <Link to="/experiences" ><Button className="w-full font-semibold text-left flex justify-start"  variant={isLinkActive(location.pathname, "/experiences") ? "secondary" : "ghost"} > Expériences</Button></Link>
                    </li>
                    <li>
                        <Link to="/projects" ><Button className="w-full font-semibold text-left flex justify-start"  variant={isLinkActive(location.pathname, "/projects") ? "secondary" : "ghost"} > Projets</Button></Link>
                    </li>
                    <li>
                        <Link to="/formations" ><Button className="w-full font-semibold text-left flex justify-start"  variant={isLinkActive(location.pathname, "/formations") ? "secondary" : "ghost"} > Formations</Button></Link>
                    </li>
                    <li>
                        <Link to="/cv" ><Button className="w-full font-semibold text-left flex justify-start"  variant={isLinkActive(location.pathname, "/cv") ? "secondary" : "ghost"} > CV</Button></Link>
                    </li>
                  
                  

                </ul>
            </div>
            </div>
          
           
            <div className="mt-8 flex flex-col space-y-2">
               
                <Contact/>
            </div>
            
        </div>
        </SheetContent>
        </Sheet>
        </div>
        
    )
}