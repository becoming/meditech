import {useEffect, useState} from "react";
import {UL} from "@blueprintjs/core";
import {DoctorVO, toDoctors} from "../vo/DoctorVO";
import {doctorService} from "../DoctorsService";
import {DoctorListItem} from "../components/DoctorListItem";
import {DoctorsListingToolbar} from "../components/DoctorsListingToolbar";

export function DoctorsListingPage() {
  let [doctors, setDoctors] = useState<DoctorVO[]>([]);

  useEffect(() => {
    doctorService.findAll()
      .subscribe({
        next: d => setDoctors(toDoctors(d))
      });
  }, [])

  let list: JSX.Element[] = []
  for (const i of doctors) {
    list.push(<DoctorListItem key={i.id} doctor={i}/>);
  }

  return <div className={"App-page-container container"}>
    <div className={"row"}>
      <div className={"col-sm-12"}>
        <DoctorsListingToolbar/>
      </div>
    </div>

    <div className={"App-page-content"}>
      <div className={"row"}>
        <div className={"col-sm-12"}>
          <UL className={"App-doctors-ul"}>
            {list}
          </UL>
        </div>
      </div>
    </div>

  </div>
}
