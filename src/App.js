import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideCard from "./pages/SideCard";
import About from "./pages/About";
function App() {
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" component={SideCard} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
