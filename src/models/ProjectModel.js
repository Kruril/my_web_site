export interface ProjectModel {
    name: string,
    url: string,
    description: string,
    image: string,
    state: boolean,
    technologies: [string],
}

export type ProjectsModel = [ProjectModel]