import "./works.css";
import ItFIllustration from "./../../Assets/Image/ItFImage.jpg";
import { HomeButton } from "../../Components/HomeButton";

export function WorkIntotheForest() {
  return (
    <div>
        <HomeButton/>
      <div className="relative mx-auto">
        {/* Image */}
        <img
          className="brightness-50 w-full md:h-96"
          src={ItFIllustration}
          alt="Hero Illustration"
        />

        {/* Text */}
        <div className="absolute top-8 md:top-32 left-0 right-0 text-center white-text font-bold">
          <h1>Into the Forest</h1>
          <p>2D Short Action RPG With AI Controller Companion</p>
          <p>October 2021 - April 2022</p>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-5 md:px-[400px] items-center mt-10">
        <div>
          <p>
            For my final year project as requirement to graduate from
            Universitas Sumatera Utara, I decided to create a game with NPC
            companions to help player as I was inspired by the game I was
            playing then, Dragon Age.
          </p>
        </div>

        <div>
          <h1>My Role</h1>
          <p>
            As this was my final year project, I am the sole developer of this
            project with the help of Brackey's Community Discord and Aron
            Granberg's A* Pathfinding Projects.
          </p>
          <p>My journey to develop this game starts with:</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold md:mb-14">
            <span className="highlight">Setup</span>
          </h2>
          <p>
            As I was quite acquainted with Unity at the time, I decided to use
            Unity2D game engine as the base of my game development with VS
            Studio as my IDE. I then setup a local github for version control.
            While Unity used to support Javascript (dubbed UnityScript), it was
            deprecated in favor of C# which lead to the decision to use C# as
            the game's language.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold md:mb-14">
            <span className="highlight">Designing</span>
          </h2>
          <p>
            Before starting to code for the game, I need to design and set what
            the game is first. The game was planned to be a top-down shooting
            game with NPC Companions that can provide help to the player while
            fighting enemies. As the previous sentence entails, there are three
            type of units in the game, Player, NPC Companion, and Enemy. Using
            the OOP concept, all of the units are based on the class Unit.
          </p>
          <h2 className="text-2xl font-bold">Unit</h2>
          <p>
            Every unit are set to be able to:
            <ul className="list-disc">
              <li>Movement</li>
              As the game has top-down camera view, Unit needs to be able to
              move in the horizontal and vertical direction.
              <li>Attack</li>
              Every Unit need to be able to attack based on their attack point.
              <li>Health & Mana</li>
              Every unit must has a healthbar and a manabar to represent their
              current state. If the healthbar reached zero, they are either
              destroyed or in player character case,game over screen.
              <li>Field of View</li>
              Field of view are a certain radius that every unit have, whether
              player character or NPC. While these FOV are not seen on the game
              result, it is seen when debugging the game in the form of gizmo.
              These FOV are used to monitor whether if a unit is on a
              Battlestate or not. A battlestate happens when two unit's FOV with
              different tag(i.e. enemy and player) collided. These FOV are the
              one responsible to simulate an encounter-like state.
            </ul>
          </p>
          <p>
            After having all of their basics, each unit type have their own
            specialization that differ from each other according to their role.
          </p>
          <h2 className="text-2xl font-bold">Player</h2>
          <p>
            <ul className="list-disc">
              <li>Movement</li>
              Player Character's Movement is decided by player, using the WASD
              keys to move around two axis.
              <li>Attack</li>
              Player Character's Attack is decided by player, where player can
              uses melee attack using F key and ranged attack that uses Mana by
              clicking RMB.
              <li>Health & Mana</li>
              Player's health will decrease if attacked by enemies, and when it
              reached zero will prompt the game over screen to appear.
              <li>Field of View</li>
              Player's field of view works as to monitor if they are currently
              on battle state. When on battle state, player's mana can't
              regenerate.
            </ul>
          </p>
          <h2 className="text-2xl font-bold">NPC Companion</h2>
          <p>
            <ul className="list-disc">
              <li>Movement</li>
              As NPC Companion is not controlled by player, they rely on
              pathfinding to navigate environment.
              <li>Attack</li>
              NPC Companion is able to use a basic attack and a skill attack.
              They can alternate between these two attack using fuzzy
              logic-based AI.
              <li>Health & Mana</li>
              NPC Companion's health will decrease if attacked by enemies and
              will be destroyed upon reaching zero. However moving to next stage
              will cause NPC Companion to respawn back fully healed.
              <li>Field of View</li>
              NPC Companion's field of view works as way for the NPC Companion
              to sense the environment and will make decision based on what is
              on their field of view. NPC Companion will immediately become
              hostile against enemy upon detecting them.
            </ul>
          </p>
          <h2 className="text-2xl font-bold">Enemy</h2>
          <p>
            <ul className="list-disc">
              <li>Movement</li>
              Same as NPC Companion, they rely on pathfinding to navigate
              environment. However, they are able to patrol if not on the FOV of
              Player or NPC Companions.
              <li>Attack</li>
              Enemy is only able to use basic attack.
              <li>Health & Mana</li>
              Enemy is have health and will be destroyed upon having their
              health reach zero.
              <li>Field of View</li>
              Enemy will immediately turn hostile upon detecting Player or NPC
              Companion.
            </ul>
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold md:mb-14">
            <span className="highlight">Fuzzy Logic</span>
          </h2>
          <p>
            As planned, I started to code after the design I set up before.
            However while coding it, one the core elements for game, NPC
            Companion need to be controlled by an AI as they are ran parallel
            from player. One of the proposition I got is to use Fuzzy Logic as
            the base of the AI. Fuzzy logic works to ease down the condition for
            the NPC companion to act. Compared to a binary logic that reinforce
            on true or false, fuzzy logic ease it by having a spectrum between
            true or false (think 0.8 on a scale of 0 to 1).
          </p>
          <p>
            With that in mind, we can design the parameter to which how the NPC
            Companion will react.
          </p>
          {/* <img src={ComparisonIllustration} alt="Comparison" className="p-5" /> */}
        </div>
        <div>
          <h2 className="text-3xl font-bold md:mb-14">
            <span className="highlight">NPC Companion</span>
          </h2>
          <p>
            The core of this game, NPC Companion are designed to help the player
            while fighting enemies. In this game, Player are given three NPC
            Companions to help them, each with different role and skill. On the
            technical side, the NPC Companion are able to alternate between the
            state of basic attack, skill, and run. These decision are made using
            a ruleset that's ran through by the fuzzy logic, thus making it
            almost AI-like.
          </p>
          <p>
            <ul className="list-disc">
              <li>Healer</li>
              The first NPC Companion that Player encountered, their basic
              attack is a ranged attack with the ability to heal player when the
              situation calls for it.
              <li>Warrior</li>
              The second NPC Companion player encountered. Their basic attack is
              a melee attack with the ability to Slash, dealing damage across
              multiple enemy in one instance of attack.
              <li>Mage</li>
              The final NPC Companion that player encounter. Their basic attack
              is a ranged attack with the ability to freeze, spawning a freeze
              field that harms and slows the enemy on top of it.
            </ul>
          </p>

          
        </div>
        <div>
          <h2 className="text-3xl font-bold md:mb-14">
            <span className="highlight">NPC Companion</span>
          </h2>
          <p>
            After several months of development, both code and assets included,
            I am able to finish the game and propose it as my final year project
            which yielded me an A for the grade and allow me to graduate from my
            university.
          </p>
          <p>You can try the game by clicking the image below:</p>
          <a href="https://thortates.itch.io/into-the-forest">
          <img src={ItFIllustration} alt="Epilogue" className="p-5 mb-20 mx-auto" />
            </a>
        </div>
      </div>
    </div>
  );
}
