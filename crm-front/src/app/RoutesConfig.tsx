import {Route, Routes} from "react-router-dom";
import {PatientsListingPage} from "./patients/pages/PatientsListingPage";
import {PatientCreatePage} from "./patients/pages/PatientCreatePage";
import {PatientProfilePage} from "./patients/pages/PatientProfilePage";
import {PatientEditPage} from "./patients/pages/PatientEditPage";
import {AddressCreatePage} from "./patients/pages/AddressCreatePage";
import {ProceduresListingPage} from "./procedures/pages/ProceduresListingPage";
import {DoctorsListingPage} from "./doctors/page/DoctorsListingPage";
import {AboutPage} from "./about/AboutPage";
import React from "react";
import {AddressEditPage} from "./patients/pages/AddressEditPage";
import {ProcedureCreatePage} from "./procedures/pages/ProcedureCreatePage";
import {ProcedureEditPage} from "./procedures/pages/ProcedureEditPage";
import {ProceduresProfilePage} from "./procedures/pages/ProcedureProfilePage";
import {DoctorCreatePage} from "./doctors/page/DoctorCreatePage";
import {DoctorProfilePage} from "./doctors/page/DoctorProfilePage";
import {DoctorEditPage} from "./doctors/page/DoctorEditPage";
import {DoctorAddressCreatePage} from "./doctors/page/DoctorAddressCreatePage";

export function RoutesConfig() {
  return <Routes>
    <Route path="/" element={<PatientsListingPage/>}/>
    <Route path="/patients" element={<PatientsListingPage/>}/>
    <Route path="/patients/create" element={<PatientCreatePage/>}/>
    <Route path="/patients/:patientId" element={<PatientProfilePage/>}/>
    <Route path="/patients/:patientId/identity/:identityId/edit" element={<PatientEditPage/>}/>
    <Route path="/patients/:patientId/address/create" element={<AddressCreatePage/>}/>
    <Route path="/patients/:patientId/address/:addressId/edit" element={<AddressEditPage/>}/>

    <Route path="/procedures" element={<ProceduresListingPage/>}/>
    <Route path="/procedures/create" element={<ProcedureCreatePage/>}/>
    <Route path="/procedures/:procedureId/edit" element={<ProcedureEditPage/>}/>
    <Route path="/procedures/:procedureId" element={<ProceduresProfilePage/>}/>

    <Route path="/doctors" element={<DoctorsListingPage/>}/>
    <Route path="/doctors/create" element={<DoctorCreatePage/>}/>
    <Route path="/doctors/:doctorId" element={<DoctorProfilePage/>}/>
    <Route path="/doctors/:doctorId/address/create" element={<DoctorAddressCreatePage/>}/>
    <Route path="/doctors/:doctorId/identity/:identityId/edit" element={<DoctorEditPage/>}/>

    <Route path="/about" element={<AboutPage/>}/>
  </Routes>
}
