import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Menu} from "./app/menu/Menu";
import {AllRoutes} from "./app/AllRoutes";

export function App() {
  return (
    <div className="bp4-dark">
      <BrowserRouter>
        <Menu/>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
