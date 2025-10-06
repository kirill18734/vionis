import React from "react";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Main;
