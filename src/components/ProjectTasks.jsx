// hooks / functions
import { useState, useContext } from "react";

// contexts
import { ProjectsContext } from "@/store/ProjectsContext";

// components
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

export default function ProjectTasks({ selectedProject }) {
  const { addNewTaskToSelectedProject, projects } = useContext(ProjectsContext);
  const { prjctTasks } = selectedProject;

  const allTasksNum = prjctTasks.length;
  const completedTasksNum = prjctTasks.filter((task) => task.taskCompleted).length
  const progressValue = (completedTasksNum * 100) / allTasksNum;
  
  // console.log("all projects", projects);
  // console.log("selected project", selectedProject);
  // console.log("selected project tasks", prjctTasks);

  const [newTask, setNewTask] = useState({
    taskText: "",
    taskId: crypto.randomUUID(),
    taskCompleted: false,
  });

  function handleInputChange(e) {
    setNewTask((currentTask) => {
      return { ...currentTask, taskText: e.target.value };
    });
  }

  function handleTaskFormSubmit(e) {
    e.preventDefault();
    if (newTask.taskText === "") {
      return;
    }

    setNewTask((currentTask) => {
      return { ...currentTask, taskId: crypto.randomUUID(), taskText: "" };
    });

    addNewTaskToSelectedProject(selectedProject.prjctId, newTask);
  }

  return (
    <div className="grid gap-10">
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
            <Task
              key={task.taskId}
              selectedProject={selectedProject}
              task={task}
            />
          );
        })}
      </ul>
      <Progress className="h-2" value={progressValue} />
    </div>
  );
}

function Task({ task, selectedProject }) {
  const { toggleTaskCompleteness } = useContext(ProjectsContext);

  function handleCheckChange() {
  toggleTaskCompleteness(selectedProject.prjctId, task.taskId);
  }

  return (
    <li className="mb-2 flex gap-4">
      <Checkbox
        checked={task.taskCompleted}
        id={task.taskId}
        onClick={handleCheckChange}
      />
      <label
        htmlFor={task.taskId}
        className={`text-base font-medium leading-none ${task.taskCompleted ? "decoration-2 line-through decoration-primary" : undefined}`}
      >
        {task.taskText}
      </label>
    </li>
  );
}
