import React, { useState } from "react";
import { Link, Redirect, NavLink } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

import RightIco from "../../../../assets/img/right-arrow-icon.png";
import gIco from "../../../../assets/img/g-plus.png";
import fbIco from "../../../../assets/img/facebook-ico.svg";

import logo from "../../../../assets/img/icons/logo.svg";
import blackX from "../../../../assets/img/black-x.png";
import RightArrowWhite from "../../../../assets/img/arrow.png";

export default function RegisterPhysicalEntity({
  setPysicalReg,
  setLegalReg,
  setRegWindow
}) {
  const [isChecked, toggleCheck] = useState(false);

  // registration legal
  const setReg = () => {
    setPysicalReg(false);
    setLegalReg(true);
  };

  // register
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [verify, setVerify] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [type, setType] = useState("physical");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // const { setAuthTokens } = useAuth();

  const postReg = () => {
    axios
      .get("/api/?app=user/Register", {
        params: {
          type: type,
          fname: fname,
          lname: lname,
          email: email,
          password: password,
          password2: password2,
          agreement: agreement
        },
        timeout: 10000,
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(result => {
        if (result.status === 200) {
          if (result.data.status === 1) {
            // setLoggedIn(true);

            setEmail("");
            setPassword("");
            setPassword2("");
            setIsError(false);

            setVerify(true);
          } else {
            setIsError(true);
          }
        } else {
          setIsError(true);
        }
      })
      .catch(e => {
        setIsError(true);
      });
  };

  // const referer = props.location.state.referer || '/';

  if (isLoggedIn) {
    return <Redirect to="/" />;
    // return <Redirect to={referer} />;
  }
  // end register

  return (
    <div className="register-window">
      <div className="login-header">
        <div>
          <div className="main__header__navigation__logo">
            <NavLink
              to="/ka-ge/organizations"
              className="main__header__navigation__logo__content"
            >
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="login-header-text">
            {/* <span>რეგისტრაცია</span> */}
            <NavLink to="/ka-ge/organizations" className="login-window_close">
              <img src={blackX} alt="" />
            </NavLink>
          </div>
        </div>
        <NavLink to="/ka-ge/login" className="go-to-login">
          <div className="register-arrow-wrapper">
            <img src={RightArrowWhite} alt="" />
          </div>
          <span>შესვლა</span>
        </NavLink>
      </div>
      <form method="post" className="register-legal-entity-form">
        <div className="form-control">
          <label htmlFor="login-email">{window.lang.Email}</label>
          <input
            type="email"
            value={email}
            placeholder={window.lang.Email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <input type="text" name="type" value="physical" hidden />
        <div className="form-control">
          <label htmlFor="login-fname">{window.lang.Name}</label>
          <input
            type="text"
            value={fname}
            placeholder={window.lang.Name}
            onChange={e => {
              setFname(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="login-lname">{window.lang.surname}</label>
          <input
            type="text"
            value={lname}
            placeholder={window.lang.surname}
            onChange={e => {
              setLname(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="login-password">{window.lang.password}</label>
          <input
            type="password"
            value={password}
            pattern=".{6,}"
            placeholder={window.lang.password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="login-password2">{window.lang.repeatpassword}</label>
          <input
            type="password"
            value={password2}
            pattern=".{6,}"
            placeholder={window.lang.repeatpassword}
            onChange={e => {
              setPassword2(e.target.value);
            }}
          />
        </div>
        <div className="form-control"></div>
        {/* <div className="agreement-on-rules">
          <div
            className="register-check-square"
            onClick={() => {
              toggleCheck(!isChecked);
            }}
          >
            {isChecked && <div className="register-check-circle"></div>}
          </div>
          <Link to="" target="_blank">
            {window.lang.IagreeTermsConditions}
          </Link>
        </div> */}
        {/* <button onClick={postReg} className="register-button" type="button">
          {window.lang.Toregister} <img src={RightIco} alt="" />
        </button> */}
      </form>
      {/* {isError ? (
        <span className="auth-error">{window.lang.checkdataaccuracy}</span>
      ) : null}
      {verify ? (
        <span className="auth-warring">
          {window.lang.verificationcodesented}
        </span>
      ) : null} */}
      {/* <div className="register-physical-second-nav">
        <div className="horizontal-line"></div>
        <span className="register-physical-second-nav-text">
          {window.lang.Or}
        </span>
        <div className="horizontal-line"></div>
      </div> */}
      {/* <div className="register-by-socials">
        <div className="register-by-fb">
          <a>
            <img src={fbIco} alt="" />
            Facebook-ით რეგისტრაცია
          </a>
        </div>
        <div className="register-by-g">
          <a>
            <img src={gIco} alt="" />
            {window.lang.SignupGoogle}
          </a>
        </div>
      </div> */}

      {/* <NavLink to="/ka-ge/registration-2" className="register-next-page"> */}
      {/* <span>შემდეგი</span>
        <img src={RightIco} alt="" /> */}
      <button onClick={postReg} className="register-button" type="button">
        <span>{window.lang.Toregister}</span>
        <img src={RightIco} alt="" />
      </button>
      {/* </NavLink> */}
      {/* <div className="physical-entity-register-link" onClick={setReg}>
        <span>{window.lang.Legalpersonalregistration}</span>
      </div> */}
    </div>
  );
}
