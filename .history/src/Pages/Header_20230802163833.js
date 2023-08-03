import '../Components/Content.css';
// import heroBackground from './../Assets/Image/Hero_Illustration/hero-bg.png';
// import illustrationRobot from './../Assets/Image/Hero_Illustration/Robot.png'
// import illustrationBooster from './../Assets/Image/Hero_Illustration/Boost_Short.png';
// import illustrationStarFX from './../Assets/Image/Hero_Illustration/Star FX.png';
// import illustrationSupriseFX from './../Assets/Image/Hero_Illustration/Suprise FX.png';
// import illustrationWaterFX from './../Assets/Image/Hero_Illustration/Water FX.png';
// import illustrationDynamite from './../Assets/Image/Hero_Illustration/Dynamite.png';
// import illustrationMissile from './../Assets/Image/Hero_Illustration/Missile.png';
// import illustrationGrenade from './../Assets/Image/Hero_Illustration/Grenade.png';
// import illustrationBomb from './../Assets/Image/Hero_Illustration/Bomb.png';
// import illustrationNuke from './../Assets/Image/Hero_Illustration/Nuke.png';
// import illustrationRemote from './../Assets/Image/Hero_Illustration/Remote.png';

import illustrationEffect from './../Assets/Image/Hero_Illustration/Illustration_Effect.png';
import illustrationRobot from './../Assets/Image/Hero_Illustration/Illustration_Robot.png';
import illustrationBomb from './../Assets/Image/Hero_Illustration/Illustration_Bomb.png';
export default function Header(){

    return(
            <div className='header'>
                <div className='hero-container'>
                    <div className='header-hero-text'>
                        <h1>WELCOME TO MY WEBSITE!</h1>
                        <p>This website function as a place for me to showcase and explain the stuff i make </p>
                    </div>
                    <div className='header-hero-image'>
                        {/* <img  src={heroBackground} alt="Background"/>
                        <img className='hero-robot' src={illustrationRobot} alt="Robot"/>
                        <img className='hero-robot-boost' src={illustrationBooster} alt="Boost Effect"/>
                        <img className='header-hero-starfx' src={illustrationStarFX} alt="Stars"/>
                        <img className='header-hero-suprisefx' src={illustrationSupriseFX} alt="Suprise"/>
                        <img className='header-hero-waterfx' src={illustrationWaterFX} alt="Water"/>
                        <img className='header-hero-dynamite' src={illustrationDynamite} alt="Dynamite" />
                        <img className='header-hero-missile' src={illustrationMissile} alt="Missile" />
                        <img className='header-hero-grenade' src={illustrationGrenade} alt="Grenade" />
                        <img className='header-hero-bomb' src={illustrationBomb} alt="Bomb" />
                        <img className='header-hero-nuke' src={illustrationNuke} alt="Nuke" />
                        <img className='header-hero-remote' src={illustrationRemote} alt="Remote" /> */}
                        <img className='header-effect' src={illustrationEffect} alt="effect" />
                        <img className='header-robot' src={illustrationRobot} alt="robot" />
                        <img className='header-bomb' src={illustrationBomb} alt="bomb" />
                    </div>
                </div>
                
            </div>
    );
};