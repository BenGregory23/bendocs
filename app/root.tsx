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

      </body>
    </html>
  );
}