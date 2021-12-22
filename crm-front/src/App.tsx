import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutPage} from "./components/about/AboutPage";
import {Doctors} from "./components/doctors/Doctors";
import {Menu} from "./components/menu/Menu";
import {ProceduresPage} from "./components/procedures/ProceduresPage";
import {PatientsListingPage} from "./components/patients/pages/PatientsListingPage";
import {PatientProfilePage} from "./components/patients/pages/PatientProfilePage";
import {NewPatientPage} from "./components/patients/pages/NewPatientPage";
import {EditAddressPage} from "./components/patients/pages/EditAddressPage";
import {EditIdentityPage} from "./components/patients/pages/EditIdentityPage";
import {NewAddressPage} from "./components/patients/pages/NewAddressPage";

export function App() {
  return (
    <div className="bp4-dark">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/about" element={<AboutPage/>} />

          <Route path="/patients" element={<PatientsListingPage/>} />
          <Route path="/patients/new" element={<NewPatientPage/>} />
          <Route path="/patients/:id" element={<PatientProfilePage/>} />
          <Route path="/patients/:patientId/identity/:identityId/edit" element={<EditIdentityPage />} />
          <Route path="/patients/:patientId/address/new" element={<NewAddressPage />} />
          <Route path="/patients/:patientId/address/:addressId/edit" element={<EditAddressPage />} />

          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/procedures" element={<ProceduresPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
