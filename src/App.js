import React, { Component } from "react";
import "./App.css";
import Aux from "./hoc/Aux/Aux";
import TopBar from "./Components/TopBar/TopBar";

class App extends Component {


  render () {
    return (
    <Aux>
      <TopBar/>
      <div>
        <div>Book 1</div>
        <div>Book 2</div>
        <div>Book 3</div>
        <div>Book 4</div>
        <div>+ Book</div>
      </div>
    </Aux>
    )
  }
}

export default App;
