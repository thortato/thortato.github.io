import "../Components/Content.css";
import illustrationEffect from "./../Assets/Image/Hero_Illustration/Illustration_Effect.png";
import illustrationRobot from "./../Assets/Image/Hero_Illustration/Illustration_Robot.png";
import illustrationBomb from "./../Assets/Image/Hero_Illustration/Illustration_Bomb.png";
import HeroImage from "../Components/HeroImage";

export default function Header() {
  return (
      <div className="flex flex-col md:flex-row align-center justify-center mt-14">
        <div className="w-full flex-col ml-6">
            <h1 className=" text-6xl md:text-8xl font-black">WELCOME TO MY WEBSITE!</h1>
            <p>
            This website function as a place for me to showcase and explain the
            stuff i make
            </p>
        </div>
        <div className="flex-1">
          
        <HeroImage/>
        </div>
        
        
      </div>

  );
}
