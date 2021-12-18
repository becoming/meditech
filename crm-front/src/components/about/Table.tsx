export interface KeyValue {
    key: string,
    value: string | number | undefined,
}

interface Props {
    env: KeyValue[]
}

export function Table(props: Props) {

    let trs:JSX.Element[] = [];
    props.env.forEach(i => {
        trs.push(<tr>
            <td>{i.key}</td>
            <td>{i.value}</td>
        </tr>)
    })

    return <table className="bp4-html-table .modifier">
        <thead>
            <tr>
                <th>Variable</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            {trs}
        </tbody>
    </table>
}
