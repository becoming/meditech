interface Props {
  dateTime: string
}

export function Created(props: Props) {

  let value = "[no-date-time]";
  let extraClass = "App-listing-unknown"

  if(props.dateTime) {
    value = props.dateTime
    extraClass = ""
  }

  return <span className={extraClass + " App-listing-created"} title={"Created on " + value}>{value.split(" ")[0]}</span>
}
