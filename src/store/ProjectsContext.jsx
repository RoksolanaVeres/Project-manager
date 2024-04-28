import { createContext, useState, useEffect } from "react";

const PROJECTS_STORAGE_KEY = "projects";

export const ProjectsContext = createContext(null);

export default function ProjectsContextProvider({ children }) {
  const savedProjects = JSON.parse(localStorage.getItem(PROJECTS_STORAGE_KEY));
  const [projects, setProjects] = useState(savedProjects || []);
  const [selectedProjectID, setSelectedProjectID] = useState(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  // projects state functions
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

  function saveProjectsInLocalStorage() {
    localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
  }

  useEffect(saveProjectsInLocalStorage, [projects]);

  // selectedProject & isAddingProject functions
  function openForm() {
    setIsAddingProject(true);
    setSelectedProjectID(null);
  }

  function closeForm() {
    setIsAddingProject(false);
    setSelectedProjectID(null);
  }

  function selectProject(projectID) {
    setSelectedProjectID(projectID);
    setIsAddingProject(false);
  }

  const value = {
    projects,
    setProjects,
    addNewProject,
    selectedProjectID,
    isAddingProject,
    openForm,
    closeForm,
    selectProject,
  };

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}
