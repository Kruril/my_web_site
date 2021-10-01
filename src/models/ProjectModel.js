export interface ProjectModel {
    name: string,
    url: string,
    description: string,
    image: string,
    state: string,
    technologies: [string],
}

export type ProjectsModel = [ProjectModel]