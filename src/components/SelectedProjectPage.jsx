// contexts
import { useContext } from "react";
import { ProjectsContext } from "@/store/ProjectsContext";

// components
import { Button } from "./ui/button";

export default function SelectedProjectPage() {
  const { selectedProjectID, projects } = useContext(ProjectsContext);
  const selectedProject = projects.find(
    (project) => project.prjctId === selectedProjectID,
  );

  return (
    <div className="mx-auto w-[90%]">
      <div id="title-btns__container" className="flex justify-between">
        <h2 className="">{selectedProject.prjctTitle}</h2>
        <div id="btns__container" className="flex gap-2">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </div>
  );
}
