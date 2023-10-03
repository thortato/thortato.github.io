import Robot from './../Assets/Image/Hero_Illustration/Illustration_Robot.png';
import Effect from './../Assets/Image/Hero_Illustration/Illustration_Effect.png';
import Bomb from './../Assets/Image/Hero_Illustration/Illustration_Bomb.png';

export default function HeroImage (){
    return(
        <div className='relative'>
            <img src={Robot} className="absolute" alt="Robot" />
            <img src={Effect} className="absolute" alt="Effect"/>
            <img src={Bomb} className="absolute z-20"alt="Bomb"/>
        </div>
    );
}
