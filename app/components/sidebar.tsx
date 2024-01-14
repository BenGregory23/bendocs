import { Button } from "~/components/ui/button";
import { Title } from "./title";
import { Link } from "@remix-run/react";
import { useLocation } from "@remix-run/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useAuth } from "~/utils/AuthContext";
import { useEffect } from "react";
import Cookies from "js-cookie"
import Contact from "./contact";




const isLinkActive = (currentPath: string, path: string) => {
  return currentPath === path;
}

export function Sidebar() {

  const  {user, login, logout}  = useAuth()
  const location = useLocation();

  useEffect(() => {
    // Check if there is a stored access token cookie
    const storedToken = Cookies.get('access_token');
    console.log(user)
    if (storedToken) {
        login(storedToken);  
        console.log(user)
    }
}, []);
 

  return (
    <div
      className="flex flex-col justify-between lg:min-h-screen lg:w-1/6 lg:max-w-[350px] lg:max-h-screen lg:flex-shrink-0 lg:sticky lg:top-0 p-3
        dark:bg-primary-900 dark:text-white border-r border-secondary dark:border-secondary rounded-none ">
      <div>
       
          <Title />
        
        <div className="w-full mb-6">
          <ul className="mt-8 space-y-2">
            <li>
              <Link to="/about">
                <Button
                  className="w-full font-semibold text-left flex justify-start space-x-3"
                  variant={isLinkActive(location.pathname, "/about") ? "secondary" : "ghost"}
                >
                  <svg className="bg-transparent rounded-none" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                   <span className="bg-transparent">
                    A propos de moi
                  </span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/experiences">
                <Button
                  className="w-full font-semibold text-left flex justify-start space-x-3"
                  variant={isLinkActive(location.pathname, "/experiences") ? "secondary" : "ghost"}
                >
                  <svg className="bg-transparent rounded-none" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11.0001V4.00006L1 4.00006L1 11.0001H14ZM15 4.00006V11.0001C15 11.5523 14.5523 12.0001 14 12.0001H1C0.447715 12.0001 0 11.5523 0 11.0001V4.00006C0 3.44778 0.447715 3.00006 1 3.00006H14C14.5523 3.00006 15 3.44778 15 4.00006ZM2 5.25C2 5.11193 2.11193 5 2.25 5H5.75C5.88807 5 6 5.11193 6 5.25V9.75C6 9.88807 5.88807 10 5.75 10H2.25C2.11193 10 2 9.88807 2 9.75V5.25ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H7.5ZM7 9.5C7 9.22386 7.22386 9 7.5 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H7.5C7.22386 10 7 9.77614 7 9.5ZM7.5 5C7.22386 5 7 5.22386 7 5.5C7 5.77614 7.22386 6 7.5 6H11.5C11.7761 6 12 5.77614 12 5.5C12 5.22386 11.7761 5 11.5 5H7.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  <span className="bg-transparent">
                    Expériences
                  </span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <Button
                  className="w-full font-semibold text-left flex justify-start space-x-3"
                  variant={isLinkActive(location.pathname, "/skills") ? "secondary" : "ghost"}
                >
                  <svg className="bg-transparent rounded-none" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.69667 0.0403541C8.90859 0.131038 9.03106 0.354857 8.99316 0.582235L8.0902 6.00001H12.5C12.6893 6.00001 12.8625 6.10701 12.9472 6.27641C13.0319 6.4458 13.0136 6.6485 12.8999 6.80001L6.89997 14.8C6.76167 14.9844 6.51521 15.0503 6.30328 14.9597C6.09135 14.869 5.96888 14.6452 6.00678 14.4178L6.90974 9H2.49999C2.31061 9 2.13748 8.893 2.05278 8.72361C1.96809 8.55422 1.98636 8.35151 2.09999 8.2L8.09997 0.200038C8.23828 0.0156255 8.48474 -0.0503301 8.69667 0.0403541ZM3.49999 8.00001H7.49997C7.64695 8.00001 7.78648 8.06467 7.88148 8.17682C7.97648 8.28896 8.01733 8.43723 7.99317 8.5822L7.33027 12.5596L11.5 7.00001H7.49997C7.353 7.00001 7.21347 6.93534 7.11846 6.8232C7.02346 6.71105 6.98261 6.56279 7.00678 6.41781L7.66968 2.44042L3.49999 8.00001Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                   <span className="bg-transparent">
                    Compétences
                  </span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <Button
                  className="w-full font-semibold text-left flex justify-start space-x-3"
                  variant={isLinkActive(location.pathname, "/projects") ? "secondary" : "ghost"}
                >
                  <svg className="bg-transparent rounded-none" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  <span className="bg-transparent">
                    Projets
                  </span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/formations">
                <Button
                  className="w-full font-semibold text-left flex justify-start space-x-3"
                  variant={isLinkActive(location.pathname, "/formations") ? "secondary" : "ghost"}
                >
                  <svg className="bg-transparent rounded-none" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                   <span className="bg-transparent">
                    Formations
                  </span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/cv">
                <Button
                  className="w-full font-semibold text-left flex justify-start space-x-3"
                  variant={isLinkActive(location.pathname, "/cv") ? "secondary" : "ghost"}
                >
                  <svg className="bg-transparent rounded-none" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                 
                  <span className="bg-transparent">
                    CV
                  </span>
                
                  
              
                </Button>
              </Link>
            </li>
          </ul>
       
        </div>
      
      </div>

      <div className="mt-8 flex flex-col space-y-2">
        {
          user.authenticated ? <Button className="w-full" onClick={() =>logout()}>Déconnexion</Button> : <></>
        }
        <Contact/>
      </div>
    </div>
  );
}
