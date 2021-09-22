import List from "./List";

export default function Course(props) {

    const course = {
        start: props.course.start,
        end: props.course.end,
        label: props.course.label,
        place: props.course.place,
        details: props.course.details
    }

    return (
        <div>
            <div className={"text-2xl text-g_beige-dark"}>
                {course.start} {course.start? "/": ""} {course.end} - {course.label}
            </div>
            <List label={course.place} elements={course.details}  Style={"text-g_beige-dark font-bold"}/>
        </div>
    )
}