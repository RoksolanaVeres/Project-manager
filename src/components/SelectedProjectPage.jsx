// hooks/ functions
import { useContext, useState } from "react";
import { formatDate } from "@/globalFunctions";

// contexts
import { ProjectsContext } from "@/store/ProjectsContext";

// components
import { Button } from "./ui/button";
import EditForm from "./EditForm";
import DialogDeleteButton from "./DialogDeleteButton";
import ProjectTasks from "./ProjectTasks";

export default function SelectedProjectPage() {
  const { selectedProjectID, projects } = useContext(ProjectsContext);
  const [isEditing, setIsEditing] = useState(false);

  const selectedProject = projects.find(
    (project) => project.prjctId === selectedProjectID,
  );

  const { prjctDate, prjctDescription, prjctId, prjctTitle } = selectedProject;

  // functions
  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <>
      {isEditing && (
        <EditForm
          editingProject={selectedProject}
          setIsEditing={setIsEditing}
        />
      )}
      {!isEditing && (
        <div className="mx-auto w-[70%]">
          <div
            id="title-btns__container"
            className="flex items-center justify-between"
          >
            <h2 className="text-xl font-bold md:text-2xl">{prjctTitle}</h2>
            <div id="btns__container" className="flex gap-1">
              <Button
                onClick={handleEditClick}
                variant="outline"
                className="h-[30px] px-3 md:h-[40px]"
              >
                Edit
              </Button>
              <DialogDeleteButton prjctId={prjctId} />
            </div>
          </div>
          <p className="text-secondary-foreground/50">
            {formatDate(prjctDate)}
          </p>
          <div className="mt-6 whitespace-pre-wrap">{prjctDescription}</div>
          <div
            id="divider"
            className="my-10 h-1 w-full rounded-lg bg-secondary-foreground/10"
          ></div>
          <ProjectTasks selectedProject={selectedProject} />
        </div>
      )}
    </>
  );
}
