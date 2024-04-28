// contexts
import { useContext } from "react";
import { ProjectsContext } from "@/store/ProjectsContext";

// components
import { Button } from "./ui/button";

export default function NoProjectPage() {
  const { openForm } = useContext(ProjectsContext);

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <img
        className="max-w-[300px]"
        src="notes.svg"
        alt="no selected project illustration"
      />
      <h2 className="text-xl font-bold">No project selected</h2>
      <p>Select a project or add a new one</p>
      <Button onClick={openForm} size="lg" className="mt-10 text-base">
        New Project
      </Button>
    </div>
  );
}
