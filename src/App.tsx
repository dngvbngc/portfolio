import projects from "./data/projects";
import ProjectGrid from "./components/ProjectGrid";
import SocialBar from "./components/SocialBar";
import Introduction from "./components/Introduction";
import HeadingTile from "./components/HeadingTile";
import Spinner from "./components/Spinner";

function App() {
  return (
    <>
      <SocialBar />
      <Introduction />
      <HeadingTile text='Personal Projects' />
      <ProjectGrid projects={projects} />
      <Spinner id='1' position='top' />
      <Spinner id='2' position='top' />
      <Spinner id='3' position='top' />
      <Spinner id='4' position='top' />
      <Spinner id='5' position='bottom' />
      <Spinner id='6' position='bottom' />
      <Spinner id='7' position='bottom' />
      <Spinner id='8' position='bottom' />
    </>
  );
}

export default App;
