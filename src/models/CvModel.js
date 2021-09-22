export let Address: {
    street: String,
    number: Number,
    postalCode: Number,
    town: String,
}

export let PersonalInfo: {
    phone: String,
    address: Address,
    email: String,
    linkedIn: String,
    drivingLicence: String,
    born: String,
}

export let Labels: {
    qualities: String,
    job: String,
    faults: String,
    hobbies: String,
    languages: String,
    experiences: String,
    formations: String,
    itSkills: String,
}

export let Course: {
    start: String,
    end: String,
    label: String,
    place: String,
    details: [String]
}

export let CvModel: {
    personalInfo: PersonalInfo,
    labels: Labels,
    itSkills: [String],
    qualities: [String],
    faults: [String],
    hobbies: [String],
    languages: [String],
    experiences: [Course],
    formations: [Course],
}

