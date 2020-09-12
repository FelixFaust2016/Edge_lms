import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../App.css";

import Views from "./Views";
import Navigation from "./Navigation";

function App() {
  return (
    <div>
      <Router>
        <div style={{ position: "relative" }}>
          <Navigation />
          <Views />
        </div>
      </Router>
    </div>
  );
}

export default App;
