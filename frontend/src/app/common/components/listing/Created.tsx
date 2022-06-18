interface Props {
  altPrefix?: string
  dateTime: string
}

export function Created(props: Props) {

  let value = "[no-date-time]";
  let extraClass = "App-listing-unknown"
  let prefix = "Create on"

  if (props.altPrefix) {
    prefix = props.altPrefix
  }

  if (props.dateTime) {
    value = props.dateTime
    extraClass = ""
  }

  return <span className={extraClass + " App-listing-created"} title={`${prefix} ${value}`}>{value}</span>
}
