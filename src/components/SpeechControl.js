import React, { useState, useRef } from "react";

function SpeechControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isError, setIsError] = useState(false);
  const audio = useRef(null);

  let updateSound = () => {
    if (audio?.current !== null) {
      if (isPlaying) {
        audio?.current.pause();
      } else {
        audio?.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setIsError(true);
    }
  };

  return (
    <div>
      <div>
        <div
          className="rounded p-4 d-flex flex-column justify-content-center"
          style={{
            width: "100%",
            backgroundColor: "#d6dbf4",
          }}
        >
          <h1 className="tool_heading pt-2 mb-2 text-right font-title">
            Speech to Speech
          </h1>
          <h5 style={{ color: "purple", fontFamily: "sans-serif", top: "0px" }}
          className="font-sub">
            ~ User can convert any language audio file or voice note into any
            other language audio file
          </h5>
          <div className="d-flex flex-Row flex-wrap justify-content-between align-items-center gap-3">
            

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center ">
              <div className="d-flex flex-row">
                <input
                  type="file"
                  accept=".mp3,audio/*"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      audio.current = new Audio(
                        URL.createObjectURL(e.target.files[0])
                      );
                      setIsError(false);
                    }
                  }}
                />
                {isError && (
                  <p className="text-danger">* please select a file</p>
                )}
              </div>
              <div className="mb-4">
                <button className={`btn blue mt-4`} onClick={updateSound}>
                  {isPlaying ? "Pause" : "Play"} Audio
                </button>
                <audio id="audio" className="audioBtn">
                  <source src={audio}></source>
                </audio>
              </div>
            </div>
          </div>

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
          ></textarea>
        </div>
      </div>
    </div>
  );
}
export default SpeechControl;
