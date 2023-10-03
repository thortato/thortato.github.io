import './../Components/Content.css';
import ProfilePicture from './../Assets/Image/Profilepicture.jpg';

export default function About(){

    return (
        <div className='flex flex-col md:flex-row items-center gap-6 mx-auto'>
            <div className='flex-1'>
                <img className='rounded-full p-4' src={ProfilePicture} alt="Profile" />
            <div className='flex-1' >
                <h1 className='text-5xl font-bold'>Hey, <span className='about-underline'>Javic</span> Here</h1>
                <p className='text-base'>I'm an IT Graduate from Universitas Sumatera Utara.
                    A tech enthusiast, design hobbyist and a skillionaire wannabe. I'm an all multimedia kind of guy that is 
                    currently trying to delve into the tech industry</p>
            </div>
            


        {/* <div className='about'>
            <div className='about-container'>
                <div className='about-profile-image'>
                    <img className='about-profile-picture' src={ProfilePicture} alt="Profile" />
                </div>
                <div className='about-profile-description'>
                    <h1 className='about-profile-description-Main'>Hey, <span className='about-underline'>Javic</span> Here</h1>
                    <p className='about-profile-description-Sub'>I'm an IT Graduate from Universitas Sumatera Utara.
                     A tech enthusiast, design hobbyist and a skillionaire wannabe. I'm an all multimedia kind of guy that is 
                     currently trying to delve into the tech industry</p>
                </div>
            </div> 
            
        </div> */}
        
        </div>
        
            
    );

}