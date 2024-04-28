// hooks
import { useContext } from "react";

// contexts
import { ProjectsContext } from "./store/ProjectsContext";

// components
import ProjectForm from "./components/ProjectForm";
import NoProjectPage from "./components/NoProjectPage";
import Sidebar from "./components/Sidebar";
import SelectedProjectPage from "./components/SelectedProjectPage";
import Header from "./components/Header";

export default function App() {
  const { selectedProjectID, isAddingProject } = useContext(ProjectsContext);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex min-h-dvh">
        <Sidebar />
        <div id="main-content" className="flex-1">
          <div id="prjct-info" className="py-8">
            {isAddingProject && <ProjectForm />}
            {!isAddingProject && !selectedProjectID && <NoProjectPage />}
            {!isAddingProject && selectedProjectID && <SelectedProjectPage />}
          </div>
        </div>
      </main>
    </div>
  );
}
