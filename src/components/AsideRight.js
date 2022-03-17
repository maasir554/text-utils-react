import React from "react";
import "./AsideRight.css";
import bsLogo from "../bootstrap-logo.svg";
import reactLogo from "../logo512.png";
import text from "./Workspace.js";
import WordAnalyse from "./WordAnalyse";
console.log(text);
export default function AsideRight() {
  return (
    <>
      <div className="overflow-auto container d-none d-sm-flex flex-column w-fixed-25-vw px-2 py-3 m-0 border-primary bg-primary bg-opacity-10 rounded-0">
        <WordAnalyse text={text} />
        {/* <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            The current link item
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            A second link item
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            A third link item
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            A fourth link item
          </a>
          <a className="list-group-item list-group-item-action disabled">
            A disabled link item
          </a>
        </div> */}
        <p className="px-2 py-o">
          Application made by Mohammad Maasir Using React and Bootstrap.
        </p>
        <div
          id="aside-img-container"
          className="container px-auto my-0 mx-auto d-flex flex-column py-3 "
        >
          <img
            src={bsLogo}
            className="img-fluid w-75 mx-auto my-2 border-warning"
            alt="Bootstrap Logo"
            id="bs-logo-ID-e7878y7h69"
          />
          <img
            src={reactLogo}
            className="img-fluid w-75 mx-auto my-2 border-warning"
            alt="React Logo"
            id="react-logo-ID-e6p7po9o70sf76f7"
          ></img>
        </div>
      </div>
    </>
  );
}
