import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
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

        <Button variant="contained" color="primary">
          Hello World
        </Button>
        
      </div>
    )
  };
}

export default App;
