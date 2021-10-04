import {useTranslation} from "react-i18next";
import {mdiCake, mdiCarOutline, mdiEmailOutline, mdiLink, mdiMapMarkerOutline, mdiPhoneOutline} from "@mdi/js";
import PersonalInfo from "../components/Personal-info";
import Courses from "../components/Courses";
import List from "../components/List";
import Error from "./Error";
import {CvModel} from "../models/CvModel";


export default function Cv() {

    const {t, i18n} = useTranslation(['cv']);

    let cv: CvModel = t("cv", {returnObjects: true})

    if (cv === undefined) {
        return (
            <Error/>
        )
    }

    let age = 0
    if (cv.personalInfo.born !== undefined) {
        age = Math.floor((new Date() - new Date(cv.personalInfo.born).getTime()) / 3.15576e+10)
    }

    return (
        <div className="max-w-5xl items-center p-10 m-auto flex-grow">
            <div className={"grid sm:grid-cols-2 gap-2 w-auto h-auto grid-cols-1"}>
                <img src={process.env.PUBLIC_URL + "/assets/images/me.png"} alt={"me"}
                     className={"max-w-me w-full h-auto block m-auto"}/>
                <div className={"space-y-5 my-auto"}>
                    <div className={"text-5xl"}>
                        Charlier Guillaume
                    </div>
                    <div className={"text-3xl text-g_blue-dark"}>
                        {cv.labels.job}
                    </div>
                </div>
                <div className={"space-y-2 mx-auto"}>
                    <PersonalInfo
                        text={cv.personalInfo.address.number + ", " + cv.personalInfo.address.street + " "
                        + cv.personalInfo.address.postalCode + " " + cv.personalInfo.address.town}
                        icon={mdiMapMarkerOutline}
                    />
                    <PersonalInfo
                        text={cv.personalInfo.phone}
                        icon={mdiPhoneOutline}
                    />
                    <PersonalInfo
                        text={cv.personalInfo.email}
                        icon={mdiEmailOutline}
                    />
                    <PersonalInfo
                        text={cv.personalInfo.linkedIn}
                        icon={mdiLink}
                        rotate={-45}
                    />
                    <PersonalInfo
                        text={cv.personalInfo.drivingLicence}
                        icon={mdiCarOutline}
                    />
                    <PersonalInfo
                        text={age + (i18n.language === "fr" ? " ans" : " years")}
                        icon={mdiCake}
                    />

                    <div className={"space-y-5"}>
                        <List label={cv.labels.qualities} elements={cv.qualities} Style={"text-g_blue-dark"}/>
                        <List label={cv.labels.faults} elements={cv.faults} Style={"text-g_blue-dark"}/>
                        <List label={cv.labels.languages} elements={cv.languages} Style={"text-g_blue-dark"}/>
                        <List label={cv.labels.hobbies} elements={cv.hobbies} Style={"text-g_blue-dark"}/>
                    </div>
                </div>
                <div className={"space-y-9"}>
                    <Courses courses={cv.experiences} label={cv.labels.experiences}/>
                    <Courses courses={cv.formations} label={cv.labels.formations}/>
                    <List label={cv.labels.itSkills} elements={cv.itSkills} Style={"text-3xl text-g_blue-dark"}/>
                </div>
            </div>
        </div>
    );
}