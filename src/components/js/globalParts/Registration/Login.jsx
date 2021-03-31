import React, { useState } from "react";
import { Link, Redirect, NavLink } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

import logo from "../../../../assets/img/icons/logo.svg";
import blackX from "../../../../assets/img/black-x.png";

import RightIco from "../../../../assets/img/right-arrow-icon.png";
import RightArrowWhite from "../../../../assets/img/arrow.png";

function Login({ setLogin, setPysicalReg, setRegWindow }) {
  // registration pysical
  const setReg = () => {
    setLogin(false);
    setPysicalReg(true);
  };

  // login
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = async e => {
    e.preventDefault();

    await axios
      .get("/api/?app=user/Auth", {
        params: {
          email: email,
          password: password
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
            if (result.data.user) {
              setLoggedIn(true);
            }
          } else {
            setIsError(true);
          }
        } else {
          setIsError(true);
        }
      })
      .catch(e => {
        console.log(e);
        setIsError(true);
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/ka-ge/user" />;
  }

  return (
    <div className="login-window_wrapper">
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
          {/* <div className="login-header-text">
            <span>შესვლა</span>
          </div> */}
        </div>
        {/* <NavLink to="/ka-ge/registration" className="go-to-registration">
          <div className="go-to-registration-span">რეგისტრაცია</div>
          <div className="register-arrow-wrapper">
            <img src={RightArrowWhite} alt="" />
          </div>
        </NavLink> */}
        <NavLink to="/ka-ge/organizations" className="login-window_close">
          <img src={blackX} alt="" />
        </NavLink>
      </div>
      <div className="login-greeting">
        <h2>გამარჯობა</h2>
        <h4>გთხოვთ გაიაროთ ავტორიზაცია</h4>
      </div>
      <form className="login-form">
        <div className="form-control">
          <label htmlFor="login-email">{window.lang.Email}</label>
          <input
            type="email"
            value={email}
            placeholder={window.lang.Email}
            id="login-email"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="login-password">{window.lang.password}</label>
          <input
            type="password"
            value={password}
            placeholder={window.lang.password}
            id="login-password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </form>
      <div className="login-window_footer">
        <button onClick={postLogin} className="sign-in" type="button">
          {window.lang.Authorization}
          {/* <img src={RightIco} alt="" /> */}
        </button>
        {/* <a href="" className="forgot-password">
          {window.lang.Forgotpassword}
        </a> */}
      </div>
      {isError ? (
        <span className="auth-error">{window.lang.checkdataaccuracy}</span>
      ) : null}
      {/* <div className="login-separator">
        <div className="login-or">
          <hr className="hr-or" />
          <span className="span-or">ან</span>
        </div>
      </div> */}
      <div className="login-registartion-content">
        <p>
          {window.lang.Donothaveaccount}{" "}<br></br>
          <Link to="/ka-ge/registration" id="signup">
            {window.lang.Signupnow}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
