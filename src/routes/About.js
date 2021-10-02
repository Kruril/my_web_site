import {useTranslation} from "react-i18next";
import {CommonLabels, AboutModel} from "../models/CommonModel";
import List from "../components/List";
import {Link} from "react-router-dom";

export default function About() {
    const {t, i18n} = useTranslation();
    const labels: CommonLabels = t("labels", {returnObjects: true})
    const about: AboutModel = t("about", {returnObjects: true,})

    return (
        <div className={"flex flex-col mx-auto p-10 max-w-3xl"}>
            <span
                className={"text-3xl text-g_beige-dark font-bold border-b-4 border-g_beige-dark text-center min-h-12 h-auto"}>{labels.whoAmI}</span>
            <span className={"text-justify px-3 py-6 "}>{about.whoAmI} <Link to={"/cv"}
                                                                             className={"text-g_blue-dark underline"}>CV {i18n.language === "fr" ? "ICI" : "HERE"}</Link> </span>
            <span
                className={"border-b-4 border-g_beige-dark text-3xl text-g_beige-dark font-bold text-center h-auto min-h-12"}>{labels.technologies}</span>

            <List elements={about.technologies}/>

        </div>
    )
}