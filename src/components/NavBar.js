import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import GenerateCv from "../service/CvGenerator";
import {CvModel} from "../models/CvModel";
import Icon from "@mdi/react";
import {
    mdiFileDownload,
} from "@mdi/js";

export default function NavBar() {

    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then();
    };
    let print

    if (useLocation().pathname === "/cv") {
        let cv: CvModel = t("cv", {returnObjects: true, ns: "cv"})
        print = (
            <button onClick={() => GenerateCv(cv, i18n.language)}
                    className={"hover:text-gray-300"}>
                <Icon path={mdiFileDownload} size={1} className={"mr-2"}/>
            </button>
        )
    }

    return (
        <div
            className="sticky top-0 p-4 items-center bg-g_blue-dark bg-opacity-80 flex border-b-2 text-white"
        >
            <div className="flex-grow text-lg">
                <Link to={"/"}>
                    Charlier Guillaume
                </Link>
            </div>
            <div className="object-right space-x-2">
                {print}
                <Link to={"/about"} className={"text-lg hover:text-gray-300 "}>
                    {t('labels.about')}
                </Link>

                <button type="button" onClick={() => changeLanguage('fr')}
                        className={"flex-grow text-lg w-8 hover:text-gray-300"}>
                    fr
                </button>
                <button type="button" onClick={() => changeLanguage('en')}
                        className={"flex-grow text-lg w-8 hover:text-gray-300"}>
                    en
                </button>

            </div>
        </div>
    );
}
