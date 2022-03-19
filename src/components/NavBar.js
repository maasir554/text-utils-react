import React, { useState } from "react";
import propTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  NavBar.propTypes = {
    NavTitle: propTypes.string.isRequired,
    dropdownText: propTypes.string,
    actionOne: propTypes.string,
    actionTwo: propTypes.string,
    actionThree: propTypes.string,
  };
  NavBar.defaultProps = {
    NavTitle: "default-title",
    dropdownText: "dropdown-text-here",
    actionOne: "click link 1",
    actionTwo: "click link 2",
    actionThree: "click link 3",
  };
  const DarkLightInverse = () => {
    if (props.Mode === "light") {
      return "dark";
    } else {
      return "light";
    }
  };
  const [ThemeColorOut, SetThemeColorOut] = useState("#0d6efc");
  function UpdateNavActiveBorderTheme(themeColor) {
    SetThemeColorOut(themeColor);
  }
  const NavHomeActive = () => {
    let NavHome = document.getElementById("NavHome");
    let NavAbout = document.getElementById("NavAbout");
    NavAbout.classList.remove("active");
    NavHome.classList.add("active");
    NavHome.style.borderBottom = `2px solid ${ThemeColorOut}`;
    NavAbout.style.borderBottom = `2px solid transparent`;
  };
  const NavAboutActive = () => {
    let NavAbout = document.getElementById("NavAbout");
    let NavHome = document.getElementById("NavHome");
    NavAbout.classList.add("active");
    NavHome.classList.remove("active");
    NavAbout.style.borderBottom = `2px solid ${ThemeColorOut}`;
    NavHome.style.borderBottom = `2px solid transparent`;
  };
  return (
    <>
      <nav
        className={`sticky-top navbar navbar-expand-sm align-items-centre navbar-${props.Mode} bg-${props.Mode} border-bottom border-secondary border-1`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse my-1 p-0 navbar-collapse bg-${props.Mode}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-0">
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/home"
                  id="NavHome"
                  onClick={NavHomeActive}
                >
                  {props.linkOne}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  id="NavAbout"
                  onClick={NavAboutActive}
                >
                  {props.linkTwo}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle `}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.dropdownText}
                </a>
                <ul
                  className={`dropdown-menu bg-${
                    props.Mode
                  } text-${DarkLightInverse()}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      className={`${
                        props.Mode
                      }-hover-fix dropdown-item text-${DarkLightInverse()}`}
                      href="#"
                    >
                      {props.actionOne}
                    </a>
                  </li>
                  <li>
                    <a
                      className={`${
                        props.Mode
                      }-hover-fix dropdown-item text-${DarkLightInverse()}`}
                      href="#"
                    >
                      {props.actionTwo}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className={`${
                        props.Mode
                      }-hover-fix dropdown-item text-${DarkLightInverse()}`}
                      href="#"
                    >
                      {props.actionThree}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="btn-group">
              <button
                type="button"
                className={`my-2 btn btn-${props.Theme} py-1 px-3 me-3 text-light dropdown-toggle`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="ThemeButton"
              >
                Color Theme
              </button>
              <ul
                className={`border-${DarkLightInverse()} dropdown-menu bg-${
                  props.Mode
                } text-${DarkLightInverse()}`}
                aria-labelledby="navbarDropdown"
                id="ThemeSelector"
              >
                <li>
                  <a
                    className={`${
                      props.Mode
                    }-hover-fix dropdown-item text-${DarkLightInverse()}`}
                    onClick={() => {
                      props.ThemeHandler("primary");
                      UpdateNavActiveBorderTheme("#0d6efc");
                    }}
                  >
                    Blue (default)
                  </a>
                </li>
                <li>
                  <a
                    className={`${
                      props.Mode
                    }-hover-fix dropdown-item text-${DarkLightInverse()}`}
                    onClick={() => {
                      props.ThemeHandler("purple");
                      UpdateNavActiveBorderTheme("purple");
                    }}
                  >
                    Purple
                  </a>
                </li>
                <li>
                  <a
                    className={`${
                      props.Mode
                    }-hover-fix dropdown-item text-${DarkLightInverse()}`}
                    onClick={() => {
                      props.ThemeHandler("pink");
                      UpdateNavActiveBorderTheme("pink");
                    }}
                  >
                    Pink
                  </a>
                </li>
                <li>
                  <a
                    className={`${
                      props.Mode
                    }-hover-fix dropdown-item text-${DarkLightInverse()}`}
                    onClick={() => {
                      props.ThemeHandler("orange");
                      UpdateNavActiveBorderTheme("orange");
                    }}
                  >
                    Orange
                  </a>
                </li>
              </ul>
            </div>
            <div className={`my-2 d-flex flex-row text-${DarkLightInverse()}`}>
              <i className="bi bi-brightness-high-fill py-0 px-1 rounded-pill"></i>
              <div className="form-check form-switch mx-2">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  <i className="bi bi-moon"></i>
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.ToggleDarkMode}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
