import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <div id="App">
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
