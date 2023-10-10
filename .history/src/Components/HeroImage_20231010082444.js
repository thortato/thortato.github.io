import Robot from './../Assets/Image/Hero_Illustration/Illustration_Robot.png';
import Effect from './../Assets/Image/Hero_Illustration/Illustration_Effect.png';
import Bomb from './../Assets/Image/Hero_Illustration/Illustration_Bomb.png';
import {
  Animate,
  initTE,
} from "tw-elements";

initTE({ Animate });

export default function HeroImage() {
    return (
      <div
        className='relative w-[350px] md:w-[750px] right-5 md:left-10'
        data-te-animation-init
        data-te-animation-start='onScroll'
        data-te-animation='[slide-right_1s_ease-in-out]'
      >
        <Animate
          className='absolute z-20'
          enter='transition-opacity transform duration-1000'
          enterFrom='opacity-0 translate-x-[-100%]'
          enterTo='opacity-100 translate-x-0'
        >
          <img src={Bomb} alt='Bomb' />
        </Animate>
        <Animate
          className='absolute z-10'
          enter='transition-opacity transform duration-1000 delay-500'
          enterFrom='opacity-0 translate-x-[-100%]'
          enterTo='opacity-100 translate-x-0'
        >
          <img src={Robot} alt='Robot' />
        </Animate>
        <Animate
          className='absolute z-0'
          enter='transition-opacity transform duration-1000 delay-1000'
          enterFrom='opacity-0 translate-x-[-100%]'
          enterTo='opacity-100 translate-x-0'
        >
          <img src={Effect} alt='Effect' />
        </Animate>
      </div>
    );
  }
