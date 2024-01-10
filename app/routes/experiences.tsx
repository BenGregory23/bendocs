import React from 'react'
import { ScrollArea } from '~/components/ui/scroll-area'
import { createClient } from '@supabase/supabase-js'
import { useLoaderData } from '@remix-run/react'
import Experience from '~/components/experience'
import { Meta, Links, Scripts } from '@remix-run/react'
import { useRouteError } from '@remix-run/react'


export async function loader() {
    const supabaseUrl = 'https://oplyzkzywrzqngstylak.supabase.co'
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wbHl6a3p5d3J6cW5nc3R5bGFrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDI4NjQ0NywiZXhwIjoyMDE5ODYyNDQ3fQ.lwO3UrPUhuqINVXZBveLZynfcAeoR4I90wl8lwlOP6s"
    
    const supabase = createClient(supabaseUrl, supabaseKey)

    // fetch data from Supabase
 
        let { data: experiences, error } = await supabase
        .from('experiences')
        .select('*')
        .order('year_start', { ascending: false })
      
        
        if (error) {
            throw error
        }

     
        return {
            experiences
        }
}

export default function Experiences() {
    const data = useLoaderData<typeof loader>()
    return (
        <ScrollArea className="h-screen w-full  rounded-none p-6 flex flex-row justify-center items-center ">
            <div className="flex flex-col justify-center items-center w-full h-full p-3">
               {
                     data.experiences.map((experience, index) => (
                          <Experience key={index} experience={experience} />
                     ))
               }
            </div>
        </ScrollArea>
    )

}


export function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);
    return (
      <html>
        <head>
          <title>Oh no!</title>
          <Meta />
          <Links />
        </head>
        <body>
          {/* add the UI you want your users to see */}
          <Scripts />
          The page failed to load. Please try again later.
        </body>
      </html>
    );
  }
  
