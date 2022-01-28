import {Route, Routes} from "react-router-dom";
import {PatientsListingPage} from "./patients/pages/PatientsListingPage";
import {PatientCreatePage} from "./patients/pages/PatientCreatePage";
import {PatientProfilePage} from "./patients/pages/PatientProfilePage";
import {IdentityEditPage} from "./patients/pages/IdentityEditPage";
import {AddressCreatePage} from "./patients/pages/AddressCreatePage";
import {ProceduresPage} from "./procedures/pages/ProceduresPage";
import {DoctorsPage} from "./doctors/DoctorsPage";
import {AboutPage} from "./about/AboutPage";
import React from "react";
import {AddressEditPage} from "./patients/pages/AddressEditPage";
import {ProcedureCreatePage} from "./procedures/pages/ProcedureCreatePage";
import {ProcedureEditPage} from "./procedures/pages/ProcedureEditPage";

export function AllRoutes() {
  return <Routes>
    <Route path="/" element={<PatientsListingPage/>} />
    <Route path="/patients" element={<PatientsListingPage/>} />
    <Route path="/patients/create" element={<PatientCreatePage/>} />
    <Route path="/patients/:patientId" element={<PatientProfilePage/>} />
    <Route path="/patients/:patientId/identity/:identityId/edit" element={<IdentityEditPage />} />
    <Route path="/patients/:patientId/address/create" element={<AddressCreatePage />} />
    <Route path="/patients/:patientId/address/:addressId/edit" element={<AddressEditPage />} />

    <Route path="/procedures" element={<ProceduresPage/>} />
    <Route path="/procedures/create" element={<ProcedureCreatePage/>} />
    <Route path="/procedures/:procedureId/edit" element={<ProcedureEditPage/>} />

    <Route path="/doctors" element={<DoctorsPage/>} />

    <Route path="/about" element={<AboutPage/>} />
  </Routes>
}
