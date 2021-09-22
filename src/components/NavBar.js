import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function NavBar() {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then();
    };
    return (
        <div
            className="z-50 sticky top-0 p-4 items-center bg-g_blue-dark bg-opacity-80 flex border-b-2 text-white"
        >
            <div className="flex-grow text-lg">
                <Link to={"/"}>
                    Charlier Guillaume
                </Link>
            </div>
            <div className="object-right">
                <Link to={"/about"} className={"text-lg hover:text-gray-300"}>
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
