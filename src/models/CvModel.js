export interface Address {
    street: string,
    number: number,
    postalCode: number,
    town: string,
}

export interface PersonalInfo {
    phone: string,
    address: Address,
    email: string,
    linkedIn: string,
    drivingLicence: string,
    born: string,
    github: string
}

export interface Labels {
    qualities: string,
    job: string,
    faults: string,
    hobbies: string,
    languages: string,
    experiences: string,
    formations: string,
    itSkills: string,
}

export interface Course {
    start: string,
    end: string,
    label: string,
    place: string,
    details: [string]
}

export interface CvModel {
    personalInfo: PersonalInfo,
    labels: Labels,
    itSkills: [string],
    qualities: [string],
    faults: [string],
    hobbies: [string],
    languages: [string],
    experiences: [Course],
    formations: [Course],
}

