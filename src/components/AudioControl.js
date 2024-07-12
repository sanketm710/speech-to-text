import React, { useState, useRef, useEffect } from "react";
import TextControl from "./TextControl";
import SpeechControl from "./SpeechControl";
import TextTranslate from "./TextTranslate";
import SVG from "../assets/SVG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faSync } from "@fortawesome/free-solid-svg-icons";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.jpeg";
import logo4 from "../assets/logo4.jpeg";
import Footer from "./Footer";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isError, setIsError] = useState(false);
  const [activeHref, setActiveHref] = useState("#speechToTextRef");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorder = useRef(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [audio1, setAudio1] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const { transcript, resetTranscript } = useSpeechRecognition();

  const mimeType = "audio/webm";

  let updateSound = () => {
    if (audio1 !== null) {
      // Check if audio is not null
      if (isPlaying) {
        audio1.pause(); // Use audio directly
      } else {
        audio1.play(); // Use audio directly
      }
      setIsPlaying(!isPlaying);
    } else {
      setIsError(true);
    }
  };

  function handleCopyText() {
    navigator.clipboard.writeText(textAreaValue);
    navigator.clipboard.writeText(transcript)
    
  }
  const clearText = () => {
    setTextAreaValue("");
    resetTranscript();
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const [, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/");
      const jsondata = await response.json();
      setData(jsondata);
    } catch (error) {
      console.log(error);
    }
  };

  async function handleFileUpload(file) {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://127.0.0.1:5000/upload",
        formData
      );
      setTextAreaValue(response.data.transcription);
    } catch (error) {
      console.error(error);
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
  });
  const handleFileInputChange = async (e) => {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", selectedOption);
    // handleFileUpload(file);
    try {
      setIsLoading(true);
      const response = await axios.post("/upload", formData);
      setTextAreaValue(response.data.transcription);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  // function handleConvertButtonClick() {
  //   const fileInput = document.getElementById("fileInput");

  //   const file = fileInput.files[0];

  //   handleFileUpload(file);
  // }
  const handleConvertButtonClick = () => {
    // Assuming you have access to the file input element
    const fileInput = document.getElementById("fileInput");

    // Get the selected file from the file input element
    const file = fileInput.files[0];
    if (!file) {
      setIsError(true);
      return;
    }
    handleFileInputChange();
  };

  const startListening = async () => {
    setIsRecording(true);

    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    const streamData = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    const media = new MediaRecorder(streamData, { type: mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };
  const stopListening = () => {
    setIsRecording(false);
    SpeechRecognition.stopListening();
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
    };
  };
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleAudioData = (event) => {
    audioChunks.current.push(event.data);
  };

  SpeechRecognition.onaudiostart = () => console.log("Audio capturing started");
  SpeechRecognition.onresult = handleAudioData;
  console.log(isLoading);
  return (
    <div
      style={{ display: "flex", flexDirection: "row" }}
      className="audio-control-container"
    >
      <div className="sidebar">
        <div className="sidebar-content">
          {[
            { title: "Speech To Text", href: "#speechToTextRef", logo: logo1 },
            { title: "Text To Speech", href: "#TextToSpeechRef", logo: logo2 },
            {
              title: "Speech To Speech",
              href: "#SpeechToSpeechRef",
              logo: logo3,
            },
            { title: "Text To Text", href: "#TextToTextRef", logo: logo4 },
          ].map((item) => {
            return (
              <a
                className={`sidelink b d-flex ${
                  item?.href === activeHref ? "sidelink-active" : ""
                }`}
                href={item?.href}
                onClick={() => {
                  setActiveHref(item?.href);
                }}
              >
                <img
                  src={item.logo}
                  alt={item.title}
                  className="sidebar-logo"
                />
                <span className="sidebar-title">{item.title}</span>
                {/* {item?.title} */}
              </a>
            );
          })}
        </div>

        <div>
          <img alt="erorr" src={SVG} width="70%"></img>
        </div>
      </div>
      <div className="main">
        <div id="speechToTextRef" className="mt-4 offset ">
          <div
            className="rounded p-4 d-flex flex-column justify-content-center"
            style={{
              // width: "100%",
              backgroundColor: "#d6dbf4",
            }}
          >
            <h1 className="tool_heading pt-2 mb-2 text-right font-title">
              Speech to Text
            </h1>
            <h5
              style={{ color: "purple", fontFamily: "sans-serif", top: "0px" }}
              className="font-sub"
            >
              ~ User can convert any audio file or voice note into textual
              content quickly.
            </h5>
            <div className="line d-flex flex-Row justify-content-between align-items-center gap-2">
              {/* {!isRecording ? (
                <button className="btn blue" onClick={startListening}>
                  Start Listening
                </button>
              ) : (
                <button className="btn blue" onClick={stopListening}>
                  Stop Listening
                </button>
              )}
              {audio ? <audio src={audio} controls></audio> : null} */}

              <input
                id="fileInput"
                type="file"
                accept=".wav,.mp3,audio/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to MB
                  if (fileSizeInMB > 25) {
                    // File size exceeds 25MB
                    alert(
                      "File size exceeds 25MB. Please choose a smaller file."
                    );
                    e.target.value = null; // Clear the file input field
                  } else {
                    const audioUrl = URL.createObjectURL(file);
                    setAudio1(new Audio(audioUrl)); // Create new Audio object and set it to audio state
                    setIsError(false);
                  }
                }}
              />

              {isError && <p className="text-danger">* please select a file</p>}

              <div>
                <button className={`btn blue mb-2 `} onClick={updateSound}>
                  {isPlaying ? "Pause" : "Play"} Audio
                </button>
                <audio id="audio" className="audioBtn">
                  <source src={audio} className="custom-audio"></source>
                </audio>
              </div>
              <select
                value={selectedOption}
                onChange={(e) => handleOptionSelect(e.target.value)}
                className="form-select "
                style={{ width: "200px", marginRight: 30 }}
              >
                <option value="">Destination language </option>
                <option value="Marathi">Marathi</option>
                <option value="English">English</option>
                <option value="Kannada">Kannada</option>
                <option value="Tamil">Tamil</option>
                <option value="Hindi">Hindi</option>
                <option value="Urdu">Urdu </option>
                {/* <option value="more">More</option> */}
              </select>

              <button
                className={`btn blue mb-2  `}
                onClick={handleConvertButtonClick}
                disabled={isLoading}
              >
                {/* convert into text */}
                {isLoading ? (
                  <FontAwesomeIcon icon={faSync} spin />
                ) : (
                  "convert into text"
                )}
              </button>
            </div>
            <div>
              <textarea
                className="p-15 rounded"
                style={{
                  minHeight: "50vh",
                  width: "100%",
                  backgroundColor: "white",
                  border: "none",
                  outline: "none",
                  resize: "none",
                }}
                // value={textAreaValue + transcript}
                // onChange={(e) => setTextAreaValue(e.target.value)}

                value={textAreaValue + (transcript || "")}
                onChange={(e) => setTextAreaValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && transcript.length > 0) {
                    e.preventDefault(); // Prevent the default backspace behavior
                    resetTranscript(); // Reset the transcript if Backspace is pressed and there's content in the transcript
                  }
                }}
              >
                {true && <FontAwesomeIcon icon={faSync} spin />}
              </textarea>
            </div>

            <div className="line d-flex flex-Row justify-content-between align-items-center gap-2 ">
              <button className={"btn blue "} onClick={handleCopyText}>
                <FontAwesomeIcon icon={faCopy} />
              </button>
              {!isRecording ? (
                <button className="btn blue" onClick={startListening}>
                  Start Listening
                </button>
              ) : (
                <button className="btn blue" onClick={stopListening}>
                  Stop Listening
                </button>
              )}
              {audio ? (
                <audio src={audio} controls className="custom-audio"></audio>
              ) : null}
              <button className="btn clearbutton " onClick={clearText}>
                Clear Text
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3 offset" id="TextToSpeechRef">
          <TextControl />
        </div>
        <div className="mt-3 offset" id="SpeechToSpeechRef">
          <SpeechControl />
        </div>
        <div className="mt-3 offset" id="TextToTextRef">
          <TextTranslate />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default AudioControl;
