import { Button } from "../ui/button";

export default function ProjectButton(props: {
  title: string;
  id: number;
  setProject: any;
  project: {
    id: number;
    name: string;
    subtitle: string;
    description: string;
    isNew: boolean;
    created_at: string;
    updated_at: string;
  };
}) {
  return (
    <Button
      onClick={() => props.setProject(props.project)}
      variant={"outline"}
      className="flex flex-col justify-center   px-5 hover:outline-none  w-full h-full"
    >
      {props.title}

      <p className="text-xs font-light text-muted-foreground bg-transparent">
        {props.project.subtitle.substring(0, 30).trimEnd()}...
      </p>
    </Button>
  );
}
