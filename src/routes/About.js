import {useTranslation} from "react-i18next";

export default function About() {
    const {t, } = useTranslation();
    return (
        <div>
            Salut c'est l'{t('about.label')}
        </div>
    )
}