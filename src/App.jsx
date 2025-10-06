import React from "react";
import "./App.css";
import Main from "./pages/Main/Main";

class App extends React.Component {
  render() {
    return (
      <div className="app-window-container">
        <div className="app-window">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
