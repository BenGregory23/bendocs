import { Theme, useTheme } from "remix-themes"
import { Button } from "~/components/ui/button";
import { Title } from "./title";
import { Link } from "@remix-run/react";
import { User } from "lucide-react";


import { useEffect, useState } from "react";
  
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "~/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";




export function Sidebar() {

    return (
        <div className="flex flex-col justify-between lg:min-h-screen lg:w-1/6 lg:max-w-[350px] lg:flex-shrink-0 lg:sticky lg:top-0 p-3
        dark:bg-primary-900 dark:text-white border-r border-secondary dark:border-secondary rounded-none ">
            <div>
                <Link to={"/"}>
                    <Title />
                </Link>
            
            <div className="w-full">
                <ul className="mt-8 space-y-2">
                    <li>
                        <Link to="/about"><Button className="w-full font-semibold text-left flex justify-start" variant={"secondary"} > A Propos de moi</Button></Link>
                    </li>
                    <li>
                        <Link to="/about" ><Button className="w-full font-semibold text-left flex justify-start" variant={"ghost"} > Compétences</Button></Link>
                    </li>
                    <li>
                        <Link to="/experiences" ><Button className="w-full font-semibold text-left flex justify-start" variant={"ghost"} > Expériences</Button></Link>
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
    )
}