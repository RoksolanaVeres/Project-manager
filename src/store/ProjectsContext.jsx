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

  function deleteProject(projectId) {
    setProjects((currentProjects) => {
      const projectsCopy = structuredClone(currentProjects);
      const updatedProjects = projectsCopy.filter(
        (project) => project.prjctId !== projectId,
      );
      return updatedProjects;
    });
    setSelectedProjectID(null);
  }

  function editProject(
    editingProject,
    editedTitle,
    editedDescription,
    editedDate,
  ) {
    let updatedProject = {
      ...editingProject,
      prjctTitle: editedTitle,
      prjctDescription: editedDescription,
      prjctDate: editedDate,
    };

    setProjects((currentProjects) => {
      const updatedProjects = currentProjects.map((project) => {
        if (project.prjctId === editingProject.prjctId) {
          return updatedProject;
        }
        return project;
      });
      return updatedProjects;
    });
  }

  function addNewTaskToSelectedProject(selectedProjectId, newTask) {
    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.prjctId === selectedProjectId) {
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

  function toggleTaskCompleteness(selectedProjectId, selectedTaskId) {
    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.prjctId === selectedProjectId) {
          return {
            ...project,
            prjctTasks: project.prjctTasks.map((task) => {
              if (task.taskId === selectedTaskId) {
                return {
                  ...task,
                  taskCompleted: !task.taskCompleted,
                };
              } else {
                return task;
              }
            }),
          };
        } else {
          return project;
        }
      });
    });
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
    deleteProject,
    editProject,
    selectedProjectID,
    isAddingProject,
    openForm,
    closeForm,
    selectProject,
    addNewTaskToSelectedProject,
    toggleTaskCompleteness,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
}
