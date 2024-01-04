import { Badge } from "~/components/ui/badge"


export function Title() {
    return (
        <div className="flex items-center justify-center h-16 text-2xl font-bold">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Ben GREGORY {"  "}
            <Badge variant={"secondary"}>Docs</Badge>

        </h3>
        </div>
    )
}