import clsx from "clsx"
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes"
import { themeSessionResolver } from "./sessions.server"
import { cssBundleHref } from "@remix-run/css-bundle";
import styles from "./globals.css";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { ModeToggle } from "./components/mode-toggle";
import { Sidebar } from "./components/sidebar";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { useRouteError } from "@remix-run/react";
import { Button } from "./components/ui/button";
import { Link } from "@remix-run/react";
import { AuthProvider, useAuth } from './utils/AuthContext';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request)
  return {
    theme: getTheme(),
  }
}
// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>()
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  )
}




export function App() {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()
  const [isSmallScreen, setIsSmallScreen] = useState(false)
 
  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setIsSmallScreen(true)
    }
  }, [])



 

  if (isSmallScreen) {
    return (
      <html lang="en" className={clsx(theme)}>
        <head>
          <title>Ben GREGORY</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
          <Links />
        </head>
        <body className="flex flex-col justify-center min-h-screen bg-primary-50 dark:bg-primary-900">
          <AuthProvider>
          <Header />
          <div className="w-full flex justify-end p-2 z-50">
            <ModeToggle />
          </div>
          <div className="w-full flex-grow">
            <Outlet />

          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          </AuthProvider>
        </body>
      </html>
    )
  }


  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <title>Ben GREGORY</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body className="flex flex-row justify-center min-h-screen bg-primary-50 dark:bg-primary-900">
      <AuthProvider>
        <Sidebar />

        <div className="fixed top-5 right-5 flex justify-end p-2 z-50">
          <ModeToggle />
        </div>
        <div className="w-5/6 flex-grow">
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        </AuthProvider>

      </body>
    </html>
  );
}


export function ErrorBoundary() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const error = useRouteError();

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setIsSmallScreen(true);
    }
  }, []);

  return (
    <html lang="en" className={clsx("dark", { "dark": isSmallScreen })}>
      <head>
        <title>Oh non !</title>
        <Meta />
        <Links />
      </head>

      <body className={clsx("flex", "min-h-screen", "bg-primary-50", { "dark:bg-primary-900": isSmallScreen })}>
        <AuthProvider> {/* Include AuthProvider here */}
          {!isSmallScreen && <Sidebar />}
          <div className={clsx("flex-grow", isSmallScreen ? "w-full" : "w-5/6")}>
          
            <div className="flex flex-col justify-center items-center w-full h-full p-3 ">
              <h1 className="text-5xl font-bold">Oh non !</h1>
              <p>Une erreur est survenue</p>
              <Link to="/" className="mt-5">
                <Button variant="outline">Retour à l'accueil</Button>
              </Link>
            </div>
          </div>
          <Scripts />
          <LiveReload />
        </AuthProvider>
      </body>
    </html>
  );
}

/*
export function ErrorBoundary() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const error = useRouteError();

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setIsSmallScreen(true)
    }
  }, [])

  if (isSmallScreen) {
    return (
      <html lang="en" className="dark">
        <head>
          <title>Oh non !</title>
          <Meta />
          <Links />
        </head>

        <body className="flex flex-col justify-center min-h-screen bg-primary-50 dark:bg-primary-900">
          <Header />
         
          <div className="w-full flex-grow">
            <div className="flex flex-col justify-center items-center w-full h-full p-3 ">
              <h1 className="text-5xl font-bold">Oh non !</h1>
              <p>Une erreur est survenue</p>
              <Link to="/" className="mt-5">
                <Button variant="outline">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
          <Scripts />
          <LiveReload />
        </body>

      </html>
    )
  }
  else {
    return (
      <html lang="fr" className="dark">
        <head>
          <title>Oh non !</title>
          <Meta />
          <Links />
        </head>
  
        <body className="flex flex-row justify-center min-h-screen bg-primary-50 dark:bg-primary-900">
  
          <Sidebar />

          <div className="w-5/6 flex-grow">
            <div className="flex flex-col justify-center items-center w-full h-full p-3 ">
              <h1 className="text-5xl font-bold">Oh non !</h1>
              <p>Une erreur est survenue</p>
             
                <Link to="/" className="mt-5">
                   <Button variant="outline">
                      Retour à l'accueil
                    </Button>
                </Link>
           
  
            </div>
          </div>
          <Scripts />
  
  
  
        </body>
  
      </html>
    );
  }
 

  
}
*/
