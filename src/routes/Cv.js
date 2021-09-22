import {useTranslation} from "react-i18next";
import {mdiCake, mdiCarOutline, mdiEmailOutline, mdiLink, mdiMapMarkerOutline, mdiPhoneOutline} from "@mdi/js";
import PersonalInfo from "../components/Personal-info";
import Courses from "../components/Courses";
import List from "../components/List";
import Error from "./Error";

export default function Cv() {

    const {t, i18n} = useTranslation(['cv']);

    let cv = t("cv", {returnObjects: true})
    if (cv === "cv") {
        return (
            <Error />
        )
    }

    let age = 0
    if (cv.personal_info.born !== undefined) {
        age = Math.floor((new Date() - new Date(cv.personal_info.born).getTime()) / 3.15576e+10)
    }

    return (
        <div className="flex flex-col items-center p-10">
            <div className={"grid grid-cols-2 grid-cols-2-cv m-auto gap-2"}>
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
                <div className={"space-y-2"}>
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

                    <div className={"space-y-5"}>
                        <List label={cv.me.qualities_label} elements={cv.me.qualities} Style={"text-g_blue-dark"}/>
                        <List label={cv.me.faults_label} elements={cv.me.faults} Style={"text-g_blue-dark"}/>
                        <List label={cv.me.languages_label} elements={cv.me.languages} Style={"text-g_blue-dark"}/>
                        <List label={cv.me.hobbies_label} elements={cv.me.hobbies} Style={"text-g_blue-dark"}/>
                    </div>
                </div>
                <div className={"space-y-9"}>
                    <Courses courses={cv.experiences} label={cv.experiences_label}/>
                    <Courses courses={cv.formations} label={cv.formations_label}/>
                    <List label={cv.it_skills_label} elements={cv.it_skills} Style={"text-3xl text-g_blue-dark"} />
                </div>
            </div>
        </div>
    );
}