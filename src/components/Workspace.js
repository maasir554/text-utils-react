//use state is a react feature used to change variables.
import React, { useState } from "react";
import PreviewBox from "./PreviewBox";
import "./Workspace.css";
export default function Workspace() {
  //React's *useState* standard syntax for variable text and setText (to manupulate text)
  const [text, setText] = useState("Enter Text here");
  //form change handler(function) :
  const handleOnChange = (event) => {
    console.log("handle Ucase on click.");
    //update value of 'text; as we type :-
    setText(event.target.value);
  };

  // Function for Uppercase :-

  const toUcase = () => {
    console.log("Ucase was clicked.");
    let newText = text.toUpperCase();
    setText(newText);
  };

  // Function for lower case :-

  const toLcase = () => {
    console.log("Lcase was clicked.");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const ClearText = () => {
    console.log("ClearText was clicked.");
    setText("");
  };
  const FontChanger = () => {
    let tbox = document.getElementById("main_text_box_code_1");
    let pbox = document.getElementById("preview_text_box_code_1");
    console.log(tbox);
    console.log(tbox.style);
    let btnFontChanger = document.getElementById("btnFontChanger");
    console.log(btnFontChanger);
    if (tbox.style.fontFamily !== "cursive") {
      tbox.style.fontFamily = "cursive";
      pbox.style.fontFamily = "cursive";
      btnFontChanger.innerHTML = "to Segoe UI";
    } else {
      tbox.style.fontFamily = "-apple-system, Segoe UI, Arial";
      pbox.style.fontFamily = "-apple-system, Segoe UI, Arial";
      btnFontChanger.innerHTML = "to Cursive Font";
    }
  };
  const EmbedDummyText = () => {
    setText(
      text +
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur dolorum blanditiis molestias accusamus suscipit ullam, molestiae quos corrupti obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur dolorum blanditiis molestias accusamus suscipit ullam, molestiae quos corrupti obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur dolorum blanditiis molestias accusamus suscipit ullam, molestiae quos corrupti obcaecati."
    );
  };
  const DeleteDummyText = () => {
    setText(
      text.replace(
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur dolorum blanditiis molestias accusamus suscipit ullam, molestiae quos corrupti obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur dolorum blanditiis molestias accusamus suscipit ullam, molestiae quos corrupti obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur dolorum blanditiis molestias accusamus suscipit ullam, molestiae quos corrupti obcaecati.",
        ""
      )
    );
  };
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
                htmlFor="-exampleFormControlTextarea1"
                className="-form-label"
              >
                <h4>Enter text to convert :</h4>
              </label>
              {/* main text box here :  */}
              <textarea
                className="w-100 form-control bg-light border-primary border-2"
                id="main_text_box_code_1"
                rows="5"
                value={text}
                onChange={handleOnChange}
              ></textarea>
              <button
                className="btn btn-primary mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={toUcase}
              >
                Upper case
              </button>
              <button
                className="btn btn-primary mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={toLcase}
              >
                Lower case
              </button>
              <button
                className="btn btn-danger mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={ClearText}
              >
                Clear Text
              </button>
              <button
                className="btn btn-warning mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={FontChanger}
                id="btnFontChanger"
              >
                to Cursive Font
              </button>
              <button
                className="btn btn-secondary mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={EmbedDummyText}
              >
                Embed Dummy Text
              </button>
              <button
                className="btn btn-secondary mt-2 me-2 rounded-0 p-1 btn-sm"
                onClick={DeleteDummyText}
              >
                Delete Dummy Text
              </button>
            </div>

            {/*|||||||   Word Counter   ||||||||*/}

            <div className="d-flex flex-column my-4">
              <h4> Word Counter :</h4>

              <span>
                <span className="fw-bold">number of letters :</span>{" "}
                {text.length}
              </span>
              <span>
                <span className="fw-bold">number of words :</span>{" "}
                {text.split(" ").length}
              </span>
              <span>
                <span className="fw-bold">expected time taken to read : </span>
                <span class="badge bg-success text-light">
                  {" "}
                  {parseFloat(text.split(" ").length * 0.008).toFixed(1) +
                    " minutes "}
                </span>{" "}
                or about{" "}
                <span className="badge bg-success text-light">
                  {parseFloat(text.split(" ").length * 0.008 * 60).toFixed(1) +
                    " seconds."}
                </span>
              </span>
            </div>
          </div>
          <PreviewBox text={text} />
        </section>
      </section>
    </>
  );
}
