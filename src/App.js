import "./App.css";
import NavBar from "./components/NavBar";
import Workspace from "./components/Workspace.js";
import MasterSection from "./components/MasterSection.js";
import AsideRight from "./components/AsideRight.js";
import { useState } from "react";
import TextEditor from "./components/TextEditor.js";
function App() {
  {
    /*******************************************************************************************************
    ""                             TEXTBOX FUNCTIONS FROM WORKSPACE.js                        ""    
  ******************************************************************************************************* */
  }
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
    let tbox = document.getElementById("main_text_box_code_10");
    console.log(tbox);
    console.log(tbox.style);
    let btnFontChangerTwo = document.getElementById("btnFontChangerTwo");
    console.log(btnFontChangerTwo);
    if (tbox.style.fontFamily !== "cursive") {
      tbox.style.fontFamily = "cursive";
      btnFontChangerTwo.innerHTML = "to Segoe UI";
    } else {
      tbox.style.fontFamily = "-apple-system, Segoe UI, Arial";
      btnFontChangerTwo.innerHTML = "to Cursive Font";
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
  {
    /****************************************************************************************************
     **************************************************************************************************** */
  }

  return (
    <>
      <NavBar
        title="TextUtils"
        linkOne="Home"
        linkTwo="About"
        dropdownText="More"
        actionOne="Help"
        actionTwo="Feedback"
        actionThree="Community"
      />
      <MasterSection>
        <Workspace></Workspace>
        <AsideRight></AsideRight>
      </MasterSection>
      <TextEditor
        text={text}
        handleOnChange={handleOnChange}
        toUcase={toUcase}
        toLcase={toLcase}
        EmbedDummyText={EmbedDummyText}
        DeleteDummyText={DeleteDummyText}
        ClearText={ClearText}
        FontChanger={FontChanger}
      />
    </>
  );
}

export default App;
