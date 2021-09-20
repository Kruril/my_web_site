import Course from "./Course";

export default function Courses(props) {

    let courses = []

    for (const course of props.courses) {
        courses.push(
            <Course key={course.place} course={course}/>
        )
    }

    return (
        <div className={"space-y-5"}>
            <span className={"text-3xl text-g_blue-dark"}>{props.label}</span>
            {courses}
        </div>
    )
}