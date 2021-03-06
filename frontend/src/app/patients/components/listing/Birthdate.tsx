interface Props {
  date?: string
}

export function Birthdate(props: Props) {

  let extraClass = props.date ? "" : "App-listing-unknown"
  let value = props.date || "[no-birthdate]"

  return <span className={extraClass + " App-listing-birthdate"} title={value}>{value}</span>
}
