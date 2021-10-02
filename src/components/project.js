import type {ProjectModel} from "../models/ProjectModel";
import List from "./List";

export default function Project(props) {

    let project: ProjectModel = props.project

    let color
    if (project.state === "Terminé" || project.state === "Finish") {
        color = "text-red-200 bg-red-600"
    } else {
        color = "text-green-200 bg-green-600"
    }

    return (
        <div className={"border-2 rounded-2xl p-6 shadow-lg space-y-2"}>
            <div className={"flex items-center border-b-4 border-g_beige-dark"}>
                <span className={"text-2xl text-g_beige-dark font-bold flex-grow"}><a href={project.url} target={"_blank"} rel="noreferrer">{project.name}</a></span>
                <span className={color + " rounded object-right text-center px-2"}>{project.state}</span>
            </div>
            <img src={process.env.PUBLIC_URL + project.image} alt={project.name} className={"max-w-img-custom w-full max-h-img-custom h-auto block m-auto"}/>
            <span>
                {project.description}
            </span>
            <List elements={project.technologies} />
        </div>
    )
}