import React from "react";
import { useState } from "react";
export default function WordAnalyse(props) {
  let txt0 = toString(props.text);
  return (
    <div className="d-flex flex-column my-4">
      <h4> Word Counter :</h4>

      <span>
        <span className="fw-bold">number of letters :</span> {txt0.length}
      </span>
      <span>
        <span className="fw-bold">number of words :</span>{" "}
        {txt0.split(" ").length}
      </span>
      <span>
        <span className="fw-bold">expected time taken to read : </span>
        <span class="badge bg-success text-light">
          {" "}
          {parseFloat(txt0.split(" ").length * 0.008).toFixed(1) + " minutes "}
        </span>{" "}
        or about{" "}
        <span className="badge bg-success text-light">
          {parseFloat(txt0.split(" ").length * 0.008 * 60).toFixed(1) +
            " seconds."}
        </span>
      </span>
    </div>
  );
}
