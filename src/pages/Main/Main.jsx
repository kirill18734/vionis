import React from "react";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import "./Main.css";

class Main extends React.Component {
  state = {
    activeTab: "commands", // commands , settings
  };
  setActiveTab = (activeTab) => {
    this.setState({ activeTab });
  };
  render() {
    return (
      <div className="main-container">
        <Header setActiveTab={this.setActiveTab} />
        <Content activeTab={this.state.activeTab} />
      </div>
    );
  }
}

export default Main;
