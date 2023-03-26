import React from "react";
import Weather from './Weather.js';

import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <div className="footer">
      <a href="https://github.com/NinaMaksymenko/First-project"
        >Open-source code</a
      >
      by Maksymenko Nina
      </div>
    </div>
  );
}

export default App;
