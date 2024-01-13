import { Suspense, useState } from "react"
import Loading from "../components/loading/loading"
import CVHolder from "~/components/cv/cv-holder"
import { Button } from "~/components/ui/button"




const Cv= () => {
    const paths = [
        "https://oplyzkzywrzqngstylak.supabase.co/storage/v1/object/public/bendocs_images/cv/CV.pdf",
        "https://oplyzkzywrzqngstylak.supabase.co/storage/v1/object/public/bendocs_images/cv/CV%20English.pdf"
    ]
    const [current, setCurrent] = useState(0)
    return (
       <div className="lg:h-screen min-h-screen w-full  flex items-center justify-center">
            <Suspense fallback={<Loading/>}>
                    
                 
                 
                    <CVHolder path={paths[current]}/>
            </Suspense>
       </div>
    )
}


export default Cv