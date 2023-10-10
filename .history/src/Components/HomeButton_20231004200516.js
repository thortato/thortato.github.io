import { House} from "phosphor-react";
import { Link } from "react-router-dom";

export const HomeButton = () =>{
    return(
        <div className="bg-amber w-20 h-20 mx-auto rounded-full fixed bottom-2 right-2 flex items-center justify-center z-50" >
            <Link to="/">
            <House className="ml-1" size={32}/>
            Home
            </Link>
        </div>
    );
}