import React, { useState } from "react";
import RegisterLegalEntity from "./RegisterLegalEntity";
import RegisterPhysicalEntity from "./RegisterPhysicalEntity";
import Login from "./Login";

import "../../../css/parts/Register.css";

export default function Registration({ setRegWindow }) {
  const [isPhysical, setPysicalReg] = useState(false);
  const [isLegal, setLegalReg] = useState(false);
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="register-window_container">
      {isPhysical ? (
        <div className="register-window_wrapper">
          <RegisterPhysicalEntity
            setPysicalReg={setPysicalReg}
            setLegalReg={setLegalReg}
            setRegWindow={setRegWindow}
          />
        </div>
      ) : isLegal ? (
        <div className="register-window_wrapper">
          <RegisterLegalEntity
            setLegalReg={setLegalReg}
            setPysicalReg={setPysicalReg}
            setRegWindow={setRegWindow}
          />
        </div>
      ) : null}
      {isLogin ? (
        <Login
          setLogin={setLogin}
          setPysicalReg={setPysicalReg}
          setRegWindow={setRegWindow}
        />
      ) : null}
    </div>
  );
}
