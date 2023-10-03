import "../Components/Content.css";
import illustrationEffect from "./../Assets/Image/Hero_Illustration/Illustration_Effect.png";
import illustrationRobot from "./../Assets/Image/Hero_Illustration/Illustration_Robot.png";
import illustrationBomb from "./../Assets/Image/Hero_Illustration/Illustration_Bomb.png";

export default function Header() {
  return (
      <div className="flex md:flex-col align-center justify-center ">
        <div className="w-full p-10 flex-col">
        <h1 className="text-8xl font-black">WELCOME TO MY WEBSITE!</h1>
        <p>
        This website function as a place for me to showcase and explain the
        stuff i make
        </p>

        </div>
        {/* <div className="flex flex-col flex-1">
          <h1 className="text-8xl font-black">WELCOME TO MY WEBSITE!</h1>
          <p>
            This website function as a place for me to showcase and explain the
            stuff i make{" "}
          </p>
        </div>
        <div className="flex-1 ">
            <img
                className="absolute w-[500px]"
                src={illustrationEffect}
                alt="effect"
            />
            <img
            className="absolute  w-[500px]"
            src={illustrationRobot}
                alt="robot" />
            <img
            //    className="header-bomb"
            className="absolute  w-[500px]"
            src={illustrationBomb}
                alt="bomb" />
        </div> */}
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
