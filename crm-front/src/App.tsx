import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Menu} from "./app/menu/Menu";
import {RoutesConfig} from "./app/RoutesConfig";

export function App() {
  return (
    <div className="bp4-dark">
      <BrowserRouter>
        <Menu/>
        <RoutesConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
