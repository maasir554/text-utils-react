//use state is a react feature used to change variables.
import "./TextEditor.css";
export default function TextEditor(props) {
  const DarkLightInverse = () => {
    if (props.Mode === "light") {
      return "dark";
    } else {
      return "light";
    }
  };
  return (
    <>
      {/* |||||||    text area (input)     ||||||| */}

      <div
        className={`bg-${props.Theme} bg-opacity-10 mb-3 w-100 p-3 rounded-3 border border-2 border-${props.Theme}`}
      >
        <label htmlFor="-exampleFormControltextarea1" className="-form-label">
          <h4>Enter text to convert :</h4>
        </label>
        {/* main text box here :  */}
        <textarea
          className={`bg-${
            props.Mode
          } bg-opacity-100 w-100 form-control text-${DarkLightInverse()} border-${
            props.Theme
          } border-2`}
          id="main_text_box_code_10"
          rows="5"
          value={props.text}
          onChange={props.handleOnChange}
        ></textarea>
        <button
          className={`btn btn-${props.Theme} mt-2 me-2 rounded-pill p-1 px-2 btn-sm`}
          onClick={props.toUcase}
        >
          Upper case
        </button>
        <button
          className={`btn btn-${props.Theme} mt-2 me-2 rounded-pill p-1 px-2 btn-sm`}
          onClick={props.toLcase}
        >
          Lower case
        </button>
        <button
          className={`btn btn-${props.Theme} mt-2 me-2 rounded-pill p-1 px-2 btn-sm`}
          onClick={props.ClearText}
        >
          Clear text
        </button>
        <button
          className={`btn btn-${props.Theme} mt-2 me-2 rounded-pill p-1 px-2 btn-sm`}
          onClick={props.FontChanger}
          id="btnFontChangerTwo"
        >
          to Cursive Font
        </button>
        <button
          className={`btn btn-${props.Theme}  mt-2 me-2 rounded-pill p-1 px-2 btn-sm`}
          onClick={props.EmbedDummyText}
        >
          Embed Dummy text
        </button>
        <button
          className={`btn btn-${props.Theme}  mt-2 me-2 rounded-pill p-1 px-2 btn-sm`}
          onClick={props.DeleteDummyText}
        >
          Delete Dummy text
        </button>
      </div>
    </>
  );
}
