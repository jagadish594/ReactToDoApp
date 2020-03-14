import React from "react";
import "./styles.css";
import ToDo from "./components/ToDo";

export default function App() {
  return (
    <div className="App">
      <h1>To Do list</h1>
      <ToDo />
    </div>
  );
}
