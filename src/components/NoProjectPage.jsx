import { Button } from "./ui/button";
import { useContext } from "react";
import { ProjectsContext } from "@/store/ProjectsContext";

export default function NoProjectPage() {
  const { openForm } = useContext(ProjectsContext);

  return (
    <div className="flex flex-col gap-4 items-center h-full">
      <img className="max-w-[300px]" src="notes.svg" alt="no selected project illustration" />
      <h2 className="font-bold text-xl">No project selected</h2>
      <p>Select a project or add a new one</p>
      <Button onClick={openForm} size="lg" className="text-base mt-10">
        New Project
      </Button>
    </div>
  );
}
