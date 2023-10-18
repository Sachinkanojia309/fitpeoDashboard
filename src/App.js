import React from "react";
import Sidebar from "../src/component/sidebar"; // Import your Sidebar component
import ContentArea from "../src/component/ContentArea"; // Import your ContentArea component
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Sidebar />
        <ContentArea />
      </div>
    </div>
  );
}

export default App;
