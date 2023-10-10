import { House} from "phosphor-react";
import { Link } from "react-router-dom";

export const HomeButton = () =>{
    return(
        <div className="bg-amber w-20 h-20 mx-auto rounded-full fixed bottom-0 right-0 z-50" >
            <div className="bg-amber w-20 h-20 mx-auto rounded-full flex items-center justify-center">
          <Link to="/">
            <House size={32} className="buttonAlign" />
            <span className="ml-2">Home</span>
          </Link>
        </div>
        </div>
    );
}