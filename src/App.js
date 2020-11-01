import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideCard from "./pages/SideCard";
import About from "./pages/About";
class App extends Component {

  state = { day: [] }

  componentDidMount() {
    axios.get("/agenda").then(response => response.data.data).then((data) => {
      this.setState({ day: data })
      console.log(this.state.day)
     })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/" component={SideCard} />
            {/* <Route path="/side" component={(props) => {<SideCard day={this.state.day}/>}} /> */}
          </Switch>
        </div>
      </Router>
    )
  };
}

export default App;
