import {useEffect, useState} from "react";
import {Subscription} from "rxjs";
import {PatientAddressVO, toAddress} from "../vo/PatientAddressVO";
import {addressService} from "../AddressService";

export function useAddress(patientId: string, addressId: string): [PatientAddressVO|undefined, any|null] {
  let [address, setAddress] = useState<PatientAddressVO>();
  let [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let id = patientId;
    let sub:Subscription;

    sub = addressService.getById(id).subscribe({
      next: value => {
        setAddress(toAddress(value))
        setError(null)
      },
      error: err => {
        setError("I cannot load this patient. What a bummer..")
        console.error(err)
      }
    });

    return () => {
      if (sub) sub.unsubscribe()
    }
  }, [patientId, addressId])

  return [address, error]
}
