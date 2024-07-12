// import logo from './logo.svg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import AudioControl from "./components/AudioControl";
import "./global-styles.css";


// import AudioRecorder from "./AudioRecorder";
function App() {
  return (
    
    <div id="top">
      <Header />
      <div style={{ marginTop: "100px" }}>
        <AudioControl />
      </div>
    </div>
  );
}
export default App;
