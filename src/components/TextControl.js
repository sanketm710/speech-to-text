import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
// import useSound from 'use-sound';

function TextControl() {
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const [playSound] = useSound('out2.wav');

  const handleClearText = () => {
    setText(""); // Clear the text content
  };
  // const [text, setText] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const handleOptionSelect1 = (option) => {
    setSelectedOption1(option);
  };

  const insertArticle = () => {
    setIsLoading(true);
    const config = { responseType: "blob" };
    axios
      .post(
        "http://localhost:5001/inference",
        {
          text: text,
          language: selectedOption,
          gender: selectedOption1,
        },
        config
      )
      .then((response) => {
        const href = window.URL.createObjectURL(response.data);
        const EL_audio = document.querySelector("#myAudio");
        EL_audio.src = href;
        EL_audio.load();
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));

    // setText('error')
  };
  // const get_audio = () => {
  //   // setIsLoading(true);
  //   console.log('process continue')
  //   const config = { responseType: "blob" };
  //   axios
  //     .get("http://localhost:5001/getaudio", config)
  //     .then((response) => {
  //       const href = window.URL.createObjectURL(response.data);
  //       const EL_audio = document.querySelector("#myAudio");
  //       EL_audio.src = href;
  //       EL_audio.load();
  //       // setIsLoading(false);
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  function handleSubmit(event) {
    event.preventDefault();
    insertArticle();
  }

  // console.log(isLoading);
  return (
    <div>
      <div
        className="  h-100 rounded p-4 d-flex flex-column justify-content-center"
        style={{
          width: "100%",
          backgroundColor: "#d6dbf4",
        }}
      >
        <h1 className="tool_heading pt-2 mb-2 text-right">Text To Speech</h1>
        <h5 style={{ color: "purple", fontFamily: "sans-serif" }}>
          ~ User can convert any text into audio file content quickly.
        </h5>
        <div className="line d-flex flex-Row justify-content-between align-items-center gap-2 mb-1">
          <select
            value={selectedOption}
            onChange={(e) => handleOptionSelect(e.target.value)}
            className="form-select  source-lang"
          >
            <option value="">Sourse language </option>
            <option value="gujarati">Gujarati</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
          <input type="file" accept=".pdf,file/*" />
          <div>
            <button className={"btn blue"}>File-to-Speech</button>
          </div>
          <select
            value={selectedOption1}
            onChange={(e) => handleOptionSelect1(e.target.value)}
            className="form-select  Gender"
          >
            <option value="">Gender</option>
            <option value="male">Male </option>
            <option value="female">Female</option>
          </select>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-15 rounded"
          style={{
            minHeight: "50vh",
            width: "100%",
            backgroundColor: "white",
            border: "none",
            outline: "none",
            resize: "none",
          }}
        ></textarea>
        <div className="line d-flex flex-Row justify-content-between align-items-center gap-2  mt-2  ">
          <button
            className={"btn blue"}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <FontAwesomeIcon icon={faSync} spin />
            ) : (
              "text to speech"
            )}
            {/* Text-to-Speech */}
          </button>
          {/* <button type="button" className="btn blue" onClick={get_audio} >
          {isLoading ? (<FontAwesomeIcon icon={faSync} spin/>):("Get Audio")}
            Get Audio
          </button> */}
          <audio id="myAudio" controls className="custom-audio"></audio>
          <button
            type="button"
            className="btn clearbutton"
            onClick={handleClearText}
          >
            Clear Text
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextControl;
