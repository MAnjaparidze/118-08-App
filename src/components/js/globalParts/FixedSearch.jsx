import React, { useState } from "react";
import SearchIcon from "../../../assets/img/search.png";
import DismissIcon from "../../../assets/img/x-icon.png";

import "../../css/parts/FixedSearch.css";

export default function FixedSearch() {
  const [searchIsActive, toggleSearchActive] = useState(false);

  return (
    <div
      className={
        searchIsActive
          ? "search-field_container search-field-extended"
          : "search-field_container"
      }
    >
      {searchIsActive && (
        <div
          className={"calendar-search-field_wrapper"}
          // : "calendar-search-field_wrapper mid-panel-inactive"
        >
          <form className="search-field">
            <input type="text" placeholder="მოძებნეთ დღესასწაული ან თარიღი" />
            <button type="submit">
              <img src={SearchIcon} alt="" />
            </button>
            <div
              className="calendar-deactivate-search-panel"
              onClick={() => toggleSearchActive(!searchIsActive)}
            >
              <img src={DismissIcon} alt="" />
            </div>
          </form>
        </div>
      )}

      <button
        className="calendar-search-btn"
        onClick={() => toggleSearchActive(!searchIsActive)}
      >
        <img src={SearchIcon} alt="" />
      </button>
    </div>
  );
}
