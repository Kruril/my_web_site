export default function Course(props) {

    const course = {
        start: props.course.start,
        end: props.course.end,
        label: props.course.label,
        place: props.course.place,
        details: props.course.details
    }

    let details = []

    for (const detail of course.details) {
        details.push(<li key={detail}>{detail}</li>)
    }

    return (
        <div>
            <div className={"text-2xl text-g_beige-dark"}>
                {course.start} {course.start? "/": ""} {course.end} - {course.label}
            </div>
            <div className={"text-2xl text-g_beige-dark font-bold"}>
                {course.place}
            </div>
            <ul className={"list-disc list-inside ml-4"}>
                {details}
            </ul>
        </div>
    )
}