import { Theme, useTheme } from "remix-themes";
import { Button } from "~/components/ui/button";
import { Title } from "./title";
import { Link } from "@remix-run/react";
import { Separator } from "~/components/ui/separator"
import { useLocation } from "@remix-run/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useAuth } from "~/utils/AuthContext";




const isLinkActive = (currentPath: string, path: string) => {
  return currentPath === path;
}

export function Sidebar() {
  const {user, logout} = useAuth();
  
  const location = useLocation();
 

  return (
    <div
      className="flex flex-col justify-between lg:min-h-screen lg:w-1/6 lg:max-w-[350px] lg:flex-shrink-0 lg:sticky lg:top-0 p-3
        dark:bg-primary-900 dark:text-white border-r border-secondary dark:border-secondary rounded-none ">
      <div>
        <Link to={"/"}>
          <Title />
        </Link>
        <div className="w-full mb-6">
          <ul className="mt-8 space-y-2">
            <li>
              <Link to="/about">
                <Button
                  className="w-full font-semibold text-left flex justify-start"
                  variant={isLinkActive(location.pathname, "/about") ? "secondary" : "ghost"}
                >
                  {" "}
                  A Propos de moi
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <Button
                  className="w-full font-semibold text-left flex justify-start"
                  variant={isLinkActive(location.pathname, "/skills") ? "secondary" : "ghost"}
                >
                  {" "}
                  Compétences
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/experiences">
                <Button
                  className="w-full font-semibold text-left flex justify-start"
                  variant={isLinkActive(location.pathname, "/experiences") ? "secondary" : "ghost"}
                >
                  {" "}
                  Expériences
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <Button
                  className="w-full font-semibold text-left flex justify-start"
                  variant={isLinkActive(location.pathname, "/projects") ? "secondary" : "ghost"}
                >
                  {" "}
                  Projets
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/formations">
                <Button
                  className="w-full font-semibold text-left flex justify-start"
                  variant={isLinkActive(location.pathname, "/formations") ? "secondary" : "ghost"}
                >
                  {" "}
                  Formations
                </Button>
              </Link>
            </li>
          </ul>
       
        </div>
      
      </div>

      <div className="mt-8 flex flex-col space-y-2">
        {
          user.authenticated ? <Button className="w-full" onClick={() =>logout()}>Déconnexion</Button> : <Link to="/auth"><Button className="w-full">Connexion</Button></Link>
        }
        <Popover>
            <PopoverTrigger className="w-full"><Button className="w-full">Me Contacter</Button></PopoverTrigger>
            <PopoverContent>
                
                <div className="flex flex-row space-x-2">
                    
                    <a href="mailto:bengregorygbr@gmail.com" className="w-full">
                        <Button className="w-full">Email</Button>
                    </a>
                    <a href="www.linkedin.com/in/ben-gregory-a04471169" target="_blank" className="w-full">
                        <Button className="w-full">Linkedin</Button>
                    </a>
                    </div>
            </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
