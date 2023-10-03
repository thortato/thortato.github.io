import "../Components/Content.css";
import illustrationEffect from "./../Assets/Image/Hero_Illustration/Illustration_Effect.png";
import illustrationRobot from "./../Assets/Image/Hero_Illustration/Illustration_Robot.png";
import illustrationBomb from "./../Assets/Image/Hero_Illustration/Illustration_Bomb.png";

export default function Header() {
  return (
    <div>
      <div className="flex p-20 justify-between">
        <div className="flex flex-col flex-1">
          <h1 className="text-8xl font-black">WELCOME TO MY WEBSITE!</h1>
          <p>
            This website function as a place for me to showcase and explain the
            stuff i make{" "}
          </p>
        </div>
        <div className="flex-1 ml-[200px]">
        <img
            className="top-0 left-0"
            src={illustrationEffect}
            alt="effect"
          />
          <img
          className="top-0 left-0"
           src={illustrationRobot}
            alt="robot" />
          <img
        //    className="header-bomb"
        className="absolute top-0 left-0"
           src={illustrationBomb}
            alt="bomb" />
        </div>
      </div>
    </div>
    // <div className='header'>
    //     <div className='hero-container'>
    //         <div className=''>
    //             <h1 className='text-8xl font-extrabold'>WELCOME TO MY WEBSITE!</h1>
    //             <p>This website function as a place for me to showcase and explain the stuff i make </p>
    //         </div>
    //         <div className='header-hero-image'>
    //             <img className='header-effect' src={illustrationEffect} alt="effect" />
    //             <img className='header-robot' src={illustrationRobot} alt="robot" />
    //             <img className='header-bomb' src={illustrationBomb} alt="bomb" />
    //         </div>
    //     </div>

    // </div>
  );
}
