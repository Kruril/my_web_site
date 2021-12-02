import Icon from "@mdi/react";
import {mdiClose, mdiFileDownload, mdiMenu} from "@mdi/js";
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {CvModel} from "../models/CvModel";
import GenerateCv from "../service/CvGenerator";

export default function Burger() {

    //WIP

    const [open, setOpen] = useState(false)

    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then();
    };
    let print

    if (useLocation().pathname === "/cv") {
        let cv: CvModel = t("cv", {returnObjects: true, ns: "cv"})
        print = (
            <button onClick={() => GenerateCv(cv, i18n.language)}
                    className={"hover:text-gray-300 "}>
                <Icon path={mdiFileDownload} size={1} className={"mr-2"}/>
            </button>
        )
    }

    return (
        <>
            <div className={"right-3 top-3 fixed z-20 text-lg"}>
                <div onClick={() => setOpen(!open)} className={!open ? "sm:hidden cursor-pointer" : "bg-g_blue-deepDark"}>
                    <Icon path={open ? mdiClose : mdiMenu} size={1} className={""}/>
                </div>
                <ul className={open ? "right-0 bg-g_blue-deepDark p-10 sm:hidden" : "hidden"}>
                    <li onClick={() => setOpen(!open)}> {print} </li>
                    <li>
                        <Link to={"/cv"} className={"hover:text-gray-300"} onClick={() => setOpen(!open)}>
                            Cv
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"} className={"hover:text-gray-300"} onClick={() => setOpen(!open)}>
                            {t('labels.about')}
                        </Link>
                    </li>
                    <li>
                        <button type="button" onClick={() => changeLanguage('fr') && setOpen(!open)}
                                className={"hover:text-gray-300"}>
                            fr
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={() => changeLanguage('en') && setOpen(!open)}
                                className={"hover:text-gray-300"}>
                            en
                        </button>
                    </li>
                </ul>
            </div>
            <div className={"text-center hidden sm:inline"}>
                <div className={"space-x-2 inline"}>
                    {print}
                    <Link to={"/cv"} className={"hover:text-gray-300"}>
                        Cv
                    </Link>
                    <Link to={"/about"} className={"hover:text-gray-300"}>
                        {t('labels.about')}
                    </Link>
                </div>

                <div className={"inline"}>
                    <button type="button" onClick={() => changeLanguage('fr')}
                            className={"flex-grow w-8 hover:text-gray-300"}>
                        fr
                    </button>
                    <button type="button" onClick={() => changeLanguage('en')}
                            className={"flex-grow w-8 hover:text-gray-300"}>
                        en
                    </button>
                </div>
            </div>
        </>
    )
}