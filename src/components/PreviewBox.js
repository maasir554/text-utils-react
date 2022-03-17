import React from "react";
export default function PreviewBox(props) {
  return (
    <>
      <div className="container w-100 m-2 py-2">
        <h4>Preview text</h4>
        <div
          id="preview_text_box_code_1"
          className="border border-primary border-2 p-2 w-100"
        >
          <p className="w-100 text-wrap text-break">{props.text}</p>
        </div>
      </div>
    </>
  );
}
