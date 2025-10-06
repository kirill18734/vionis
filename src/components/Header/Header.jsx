import React from "react";
import "./Header.css";
import hideIcon from "../../assets/hide.svg";
import maximizeIcon from "../../assets/maximize.svg";
import closeIcon from "../../assets/close.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="menu-container">
          <div className="menu-item">Команды</div>
          <div className="menu-item">Настройки</div>
          <div className="menu-item">Журнал</div>
        </div>
        <div className="toolbar-container">
          <div className="toolbar-item">
            <img src={hideIcon} className="toolbar-item-icon" alt="" />
          </div>
          <div className="toolbar-item">
            <img src={maximizeIcon} className="toolbar-item-icon" alt="" />
          </div>
          <div className="toolbar-item">
            <img src={closeIcon} className="toolbar-item-icon" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
