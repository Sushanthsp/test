import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route key={1} path={"/test"} exact={true} element={<Test />} />
          <Route key={2} path={"/home"} exact={true} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
