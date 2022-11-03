import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <Header/>
        <Projects/>
         <Skills/>
      </div>
  </div>
  );
}

export default App;
