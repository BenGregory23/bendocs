import { Badge } from "~/components/ui/badge"
import { Link } from "@remix-run/react"

export function Title() {
    return (
        <div className="flex items-center justify-center h-16 text-2xl font-bold">
            <Link to="/">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Ben GREGORY {"  "}
                    <Badge variant={"secondary"} className="bg-accentGreen">Docs</Badge>

                </h3>
            </Link>

        </div>
    )
}