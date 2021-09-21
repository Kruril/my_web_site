import {useTranslation} from "react-i18next";
import {mdiCake, mdiCarOutline, mdiEmailOutline, mdiLink, mdiMapMarkerOutline, mdiPhoneOutline} from "@mdi/js";
import PersonalInfo from "../components/Personal-info";
import Courses from "../components/Courses";

export default function Cv() {

    const {t, i18n} = useTranslation(['cv']);

    let cv = t("cv", {returnObjects: true})
    console.log(cv)

    let age = 0
    if (cv.personal_info.born !== undefined) {
        age = Math.floor((new Date() - new Date(cv.personal_info.born).getTime()) / 3.15576e+10)
    }

    let qualities = []

    for (const quality of cv.me.qualities) {
        qualities.push(
            <li key={quality}>{quality}</li>
        )
    }

    let faults = []

    for (const fault of cv.me.faults) {
        faults.push(
            <li key={fault}>{fault}</li>
        )
    }

    let languages = []

    for (const language of cv.me.languages) {
        languages.push(
            <li key={language}>{language}</li>
        )
    }

    let hobbies = []

    for (const hobby of cv.me.hobbies) {
        hobbies.push(
            <li key={hobby}>{hobby}</li>
        )
    }

    return (
        <div className="flex flex-col items-center p-10">
            <div className={"grid grid-cols-2 gap-4 grid-cols-2-cv"}>
                <img src={process.env.PUBLIC_URL + "/assets/images/me.png"} alt={""} width={"45%"}
                     className={"block m-auto"}/>
                <div className={"space-y-5 "}>
                    <div className={"text-5xl"}>
                        Charlier Guillaume
                    </div>
                    <div className={"text-3xl text-g_blue-dark"}>
                        {cv.label}
                    </div>
                </div>
                <div>
                    <PersonalInfo
                        text={cv.personal_info.address.number + ", " + cv.personal_info.address.street + " "
                        + cv.personal_info.address.postal_code + " " + cv.personal_info.address.town}
                        icon={mdiMapMarkerOutline}
                    />
                    <PersonalInfo
                        text={cv.personal_info.phone}
                        icon={mdiPhoneOutline}
                    />
                    <PersonalInfo
                        text={cv.personal_info.email}
                        icon={mdiEmailOutline}
                    />
                    <PersonalInfo
                        text={cv.personal_info.linkedIn}
                        icon={mdiLink}
                        rotate={-45}
                    />
                    <PersonalInfo
                        text={cv.personal_info.driving_licence}
                        icon={mdiCarOutline}
                    />
                    <PersonalInfo
                        text={age + (i18n.language === "fr"? " ans": " years")}
                        icon={mdiCake}
                    />

                    <div className={"text-2xl text-g_blue-dark mt-6"}>{cv.me.qualities_label}</div>
                    <ul className={"list-inside list-disc ml-2 mt-2"}>
                        {qualities}
                    </ul>

                    <div className={"text-2xl text-g_blue-dark mt-6"}>{cv.me.faults_label}</div>
                    <ul className={"list-inside list-disc mt-2 ml-2"}>
                        {faults}
                    </ul>

                    <div className={"text-2xl text-g_blue-dark mt-6"}>{cv.me.languages_label}</div>
                    <ul className={"list-inside list-disc ml-2 mt-2"}>
                        {languages}
                    </ul>
                    <div className={"text-2xl text-g_blue-dark mt-6"}>{cv.me.hobbies_label}</div>
                    <ul className={"list-inside list-disc ml-2 mt-2"}>
                        {hobbies}
                    </ul>
                </div>
                <div className={"space-y-9"}>
                    <Courses courses={cv.experiences} label={cv.experiences_label}/>
                    <Courses courses={cv.formations} label={cv.formations_label}/>
                </div>
            </div>
        </div>
    );
}