import React from "react";

import "../../../css/userPage/UserPage.css";
// import { userService } from "../../../../service/authService";

export default function MidSection({ user }) {
  const logout = async () => {
    const fetchData = await fetch(`/api/?app=user/Logout`);
    const item = fetchData.json();
    console.log(item);
    window.location.reload(true);
  };

  return (
    <div className="user-mid-container">
      <div className="user-mid-bg">
        <div className="user-label">მოგესალმებით {user && user.fname}</div>
        {/* <div className="dimmed-overlay"></div> */}
      </div>
      <div className="user-content-wrapper">
        <div className="user-content-left-section">
          <button className="next-page" onClick={logout}>
            გამოსვლა
          </button>
        </div>
        <div className="user-content-right-section"></div>
      </div>
    </div>
  );
}
