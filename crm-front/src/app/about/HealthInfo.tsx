import {Button, Card, Label} from "@blueprintjs/core";
import {httpHelper} from "../helpers/http/HttpHelper";
import {useEffect, useState} from "react";
import {Subscription} from "rxjs";

export function HealthInfo() {

  let url = `${process.env.REACT_APP_BACKEND_SCHEME}://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}${process.env.REACT_APP_BACKEND_INFO}`
  let [healthDetails, setHealthDetails] = useState<any>("");
  let [retry, setRetry] = useState(false);

  useEffect(() => {
    setHealthDetails("Loading...")

    let sub: Subscription = httpHelper.get(url).subscribe({
      next: value => setHealthDetails(JSON.stringify(value, undefined, 2)),
      error: err => setHealthDetails(err.message)
    })

    return () => sub && sub.unsubscribe()
  }, [retry, url])


  return <Card>
    <Label>Info actuator, <a target={"_blank"} href={url}>{url}</a></Label>
    <Button intent={"primary"} text={"Reload"}
            icon={"refresh"}
            onClick={() => setRetry(!retry)}/>
    <textarea className={"App-json-text App-json-text-337px"}
              contentEditable={false}
              defaultValue={healthDetails}/>
  </Card>
}
