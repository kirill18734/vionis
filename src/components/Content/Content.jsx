import React from "react";
import "./Content.css";
import Commands from "../../pages/Tabs/Commands/Commands";
import Settings from "../../pages/Tabs/Settings/Settings";

class Content extends React.Component {
  render() {
    const { activeTab } = this.props;
    return (
      <main>
        {activeTab == "commands" && <Commands />}
        {activeTab == "settings" && <Settings />}
      </main>
    );
  }
}

export default Content;
