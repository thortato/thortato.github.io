import Robot from './../Assets/Image/Hero_Illustration/Illustration_Robot.png';
import Effect from './../Assets/Image/Hero_Illustration/Illustration_Effect.png';
import Bomb from './../Assets/Image/Hero_Illustration/Illustration_Bomb.png';
import {
  Animate,
  initTE,
} from "tw-elements";

initTE({ Animate });

export default function HeroImage (){

    
    return(
        <div className='relative w-[350px] md:w-[750px] right-5 md:left-10'
        data-te-animation-init
        data-te-animation-start="onScroll"
        data-te-animation="[slide-right_1s_ease-in-out]">
            <img src={Bomb} className="absolute z-20"alt="Bomb"/>
            <img src={Robot} className="absolute z-10" alt="Robot" />
            <img src={Effect} className="absolute z-0" alt="Effect"/>
        </div>
    );
}
