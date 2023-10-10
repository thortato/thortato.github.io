import { House} from "phosphor-react";
import { Link } from "react-router-dom";

export const HomeButton = () =>{
    return(
        <div className="bg-amber w-20 h-20 rounded-full absolute" >
            <Link to="/">
            <House size={32} className="buttonAlign"/>
            </Link>
            
        </div>
    );
}