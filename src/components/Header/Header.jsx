import React from "react";
import "./Header.css";
import { ReactComponent as Hide } from "../../assets/hide.svg";
import { ReactComponent as Maximize } from "../../assets/maximize.svg";
import { ReactComponent as Close } from "../../assets/close.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div
            className="menu-item"
            onClick={() => this.props.setActiveTab("commands")}
          >
            Команды
          </div>
          <div
            className="menu-item"
            onClick={() => this.props.setActiveTab("settings")}
          >
            Настройки
          </div>
        </nav>
        <div className="toolbar-container">
          <button className="toolbar-item" title="Свернуть">
            <Hide className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" title="Восстановить">
            <Maximize className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" title="Закрыть">
            <Close className="toolbar-item-icon" />
          </button>
        </div>
      </header>
    );
  }
}

export default Header;

// <div className="toolbar-container">
//           <div className="toolbar-item">
//             <Hide className="toolbar-item-icon" />
//           </div>
//           <div className="toolbar-item">
//             {/* <Maximize className="toolbar-item-icon" /> */}
//             {/* <img src={maximizeIcon} className="toolbar-item-icon" alt="" /> */}
//           </div>
//           <div className="toolbar-item">
//             {/* <Close className="toolbar-item-icon" /> */}
//             {/* <img src={closeIcon} className="toolbar-item-icon" alt="" /> */}
//           </div>
//         </div>
