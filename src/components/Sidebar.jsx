// hooks / functions
import { useContext } from "react";

// contexts
import { ProjectsContext } from "@/store/ProjectsContext";

// components
import { Button } from "./ui/button";

export default function Sidebar() {
  const {
    projects,
    selectProject,
    unselectProject,
    openForm,
    selectedProjectID,
  } = useContext(ProjectsContext);

  function handleYourProjectsClick() {
    unselectProject()
  }

  return (
    <aside className="hidden w-[25%] rounded-tr-xl bg-secondary px-10 pt-8 text-foreground md:block">
      <h1 onClick={handleYourProjectsClick} className="cursor-pointer mb-6 text-3xl font-bold uppercase text-primary">
        Your Projects
      </h1>
      <Button onClick={openForm} className="text-lg">
        + Add project
      </Button>
      <ul className="grid gap-1 py-8">
        {projects.map((project) => {
          return (
            <li
              key={project.prjctId}
              onClick={() => selectProject(project.prjctId)}
            >
              <Button
                variant="outline"
                className={`flex w-full justify-start border-none text-lg font-normal text-foreground/70 ${selectedProjectID === project.prjctId && "bg-primary/20 "}`}
              >
                {project.prjctTitle}
              </Button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
