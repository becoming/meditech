import {KeyValue, Table} from "./Table";

export function About() {

  const env: KeyValue[] = [
    {key: "Name", value: process.env.REACT_APP_NAME},
    {key: "Version", value: process.env.REACT_APP_VERSION},
    {key: "Scheme", value: process.env.REACT_APP_BACKEND_SCHEME},
    {key: "Host", value: process.env.REACT_APP_BACKEND_HOST},
    {key: "Port", value: process.env.REACT_APP_BACKEND_PORT},
    {key: "Health URI", value: process.env.REACT_APP_BACKEND_HEALTH},
  ]

  return <div className={"App-page-container"}>
    <h1 className="bp4-heading">About</h1>
    <Table env={env} />
  </div>
}
