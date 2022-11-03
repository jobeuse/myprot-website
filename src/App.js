import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <Header/>
        <Skills/>
        <Projects/> 
        <Contact/>
      </div>
  </div>
  );
}

export default App;
