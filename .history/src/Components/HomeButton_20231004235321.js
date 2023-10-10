import { House} from "phosphor-react";
import { Link } from "react-router-dom";

export const HomeButton = () =>{
    return(
        <div className="bg-amber w-20 h-20 mx-auto rounded-full fixed bottom-10 md:bottom-3 right-3 flex items-center justify-center z-50" >
            <Link to="/">
            <House className="pl-auto" size={30}/>
            Home
            </Link>
        </div>
    );
}