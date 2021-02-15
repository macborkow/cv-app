import "./App.css";
import React, { Component } from "react";
import Resume from "./components/Resume";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "build",
    };
  }
  clickSwitch = () => {
    this.setState((state, props) => ({
      mode: this.state.mode === "build" ? "preview" : "build",
    }));
  };
  render = () => (
    <div className="App">
      {this.state.mode==="build"?<header>CV maker</header>:null}
      <Resume mode={this.state.mode}/>
      <button onClick={this.clickSwitch} className="modeSwitch">
        Mode: {this.state.mode}
      </button>
      {this.state.mode==="build"?<footer>
        Made by{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/macborkow">
          Maciej Borkowski
        </a>
      </footer>:null}
    </div>
  );
}

export default App;
