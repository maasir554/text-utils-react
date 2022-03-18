import React from "react";
import "./AsideRight.css";
import bsLogo from "../bootstrap-logo.svg";
import reactLogo from "../logo512.png";

export default function AsideRight(props) {
  const DarkLightInverse = () => {
    if (props.Mode === "light") {
      return "dark";
    } else {
      return "light";
    }
  };
  return (
    <>
      <div
        className={`text-${DarkLightInverse()} overflow-auto container d-none d-sm-flex flex-column w-fixed-25-vw px-2 py-2 m-0 border-primary bg-${
          props.Theme
        } bg-opacity-10 rounded-0`}
      >
        {/* Here Below is the space for the outer react componrnt to come.(will be pased as prop) */}

        {props.componentInside}

        <p className="px-2 py-0">
          Application made by Mohammad Maasir Using React and Bootstrap.
        </p>
        <div
          id="aside-img-container"
          className="container px-auto my-0 mx-auto d-flex flex-column py-3 "
        >
          <img
            src={reactLogo}
            className="img-fluid w-50 mx-auto my-4 border-warning"
            alt="React Logo"
            id="react-logo-ID-e6p7po9o70sf76f7"
          />
          <img
            src={bsLogo}
            className="img-fluid w-50 mx-auto my-2 border-warning"
            alt="Bootstrap Logo"
            id="bs-logo-ID-e7878y7h69"
          />
        </div>
      </div>
    </>
  );
}
