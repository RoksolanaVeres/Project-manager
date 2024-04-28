// hooks

// contexts
import { useContext } from "react";
import { ProjectsContext } from "@/store/ProjectsContext";

// components
import { Button } from "./ui/button";

//global functions
function formatDate(date) {
  const _date = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(_date);
}

export default function SelectedProjectPage() {
  const { selectedProjectID, projects, deleteProject } =
    useContext(ProjectsContext);
  const selectedProject = projects.find(
    (project) => project.prjctId === selectedProjectID,
  );

  const { prjctDate, prjctDescription, prjctId, prjctTasks, prjctTitle } =
    selectedProject;

  return (
    <div className="mx-auto w-[90%]">
      <div
        id="title-btns__container"
        className="flex items-center justify-between"
      >
        <h2 className="text-xl font-bold md:text-2xl">{prjctTitle}</h2>
        <div id="btns__container" className="flex gap-1">
          <Button variant="outline" className="h-[30px] px-3 md:h-[40px]">
            Edit
          </Button>
          <Button
            onClick={() => deleteProject(prjctId)}
            variant="destructive"
            className="h-[30px] px-3 md:h-[40px]"
          >
            Delete
          </Button>
        </div>
      </div>
      <p className="">{formatDate(prjctDate)}</p>
      <div className="">{prjctDescription}</div>
    </div>
  );
}
