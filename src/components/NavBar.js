import {Link} from "react-router-dom";
import Burger from "./Burger";

export default function NavBar() {



    return (
        <div
            className="z-50 sticky top-0 items-center p-4 bg-g_blue-dark bg-opacity-80 flex border-b-2 text-white text-lg"
        >
            <div className="flex-grow">
                <Link to={"/home"}>
                    Charlier Guillaume
                </Link>
            </div>
            <Burger />
        </div>
    );
}
