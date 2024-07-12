import React, { useState } from "react";

function TextTranslate() {
  const [text, setText] = useState(""); // State to track the text content

  return (
    <div>
      <div
        className="h-100 rounded p-4 d-flex flex-column justify-content-center"
        style={{
          width: "100%",
          backgroundColor: "#d6dbf4",
        }}
      >
        <h1 className="tool_heading pt-2 mb-2 text-right font-title">
          Text To Text
        </h1>
        <h5 style={{ color: "purple", fontFamily: "sans-serif" }} className="font-sub">
          ~ User can convert any language text into any other language content
          quickly.
        </h5>

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
      </div>
    </div>
  );
}

export default TextTranslate;
