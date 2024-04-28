import ProjectForm from "./components/ProjectForm";
import NoProjectPage from "./components/NoProjectPage";
import Sidebar from "./components/Sidebar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useState, useContext } from "react";
import SelectedProjectPage from "./components/SelectedProjectPage";
import { ProjectsContext } from "./store/ProjectsContext";

export default function App() {
  const { selectedProject, isAddingProject } = useContext(ProjectsContext);

  return (
    <main className="bg-background text-foreground flex min-h-dvh">
      <Sidebar />
      <div id="main-content" className="w-full p-8">
        <ThemeSwitcher />
        <div id="prjct-info" className="py-8 mx-auto w-[70%] h-full">
          {isAddingProject && <ProjectForm />}
          {!isAddingProject && !selectedProject && <NoProjectPage />}
          {!isAddingProject && selectedProject && <SelectedProjectPage />}
        </div>
      </div>
    </main>
  );
}
