import './../../Components/Content.css';
import './works.css';
import { Link } from 'react-router-dom';
import HeroIllustration from '../../Assets/Image/Hero_Alterland.png';
import MayorsIllustration from './../../Assets/Image/Alterland_Asset/Mayors.png';
import LevelIllustration from './../../Assets/Image/Alterland_Asset/PowerLv1_Lv4.jpg';
import ComparisonIllustration from './../../Assets/Image/Alterland_Asset/AlterlandComparison.jpg';

export function WorkAlterland(){
    
    return(
        <div>
            <div className='work-header'>
                <img className="hero-banner" src={HeroIllustration} alt="Hero Illustration" />
                <div className='text'>
                    <h1> Alterland</h1>
                    <p>City Building Game</p>
                    <p>January 2022 - May 2022</p>
                </div>  
            </div>
            <br/>
            <div className='description-container'>
                <div className='section-column'>
                    <div className='text-container'>
                        <p>
                        At the start of 2022, the popularity of NFT and crypto based game have skyrocketed
                        like never before. My then agency, Renderkin Studio decided to follow the trend to explore what the technology can do.
                        And thus, the concept of Alterland was born..
                        </p> 
                        <h1>My Role</h1>
                        <p>
                        As a 3D general artist, i am tasked to conceptualize and design the overall look of the game with the supervision of my then manager. 
                        </p>
                        <p>
                        The process of designing the look and feel of the game starts with:
                        
                        </p>  

                    </div>
                </div>
                <div className='section-column'>
                    <div className='text-container'>
                        <h2><span className='underline'>Research</span></h2>
                        <p>To start with, we surf through the web to find then ongoing blockchain and NFT affiliated games. 
                        One of the more prolific game at the time was Sandbox, with its voxel based art direction. However, there
                        are quite a lot of these voxel like aesthetics at the time to which the studio decided to not use it
                        as to distinct Alterland from its competitors. 
                        </p>
                        <p>
                        We then decided to turn to Pinterest to look for further insight. During the search we found that low-poly isometric style may just
                        works for Alterland. So the studio set the artstyle of Alterland to be that of low-poly isometric style.
                        </p>
                    </div>
                </div>
                <div className='section-column'>
                    <div className='text-container'>
                        <h2><span className='underline'>Modelling</span></h2>
                        <p>Alterland is a city building game where player can create and manage their own land. 
                            There are 14 types of building that player can build with each building type having their own benefit to help the player.
                            Most building type can be levelled up to improve its function and changes its sprite, upward to level 4. 
                        </p>
                        <img src={LevelIllustration} alt="Level" className='image'/>
                        <p>
                        In Alterland, the 3D assets are not ported directly into the game engine but the rendered 2D sprites was used instead.
                        It resulted in each asset needed to be rendered 4 times for each angle to compensate for the isometric style used.
                        </p>
                    </div>
                </div>
                <div className='section-column'>
                    <div className='text-container'>
                        <h2><span className='underline'>Iterate</span></h2>
                        <p>While the reference found in Pinterest was fine for the earlier level building, things started to get complicated when designing the higher levelled building.
                            Higher levelled building were designed to look more complex to make the player feel the progression they made when upgrading buildings. 
                        </p>
                        <p>
                            These complexity of course, runs against the aforementioned low-poly style. We decided to use SimCity as example for higher levelled building while 
                            slightly compensating the complexity for a more casual low-poly style.
                        </p>
                        <img src={ComparisonIllustration} alt="Comparison" className='image'/>

                    </div>
                </div>
                <div className='section-column'>
                    <div className='text-container'>
                        <h2><span className='underline'>Result</span></h2>
                        <p>Over the course of three months, I created approximately 65 assets for the game, each crafted with shading, texturing and lighting effects. 
                            Additionally, I've also created six character portraits intended for in-game uses. 
                        </p>
                        <p>
                        However, as the hype surrounding NFTs and crypto dwindled down, this project was sadly suspended indefinitely. 
                        Nevertheless, as my first project I am grateful for the experience gained and the opportunity to enhance my 3D skills through my 
                        involvement in the Alterland project.
                        </p>
                        <img src={MayorsIllustration} alt="Mayor" className='image'/>
                        

                    </div>
                </div>

               

                
                
            </div>  
            
             

        </div>
        );
}
