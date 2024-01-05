
import { Outlet, useLoaderData} from '@remix-run/react';




export function loader() {
    
    return { message: 'Hello World' };
}

export default function Projects() {

    const data = useLoaderData();
    return(
        <div>
            <h1>Projects</h1>
            <p>{data.message}</p>


            <Outlet />
        </div>
    )
}