import { useState } from "react";
import "./App.css";
import { Homepage } from "./pages";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </>
  );
}

export default App;
