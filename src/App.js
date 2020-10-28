import React, { Component } from "react";
import axios from 'axios';


class App extends Component {

  state = {
    day: []
  }

  componentDidMount() {
    axios.get("/agenda", {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      }
    }).then(response => response.data).then((data) => {
      this.setState({ day: data.data })
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
