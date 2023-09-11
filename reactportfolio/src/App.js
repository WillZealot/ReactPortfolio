import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Home from "./components/home";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
    </div>
  );
}

export default App;
