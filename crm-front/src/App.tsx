import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./components/about/About";
import {Doctors} from "./components/Doctors";
import {Menu} from "./components/Menu";
import {Procedures} from "./components/Procedures";
import {Patients} from "./components/Patients";

export function App() {
  return (
    <div className="bp4-dark">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/patients" element={<Patients/>} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/procedures" element={<Procedures/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
