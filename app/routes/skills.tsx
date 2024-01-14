import { Fragment, useState } from "react"

import { createClient } from "@supabase/supabase-js"
import { useLoaderData } from "@remix-run/react";
import Droppable from "~/components/dnd/Droppable";
import Draggable from "~/components/dnd/Draggable";
import { Skill } from "~/components/skills/skill";
import { stack_type } from "~/utils/stack_type"


interface Skill {
    name: string,
    image_path: string,
    isMainStack: boolean,
    type: stack_type
}

export async function loader() {
    const supabaseURL = "https://oplyzkzywrzqngstylak.supabase.co";
    const supabaseKEY = process.env.SUPABASE_KEY

    if (supabaseKEY === undefined || supabaseKEY === null) {
        throw new Error("There was an error, missing API KEY")
    }

    const supabase = createClient(supabaseURL, supabaseKEY)

    const { data: skills, error } = await supabase.from("stack").select("*")



    return {
        skills
    }
}


const Skills = () => {

    const data = useLoaderData<typeof loader>();


    return (
        <Fragment>
           

        </Fragment>
    )


}


export default Skills