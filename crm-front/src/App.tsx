import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@blueprintjs/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button intent="success" text="button content"/>
      </header>
    </div>
  );
}

export default App;
