import { useContext } from "react";
import { Button } from "./ui/button";
import { ProjectsContext } from "@/store/ProjectsContext";

export default function Sidebar() {
  const { projects, selectProject, openForm } = useContext(ProjectsContext);

  return (
    <aside className=" bg-secondary text-foreground w-[25%] mt-8 rounded-tr-xl px-10 pt-16">
      <h1 className="uppercase text-primary font-bold text-3xl mb-6">Your Projects</h1>
      <Button onClick={openForm} className="text-base">
        + Add project
      </Button>
      <ul className="grid gap-1 py-8">
        {projects.map((project) => {
          return (
            <li key={project.prjctId} onClick={() => selectProject(project.prjctId)}>
              <Button variant="outline" className="text-lg font-normal w-full flex justify-start">
                {project.prjctTitle}
              </Button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
