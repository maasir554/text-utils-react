import React from "react";
import propTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";
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
  return (
    <>
      <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light border-bottom border-secondary border-1">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.linkOne}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.linkTwo}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.dropdownText}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      {props.actionOne}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {props.actionTwo}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {props.actionThree}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <i class="bi bi-brightness-high-fill bg-warning py-0 px-1 rounded-pill"></i>
            <div class="form-check form-switch mx-2">
              <label class="form-check-label" for="flexSwitchCheckDefault">
                <i class="bi bi-moon"></i>
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
            {/*<form className="d-flex">
              <input
                className="form-control me-2 rounded-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary rounded-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}
