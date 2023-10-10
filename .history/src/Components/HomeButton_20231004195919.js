import { House} from "phosphor-react";
import { Link } from "react-router-dom";

export const HomeButton = () =>{
    return(
        <div className="bg-amber w-20 h-20 rounded-full fixed z-50" >
            <Link to="/">
            <House size={32} className="buttonAlign"/>
            Home
            </Link>
            BUTTON
        </div>
    );
}