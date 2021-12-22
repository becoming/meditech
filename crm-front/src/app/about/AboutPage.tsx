import {KeyValue, Table} from "./Table";
import {PageTitle} from "../PageTitle";
import {Card} from "@blueprintjs/core";

export function AboutPage() {

  const env: KeyValue[] = [
    {key: "Name", value: process.env.REACT_APP_NAME},
    {key: "Version", value: process.env.REACT_APP_VERSION},
    {key: "Scheme", value: process.env.REACT_APP_BACKEND_SCHEME},
    {key: "Host", value: process.env.REACT_APP_BACKEND_HOST},
    {key: "Port", value: process.env.REACT_APP_BACKEND_PORT},
    {key: "API Prefix", value: process.env.REACT_APP_BACKEND_API_PREFIX},
    {key: "Health URI", value: process.env.REACT_APP_BACKEND_HEALTH},
  ]

  return <div className={"App-page-container"}>
    <PageTitle value={"About"} />
    <Card className={"App-about-card-table"}>
      <Table env={env} />
    </Card>
  </div>
}
