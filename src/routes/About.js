import {useTranslation} from "react-i18next";
import {CommonLabels, AboutModel} from "../models/CommonModel";
import List from "../components/List";
import AboutSection from "../components/AboutSection";

export default function About() {
    const {t,} = useTranslation();
    const labels: CommonLabels = t("labels", {returnObjects: true})
    const about: AboutModel = t("about", {returnObjects: true,})

    let sections = []
    for (let content in about) {
        console.log({
            label: labels[content],
            content: about[content],
            type: typeof(about[content])
        })

        switch (typeof(about[content])) {
            case "string":
                sections.push(
                    <AboutSection key={labels[content]} label={labels[content]} content={<span className={"text-justify px-3 py-6 "}>{about[content]} </span>}/>
                )
                break
            case "object":
                if (Array.isArray(about[content])) {
                    sections.push(
                        <AboutSection key={labels[content]} label={labels[content]} content={<List elements={about[content]}/>} />
                    )
                }
                break
            default:
                break;

        }
    }

    return (
        <div >
            {/*<span*/}
            {/*    className={"text-3xl text-g_beige-dark font-bold border-b-4 border-g_beige-dark text-center min-h-12 h-auto"}>{labels.whoAmI}</span>*/}
            {/*<span className={"text-justify px-3 py-6 "}>{about.whoAmI} <Link to={"/cv"}*/}
            {/*                                                                 className={"text-g_blue-dark underline"}>CV {i18n.language === "fr" ? "ICI" : "HERE"}</Link> </span>*/}
            {/*<span*/}
            {/*    className={"border-b-4 border-g_beige-dark text-3xl text-g_beige-dark font-bold text-center h-auto min-h-12"}>{labels.technologies}</span>*/}

            {/*<List elements={about.technologies}/>*/}
            {sections}
        </div>
    )
}