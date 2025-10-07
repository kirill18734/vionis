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
          <div className="menu-item">Команды</div>
          <div className="menu-item">Настройки</div>
          <div className="menu-item">Журнал</div>
        </nav>
        <div className="toolbar-container">
          <div className="toolbar-item">
            <Hide className="toolbar-item-icon" />
          </div>
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
