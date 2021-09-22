export default function List(props) {

    let elements = []
    for (const element of props.elements) {
        elements.push(
            <li key={element}>{element}</li>
        )
    }

    return (
        <div>
            <span className={"text-2xl " + props.Style}>{props.label}</span>
            <ul className={"list-inside list-disc ml-4 mt-2"}>
                {elements}
            </ul>
        </div>
    )
}