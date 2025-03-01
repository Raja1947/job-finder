import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Approutes from "./routes/Approutes";

function App() {
  return (
    <BrowserRouter>
      <Approutes/>
    </BrowserRouter>
  );
}

export default App;
