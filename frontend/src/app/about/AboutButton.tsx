import {Button, Classes} from "@blueprintjs/core";
import {useEffect, useState} from "react";
import {httpHelper} from "../common/helpers/http/HttpHelper";
import {IconName} from "@blueprintjs/icons";
import {Intent} from "@blueprintjs/core/lib/esm/common/intent";

export function AboutButton() {

  let [icon, setIcon] = useState<IconName>("info-sign")
  let [intent, setIntent] = useState<Intent>("none")
  let [text, setText] = useState<string>("About")

  useEffect(() => {
    let url = `${process.env.REACT_APP_BACKEND_SCHEME}://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}${process.env.REACT_APP_BACKEND_HEALTH}`

    const interval = setInterval(() => {
      httpHelper.get<String>(url)
        .subscribe({
          next: () => {
            setIcon("info-sign")
            setIntent("none")
            setText("About")
          },
          error: () => {
            setIcon("offline")
            setIntent("warning")
            setText("About (offline)")
          }
        })
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return <Button className={Classes.MINIMAL}
                 icon={icon} intent={intent}
                 text={text}/>
}
