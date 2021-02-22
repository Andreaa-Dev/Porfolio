import logo from "./logo.svg";
import "./App.css";
import "./Component/Page1";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MyWork from "./Pages/MyWork";
import Contact from "./Pages/Contact";
import Navbar from "./Component/Navbar";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/MyWork">
          <MyWork />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
