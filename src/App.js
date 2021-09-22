import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Main from "./content/Main";
import Navbar from './content/Navbar';
import './content/Res.css';
import AboutDiv from './content/AboutDiv'
import ContactDiv from "./content/ContactDiv";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/collection">
            <Collection />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <AboutDiv />
      <ContactDiv />
    </div>
  );
}

function Collection() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
function About() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
function Contact() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}





