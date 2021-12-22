import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./components/about/About";
import {Doctors} from "./components/doctors/Doctors";
import {Menu} from "./components/menu/Menu";
import {Procedures} from "./components/procedures/Procedures";
import {PatientsListing} from "./components/patients/pages/PatientsListing";
import {PatientProfile} from "./components/patients/pages/PatientProfile";
import {NewPatient} from "./components/patients/pages/NewPatient";
import {EditAddress} from "./components/patients/pages/EditAddress";
import {EditIdentity} from "./components/patients/pages/EditIdentity";
import {NewAddress} from "./components/patients/pages/NewAddress";

export function App() {
  return (
    <div className="bp4-dark">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/about" element={<About/>} />

          <Route path="/patients" element={<PatientsListing/>} />
          <Route path="/patients/new" element={<NewPatient/>} />
          <Route path="/patients/:id" element={<PatientProfile/>} />
          <Route path="/patients/:patientId/identity/:identityId/edit" element={<EditIdentity />} />
          <Route path="/patients/:patientId/address/new" element={<NewAddress />} />
          <Route path="/patients/:patientId/address/:addressId/edit" element={<EditAddress />} />

          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/procedures" element={<Procedures/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
