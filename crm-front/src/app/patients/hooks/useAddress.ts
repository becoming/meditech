import {useEffect, useState} from "react";
import {Subscription} from "rxjs";
import {PatientAddressVO, toAddress} from "../vo/PatientAddressVO";
import {addressService} from "../AddressService";

export function useAddress(addressId?: string): [PatientAddressVO|undefined, any|null] {
  let [address, setAddress] = useState<PatientAddressVO>();
  let [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let sub:Subscription;

    if(addressId) {
      sub = addressService.getById(addressId).subscribe({
        next: value => {
          setAddress(toAddress(value))
          setError(null)
        },
        error: err => {
          setError("I cannot load this patient. What a bummer..")
          console.error(err)
        }
      });
    } else {
      let str = `Patient ID or Address ID not provided, addressId: ${addressId}`
      setError(str)
      console.error(str)
    }

    return () => {
      if (sub) sub.unsubscribe()
    }
  }, [addressId])

  return [address, error]
}
