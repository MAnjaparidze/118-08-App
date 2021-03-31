import React, { useState } from "react";
import LoginIcon from "../../../../assets/img/login-reg.png";
import Logo from "../../../../assets/img/icons/logo.svg";

import SignInWindow from "../../globalParts/Registration/Registration";

export default function MidSectionFirstPanel() {
  const [lang, setLang] = useState(false);
  const [regIsActive, toggleReg] = useState(false);

  const toggleLanguage = async () => {
    await setLang(!lang);
  };
  
  return (
    <div className="midSection__first-panel">
      {/* <div className="registration-link" onClick={() => toggleReg(!regIsActive)}>
        <img src={LoginIcon} alt="login icon"></img>
        <span>რეგისტრაცია / შესვლა</span>
      </div> */}
      {/* <img className="header__logo" src={Logo} alt="" /> */}
      {/* <div className="language-switch">
        <span className={!lang ? `active-lang` : ""}>ქარ</span>
        <label className="switch">
          <input type="checkbox" />
          <span
            className="slider round"
            onClick={() => {
              toggleLanguage();
            }}
          ></span>
        </label>
        <span className={lang ? `active-lang` : ""}>ENG</span>
      </div> */}
      {/* {regIsActive && <SignInWindow />} */}
    </div>
  );
}
