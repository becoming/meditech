import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./components/about";
import {Doctors} from "./components/doctors";
import {Menu} from "./components/menu";
import {Procedures} from "./components/procedures";
import {Patients} from "./components/patients";

export function App() {
  return (
    <div className="bp3-dark">
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
