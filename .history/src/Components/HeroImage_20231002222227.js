import Robot from './../Assets/Image/Hero_Illustration/Illustration_Robot.png';
import Effect from './../Assets/Image/Hero_Illustration/Illustration_Effect.png';
import Bomb from './../Assets/Image/Hero_Illustration/Illustration_Bomb.png';

export default function HeroImage (){
    return(
        <div className='relative'>
            <img src={Robot} alt="Robot" />
            <img src={Effect} className="top-" alt="Effect"/>
            <img src={Bomb} alt="Bomb"/>
        </div>
    );
}
