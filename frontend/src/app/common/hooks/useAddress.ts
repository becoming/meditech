import {useEffect, useState} from "react";
import {AddressVO, toAddress} from "../vo/address/AddressVO";
import {addressService} from "../AddressService";

export function useAddress(addressId?: string): [AddressVO | undefined, any | null] {
  let [address, setAddress] = useState<AddressVO>();
  let [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let sub = addressService.getById(addressId)
      .subscribe({
        next: value => {
          setAddress(toAddress(value))
          setError(null)
        },
        error: err => {
          setError("I cannot load this patient. What a bummer..")
        }
      });

    return () => {
      if (sub) sub.unsubscribe()
    }
  }, [addressId])

  return [address, error]
}
