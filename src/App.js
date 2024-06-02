import React from "react";
import "./App.css";
import Frequency from "./components/Frequency";
import Category from "./components/Category";
import FlowId from "./components/FlowId";

function App() {
  return (
    <div className="App">
      <Category />
      <FlowId />
      <Frequency />
    </div>
  );
}

export default App;
