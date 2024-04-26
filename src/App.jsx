import ProjectForm from "./components/ProjectForm";
import NoProjectPage from "./components/NoProjectPage";
import Sidebar from "./components/Sidebar";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  return (
    <main className="bg-background text-foreground flex min-h-dvh">
      <Sidebar />
      <div id="main-content" className="w-full p-8">
        <ThemeSwitcher />
        <div id="prjct-info" className="py-10 mx-auto w-[70%]">
          <ProjectForm />
          {/* <NoProjectPage /> */}
        </div>
      </div>
    </main>
  );
}
