import React, { Component } from "react";
import "./App.css";
import Aux from "./hoc/Aux/Aux";
import TopBar from "./Components/UI/TopBar/TopBar";
import Library from "./Components/Library/Library";

class App extends Component {
  render () {
    return (
    <Aux>
      <TopBar/>
      <Library/>
    </Aux>
    )
  }
}

export default App;
