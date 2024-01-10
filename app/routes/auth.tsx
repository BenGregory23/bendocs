
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


import { Button } from "~/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { useLoaderData } from '@remix-run/react'
import { useAuth } from '../utils/AuthContext'

export async function loader() {
    const supabaseUrl = "https://oplyzkzywrzqngstylak.supabase.co";
    const supabaseKey = process.env.SUPABASE_KEY || "";

    return {
        supabaseUrl,
        supabaseKey,
    }
}

const formSchema = z.object({
    email: z.string().min(2, {
        message: "L'email doit contenir au moins 2 caractères",
    }),
    password: z.string().min(8, {
        message: "Le mot de passe doit contenir au moins 8 caractères",
    }),
})

async function signInWithEmail(email: string, password: string, supabase: any) {

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })

    return { data, error }
}


export default function Authentification() {
    const data = useLoaderData<typeof loader>()
    const [supabase, setSupabase] = useState(null)
    const { user, login, logout } = useAuth();

    useEffect(() => {
        const supabase = createClient(data.supabaseUrl, data.supabaseKey)
        if (supabase === null) {
            throw new Error("Supabase is null")
        }
        setSupabase(supabase)
    }, [])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        signInWithEmail(values.email, values.password, supabase).then((res) => {
           
           
            // and make that the user is logged in
             // Save the access token as a cookie with an expiration time (e.g., 1 hour)
             login(res.data.access_token)
            if (res.error) {
                console.error(res.error)
            }
           
        })
    }

    if(user.authenticated){
        return (
            <div className='flex flex-col justify-center items-center w-full h-full rounded-none space-y-3'>
                <div className="text-2xl">Vous êtes connecté</div>
                <Button onClick={() => logout()}>Se déconnecter</Button>
            </div>
        )
    }

    return (
        <div className='flex flex-col justify-center items-center w-full h-full rounded-none'>
            {
                user.authenticated ? <div className="text-2xl">Vous êtes connecté</div> : <div className="text-2xl">Vous n'êtes pas connecté</div>
            }
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 flex flex-col items-center">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="exemple@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mot de passe</FormLabel>
                                <FormControl>
                                    <Input placeholder="Mot de passe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Valider</Button>
                </form>
            </Form>
        </div>

    )
}