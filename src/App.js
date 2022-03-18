import "./App.css";
import NavBar from "./components/NavBar";
import AsideRight from "./components/AsideRight.js";
import AnalyseText from "./components/AnalyseText.js";
import { useState } from "react";
import TextEditor from "./components/TextEditor.js";
import PreviewBox from "./components/PreviewBox";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    console.log(event);
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
    setText(" ");
  };
  const FontChanger = () => {
    let tbox = document.getElementById("main_text_box_code_10");
    let pbox = document.getElementById("preview_text_box_code_1");
    console.log(tbox);
    console.log(tbox.style);
    let btnFontChangerTwo = document.getElementById("btnFontChangerTwo");
    console.log(btnFontChangerTwo);
    if (tbox.style.fontFamily !== "cursive") {
      tbox.style.fontFamily = "cursive";
      pbox.style.fontFamily = "cursive";
      btnFontChangerTwo.innerHTML = "to Segoe UI";
    } else {
      tbox.style.fontFamily = "-apple-system, Segoe UI, Arial";
      pbox.style.fontFamily = "-apple-system, Segoe UI, Arial";
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
    ""                              "TextBox Functions Ends"                                             ""
    **************************************************************************************************** */
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //--------------------------------------------------------------------------------------------------------
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::::::::::::::::::::-------Light Mode / Dark Mode Functions starts-------:::::::::::::::::::::::
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //---------------------------------------------------------------------------------------------------------
  const [Mode, SetMode] = useState("light");
  const ToggleDarkMode = () => {
    console.log("hello, the dark function started!");
    if (Mode === "light") {
      SetMode("dark");
      console.log(Mode);
    } else {
      SetMode("light");
      console.log(Mode);
    }
  };
  const DarkLightInverse = () => {
    if (Mode === "light") {
      return "dark";
    } else {
      return "light";
    }
  };
  //--------------------------------------------------------------------------------------------------------
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::::::::::::::::::::-------Light Mode / Dark Mode Functions Ends-------:::::::::::::::::::::::
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //---------------------------------------------------------------------------------------------------------

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //--------------------------------------------------------------------------------------------------------
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::::::::::::::::::::-------THEME Functions starts-------::::::::::::::::::::::::::::::::::::::
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //---------------------------------------------------------------------------------------------------------
  const [Theme, SetTheme] = useState("primary");
  const ThemeHandler = (themeSelected) => {
    SetTheme(themeSelected);
    let ThS = document.getElementById("ThemeSelector");
    ThS.classList.remove("show");
  };
  //--------------------------------------------------------------------------------------------------------
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::::::::::::::::::::-------THEME Functions starts-------::::::::::::::::::::::::::::::::::::::
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //---------------------------------------------------------------------------------------------------------

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
        ToggleDarkMode={ToggleDarkMode}
        Mode={Mode}
        ThemeHandler={ThemeHandler}
        Theme={Theme}
      />
      <section
        id="MasterSection"
        className={`d-flex flex-row p-0 bg-${Mode} text-${DarkLightInverse()}`}
      >
        <div
          id="LeftWorkSpace"
          className={`m-0 p-4 text-${DarkLightInverse()}`}
        >
          <TextEditor
            text={text}
            handleOnChange={handleOnChange}
            toUcase={toUcase}
            toLcase={toLcase}
            EmbedDummyText={EmbedDummyText}
            DeleteDummyText={DeleteDummyText}
            ClearText={ClearText}
            FontChanger={FontChanger}
            Mode={Mode}
            Theme={Theme}
          />
          <AnalyseText Theme={Theme} text={text} Mode={Mode} />
          <PreviewBox text={text} Mode={Mode} Theme={Theme} />
        </div>
        <AsideRight
          Mode={Mode}
          Theme={Theme}
          componentInside={
            <AnalyseText Mode={Mode} text={text} Theme={Theme} />
          }
        />
      </section>
    </>
  );
}

export default App;
