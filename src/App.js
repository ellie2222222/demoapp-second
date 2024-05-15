import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Player from "./components/Player";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
