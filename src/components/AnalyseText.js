//use state is a react feature used to change variables.
import React, { useState } from "react";
export default function Workspace(props) {
  return (
    <>
      <div className="d-flex flex-column my-1 mx-2">
        <h4> Word Counter :</h4>

        <span>
          <span className="fw-bold">number of letters :</span>{" "}
          {props.text.length}
        </span>
        <span>
          <span className="fw-bold">number of words :</span>{" "}
          {props.text.split(" ").length}
        </span>
        <span>
          <span className="fw-bold">expected time taken to read : </span>
          <span className="badge bg-success text-light">
            {" "}
            {parseFloat(props.text.split(" ").length * 0.008).toFixed(1) +
              " minutes "}
          </span>{" "}
          or about{" "}
          <span className="badge bg-success text-light">
            {parseFloat(props.text.split(" ").length * 0.008 * 60).toFixed(1) +
              " seconds."}
          </span>
        </span>
      </div>
    </>
  );
}
