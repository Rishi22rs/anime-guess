import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import AddCharacterDetail from "./pages/AddCharacterDetail";

const App = () => {
  return (
    <div className="App">
      <h1>Guess</h1>
      <AddCharacterDetail />
    </div>
  );
};

export default App;
