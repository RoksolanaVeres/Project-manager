import { createContext, useState, useEffect } from "react";

const PROJECTS_STORAGE_KEY = "projects";

export const ProjectsContext = createContext(null);

export default function ProjectsContextProvider({ children }) {
  const savedProjects = JSON.parse(localStorage.getItem(PROJECTS_STORAGE_KEY));
  const [projects, setProjects] = useState(savedProjects || []);

  // functions
  function addNewProject(title, description, dueDate) {
    let newPrjct = {
      prjctId: crypto.randomUUID(),
      prjctTitle: title,
      prjctDescription: description,
      prjctDate: dueDate,
      prjctTasks: [],
    };
    setProjects((currentPrjcts) => [...currentPrjcts, newPrjct]);
  }

  //   local storage
  function saveProjectsInLocalStorage() {
    localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
  }

  useEffect(saveProjectsInLocalStorage, [projects]);

  const value = { projects, addNewProject, setProjects };

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}
