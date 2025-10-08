import "./Settings.css";

const Settings = (props) => {
  return (
    <div className="settings-container">
      <div className="settings-group-values">
        <h2 className="settings-title">Общие</h2>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Запуск при старте Window</label>
        </div>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Всплывающие уведомления</label>
        </div>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Приглушить голос</label>
        </div>
      </div>
      <div className="settings-group-values">
        <h2 className="settings-title">Запись голоса</h2>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Инпут</label>
        </div>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Запись только при нажатии</label>
        </div>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Выключать звук при нажаии</label>
        </div>
      </div>
      <div className="settings-group-values">
        <h2 className="settings-title">Сервис распознавания голоса</h2>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Инпут</label>
        </div>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Инпут</label>
        </div>
      </div>
      <div className="settings-group-values">
        <h2 className="settings-title">Сервис произношения голоса</h2>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Инпут</label>
        </div>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Инпут</label>
        </div>
      </div>
      <div className="settings-group-values">
        <h2 className="settings-title">Голосовые команды</h2>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Голосовые команды</label>
        </div>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Общение</label>
        </div>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Внешний источник фраз</label>
        </div>
      </div>
      <div className="settings-group-values">
        <h2 className="settings-title">Голосовой набор текста</h2>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Голосовой набор текста</label>
        </div>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Автоматическая орфография</label>
        </div>
        <div className="setting-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <label>Клавиатурный ввод текста</label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
