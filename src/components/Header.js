import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <ul className="header__nav-lists">
          <li className="header__list">About</li>

          <li className="header__list">Projects</li>
          <li className="header__list">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
