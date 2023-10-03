import Robot from './../Assets/Image/Hero_Illustration/Illustration_Robot.png';
import Effect from './../Assets/Image/Hero_Illustration/Illustration_Effect.png';
import Bomb from './../Assets/Image/Hero_Illustration/Illustration_Bomb.png';

export default function HeroImage (){
    return(
        <div className='relative w-[750px]'>
            <img src={Bomb} className="absolute z-20"alt="Bomb"/>
            <img src={Robot} className="absolute z-10" alt="Robot" />
            <img src={Effect} className="absolute z-0" alt="Effect"/>
        </div>
    );
}
