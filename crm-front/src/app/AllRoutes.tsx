import {Route, Routes} from "react-router-dom";
import {PatientsListingPage} from "./patients/pages/PatientsListingPage";
import {NewPatientPage} from "./patients/pages/NewPatientPage";
import {PatientProfilePage} from "./patients/pages/PatientProfilePage";
import {IdentityEditPage} from "./patients/pages/IdentityEditPage";
import {AddressEditPage} from "./patients/pages/AddressEditPage";
import {ProceduresPage} from "./procedures/ProceduresPage";
import {DoctorsPage} from "./doctors/DoctorsPage";
import {AboutPage} from "./about/AboutPage";
import React from "react";

export function AllRoutes() {
  return <Routes>
    <Route path="/" element={<PatientsListingPage/>} />
    <Route path="/patients" element={<PatientsListingPage/>} />
    <Route path="/patients/new" element={<NewPatientPage/>} />
    <Route path="/patients/:patientId" element={<PatientProfilePage/>} />
    <Route path="/patients/:patientId/identity/:identityId/edit" element={<IdentityEditPage />} />
    <Route path="/patients/:patientId/address/new" element={<AddressEditPage />} />
    <Route path="/patients/:patientId/address/:addressId/edit" element={<AddressEditPage />} />
    <Route path="/patients/:patientId/address/edit" element={<AddressEditPage />} />

    <Route path="/procedures" element={<ProceduresPage/>} />
    <Route path="/doctors" element={<DoctorsPage/>} />

    <Route path="/about" element={<AboutPage/>} />
  </Routes>
}
