import { pdfjs } from 'react-pdf';
import {Page, Document } from "react-pdf"


const CVHolder = ({path}:{path:string}) =>{

    return (
        <div className='h-screen min-h-full w-full flex justify-center rounded-none'>
            <object className=' h-screen lg:w-2/3' data="https://oplyzkzywrzqngstylak.supabase.co/storage/v1/object/public/bendocs_images/cv/CV.pdf" type="application/pdf" >
              
            </object> 

           
        </div>
    )

}

export default CVHolder;