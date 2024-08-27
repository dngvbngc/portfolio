import projects from "./data/projects";
import ProjectGrid from "./components/ProjectGrid";
import SocialBar from "./components/SocialBar";
import Introduction from "./components/Introduction";

function App() {
  return (
    <>
      <SocialBar />
      <Introduction />
      <ProjectGrid projects={projects} />
    </>
  );
}

export default App;
