//use state is a react feature used to change variables.
import React, { useState } from "react";
import "./Workspace.css";
export default function Workspace(props) {
  return (
    <>
      <section
        id="main-workspace-section-ID_0e3j4f7n2opQont67"
        className="overflow-auto m-lg-4 m-auto bg-light bg-opacity-10 p-1 pe-lg-0 p-sm-1 w-sm-75 w-100 my-lg-0 my-0"
      >
        <section id="workspace-inner-section-IDe10f45h34jfKO09jnpR">
          <div className="container w-100 p-lg-2 p-4">
            {/* |||||||    text area (input)     ||||||| */}

            <div className="mb-3 w-100 ">
              <label
                htmlFor="-exampleFormControltextarea1"
                className="-form-label"
              >
                <h4>Enter text to convert :</h4>
              </label>
              {/* main text box here :  */}
              <textarea
                className="w-100 form-control bg-light border-primary border-2"
                id="main_text_box_code_10"
                rows="5"
                value={props.text}
                onChange={props.handleOnChange}
              ></textarea>
              <button
                className="btn btn-primary mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={props.toUcase}
              >
                Upper case
              </button>
              <button
                className="btn btn-primary mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={props.toLcase}
              >
                Lower case
              </button>
              <button
                className="btn btn-danger mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={props.Cleartext}
              >
                Clear text
              </button>
              <button
                className="btn btn-warning mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={props.FontChanger}
                id="btnFontChangerTwo"
              >
                to Cursive Font
              </button>
              <button
                className="btn btn-secondary mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={props.EmbedDummytext}
              >
                Embed Dummy text
              </button>
              <button
                className="btn btn-secondary mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={props.DeleteDummytext}
              >
                Delete Dummy text
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
