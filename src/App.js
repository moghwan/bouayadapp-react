import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideCard from "./pages/SideCard";
import About from "./pages/About";
const App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" component={SideCard} />
        </Switch>
      </>
    </Router>
  )
}

export default App;
