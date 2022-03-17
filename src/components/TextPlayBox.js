import React from "react";
export default function TextPlayBox() {
  //standard syntax for variable text and setText (to manupulate text)
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
  return (
    <>
      <section className="m-0 bg-light w-75 bg-opacity-10 p-4">
        <div className="container">
          <div className="mb-3">
            <label
              htmlFor="-exampleFormControlTextarea1"
              className="-form-label"
            >
              <h3>Enter text to convert :</h3>
            </label>
            {/*the textarea is text box only.*/}
            <textarea
              className="form-control bg-light border-primary border-2"
              id="main_box"
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
          </div>
        </div>
      </section>
    </>
  );
}
