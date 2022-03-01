import "./App.css";
import React, { useRef, useState, useEffect } from "react";

import Get from "./components/Get";

function App() {
  return (
    <div className="container">
      <div className="desktop-container">
        <Get />
      </div>
    </div>
  );
}

export default App;
