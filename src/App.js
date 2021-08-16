import React from "react";
import Box from "./components/Box"
import "../src/styles/global.css"
import './App.css';

let tempMin = -20
let tempMax = 40
let heartMin = 80
let heartMax = 180
let stepsMin = 0
let stepsMax = 50000

export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Heart : {heartMin}
            Temperature : {tempMin}
            Steps : {stepsMin}
          </p>

          {/* Water  */}
          <Box 
          icon="local_drink"
          color="#3A85FF"
          value={1.5}
          unit="L" />

          {/* Steps */}
          <Box icon="directions_walk"
          color="black"
          value={3000}
          unit="steps"/>

          {/* Heart */}
          <Box 
          icon="favorite"
          color="red"
          value={120}
          unit="bpm"/>

          {/* Temperature */}
          <Box 
          icon="wb_sunny"
          color="yellow"
          value={-10}
          unit="°C"
          />
        </div>
      </div>
    );
  }
}

export default App;
