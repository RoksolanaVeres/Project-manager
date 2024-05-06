// hooks / functions
import { useState, useContext } from "react";

// contexts
import { ProjectsContext } from "@/store/ProjectsContext";

// components
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function ProjectTasks({ selectedProject }) {
  const { projects, setProjects } = useContext(ProjectsContext);
  const [newTask, setNewTask] = useState({});

  // console.log("selected project tasks", selectedProject.prjctTasks);
  // console.log("project", projects);

  function handleInputChange(e) {
    setNewTask({
      taskText: e.target.value,
      taskId: crypto.randomUUID(),
      taskCompleted: false,
    });
  }

  function handleTaskFormSubmit(e) {
    e.preventDefault();
    if (newTask.taskText === "") {
      return;
    }
    setNewTask((currentTask) => {
      return { ...currentTask, taskText: "" };
    });

    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.prjctId === selectedProject.prjctId) {
          return {
            ...project,
            prjctTasks: [...project.prjctTasks, newTask],
          };
        } else {
          return project;
        }
      });
    });
  }

  return (
    <div>
      <form
        onSubmit={handleTaskFormSubmit}
        className="mb-6 grid w-full items-center gap-1.5 lg:w-1/2"
      >
        <Label htmlFor="tasks" className="text-base font-bold uppercase">
          Tasks
        </Label>
        <Input
          onChange={handleInputChange}
          value={newTask.taskText}
          type="text"
          id="tasks"
          placeholder="Your task"
          className="text-base"
        />
      </form>
      <ul>
        {selectedProject.prjctTasks.map((task) => {
          return (
            <li key={task.taskId} className="mb-2 flex gap-4">
              <Checkbox id={task.taskId} />
              <label
                htmlFor={task.taskId}
                className="text-base font-medium leading-none"
              >
                {task.taskText}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
