import { House} from "phosphor-react";
import Link from "phosphor-react";

export const HomeButton = () =>{
    return(
        <div className="bg-amber w-20 h-20 rounded-full" >
            <House size={32} className="buttonAlign"/>
        </div>
    );
}