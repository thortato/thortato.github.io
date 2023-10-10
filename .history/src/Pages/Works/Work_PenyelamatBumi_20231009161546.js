import "./../../Components/Content.css";
import "./works.css";
import { Link } from "react-router-dom";
import HeroIllustration from "../../Assets/Image/Hero_Alterland.png";
import MayorsIllustration from "./../../Assets/Image/Alterland_Asset/Mayors.png";
import LevelIllustration from "./../../Assets/Image/Alterland_Asset/PowerLv1_Lv4.jpg";
import ComparisonIllustration from "./../../Assets/Image/Alterland_Asset/AlterlandComparison.jpg";

export function WorkPenyelamatBumi() {
  return (
    <div>
      <div className="relative">
        {/* Image */}
        <img
          className="brightness-50 w-full md:h-96"
          src={HeroIllustration}
          alt="Hero Illustration"
        />

        {/* Text */}
        <div className="absolute top-8 md:top-32 left-0 right-0 text-center white-text font-bold">
          <h1>Penyelamat Bumi</h1>
          <p>Environmental Friendly 3D Platform Game</p>
          <p>July 2020 - October 2020</p>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-5 md:px-[400px] mt-10">
        <div>
          <p>
            GEMASTIK or otherwise known as Pagelaran Mahasiswa Nasional Bidang
            Teknologi Informasi Dan Komunikasi is a program aimed to improve and
            guide students across Indonesia so that they will
            be able to lead a change in the national's tech sector. 
          </p>
        </div>

        <div>
          <h1>My Role</h1>
          <p>
            As the artist of the team, my role involves me directing the general art
            direction and 
            As a 3D general artist, i am tasked to conceptualize and design the
            overall look of the game with the supervision of my then manager.
          </p>
          <p>
            The process of designing the look and feel of the game starts with:
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold md:mb-14">
            <span className="highlight">Research</span>
          </h2>
          <p>
            To start with, we surf through the web to find then ongoing
            blockchain and NFT affiliated games. One of the more prolific game
            at the time was Sandbox, with its voxel based art direction.
            However, there are quite a lot of these voxel like aesthetics at the
            time to which the studio decided to not use it as to distinct
            Alterland from its competitors.
          </p>
          <p>
            We then decided to turn to Pinterest to look for further insight.
            During the search we found that low-poly isometric style may just
            works for Alterland. So the studio set the artstyle of Alterland to
            be that of low-poly isometric style.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold md:mb-14">
            <span className="highlight">Modelling</span>
          </h2>
          <p>
            Alterland is a city building game where player can create and manage
            their own land. There are 14 types of building that player can build
            with each building type having their own benefit to help the player.
            Most building type can be levelled up to improve its function and
            changes its sprite, upward to level 4.
          </p>
          <img src={LevelIllustration} alt="Level" className="p-5" />
          <p>
            In Alterland, the 3D assets are not ported directly into the game
            engine but the rendered 2D sprites was used instead. It resulted in
            each asset needed to be rendered 4 times for each angle to
            compensate for the isometric style used.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold md:mb-14">
            <span className="highlight">Iterate</span>
          </h2>
          <p>
            While the reference found in Pinterest was fine for the earlier
            level building, things started to get complicated when designing the
            higher levelled building. Higher levelled building were designed to
            look more complex to make the player feel the progression they made
            when upgrading buildings.
          </p>
          <p>
            These complexity of course, runs against the aforementioned low-poly
            style. We decided to use SimCity as example for higher levelled
            building while slightly compensating the complexity for a more
            casual low-poly style.
          </p>
          <img src={ComparisonIllustration} alt="Comparison" className="p-5" />
        </div>
        <div>
          <h2 className="text-3xl font-bold md:mb-14">
            <span className="highlight">Result</span>
          </h2>
          <p>
            Over the course of three months, I created approximately 65 assets
            for the game, each crafted with shading, texturing and lighting
            effects. Additionally, I've also created six character portraits
            intended for in-game uses.
          </p>
          <p>
            However, as the hype surrounding NFTs and crypto dwindled down, this
            project was sadly suspended indefinitely. Nevertheless, as my first
            project I am grateful for the experience gained and the opportunity
            to enhance my 3D skills through my involvement in the Alterland
            project.
          </p>
          <img src={MayorsIllustration} alt="Mayor" className="p-5 mb-20" />
        </div>
      </div>
    </div>
  );
}
