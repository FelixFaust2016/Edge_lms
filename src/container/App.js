import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../App.css";

import Views from "./Views";
import Navigation from "./Navigation";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Views />
      </Router>
    </div>
  );
}

export default App;
