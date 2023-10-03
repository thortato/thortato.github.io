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
        <div className="flex border-solid border-black">
        <img
                className="w-[500px]"
                src={illustrationEffect}
                alt="effect"
            />
            <img
            className="w-[500px]"
            src={illustrationRobot}
                alt="robot" />
            <img
            //    className="header-bomb"
            className="w-[500px]"
            src={illustrationBomb}
                alt="bomb" />
        </div>
        </div>
        
      </div>

  );
}
