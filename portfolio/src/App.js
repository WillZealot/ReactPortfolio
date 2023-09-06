import './assets/css/app.css'

import Header from './assets/components/header';
import Nav from './assets/components/nav';
import AboutMe from './assets/components/aboutme';
import Resume from './assets/components/resume';
import Projects from './assets/components/project';
import Footer from './assets/components/footer'; 

function App() {
  return (
  <div>
    <Header></Header>
    <Nav></Nav>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Resume></Resume>
    <Footer></Footer>
  </div>
    
   
    
  );
}

export default App;
