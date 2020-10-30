import React, { Component } from "react";
import axios from 'axios';


class App extends Component {

  state = {
    day: []
  }

  componentDidMount() {
    axios.get("/agenda").then(response => response.data.data).then((data) => {
      this.setState({ day: data })
      console.log(this.state.day)
     })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.day.id}</p>
      </div>
    )
  };
}

export default App;
