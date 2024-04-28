import { useContext } from "react";
import { Button } from "./ui/button";
import { ProjectsContext } from "@/store/ProjectsContext";

export default function ProjectsMenu() {
  const { projects, selectProject, openForm } = useContext(ProjectsContext);

  return (
    <aside className=" rounded-b-xl bg-secondary px-10 pt-16 text-foreground md:mt-8 md:block md:rounded-tr-xl">
      <h1 className="mb-6 text-3xl font-bold uppercase text-primary">
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
                className="flex w-full justify-start text-lg font-normal"
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
