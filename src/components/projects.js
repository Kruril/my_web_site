import type {ProjectsModel} from "../models/ProjectModel";
import {useTranslation} from "react-i18next";
import Project from "./project";

export default function Projects() {

    const {t,} = useTranslation("projects")

    const rawProjects: ProjectsModel = t("projects", { returnObjects: true})

    let projects = []

    for (const project of rawProjects) {
        projects.push(
            <Project project={project} key={project.name}/>
        )
    }

    return (
        <div className={"space-y-5"}>
            {projects}
        </div>
    )
}