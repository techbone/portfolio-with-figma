import React from "react";
import MainScreen from "./components/MainScreen";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainScreen />
      <MainScreen />
    </div>
  );
};

export default App;
