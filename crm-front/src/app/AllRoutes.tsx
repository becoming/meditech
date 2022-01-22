import {Route, Routes} from "react-router-dom";
import {PatientsListingPage} from "./patients/pages/PatientsListingPage";
import {NewPatientPage} from "./patients/pages/NewPatientPage";
import {PatientProfilePage} from "./patients/pages/PatientProfilePage";
import {EditIdentityPage} from "./patients/pages/EditIdentityPage";
import {NewAddressPage} from "./patients/pages/NewAddressPage";
import {EditAddressPage} from "./patients/pages/EditAddressPage";
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
    <Route path="/patients/:patientId/identity/:identityId/edit" element={<EditIdentityPage />} />
    <Route path="/patients/:patientId/address/new" element={<NewAddressPage />} />
    <Route path="/patients/:patientId/address/edit" element={<EditAddressPage />} />

    <Route path="/procedures" element={<ProceduresPage/>} />
    <Route path="/doctors" element={<DoctorsPage/>} />

    <Route path="/about" element={<AboutPage/>} />
  </Routes>
}
