import '../Components/Content.css';
import ContactMeIllustration from './../Assets/Image/ContactMeIllustration.png';

export default function ContactMe(){

    return(
        <div className='contactMe'>
            <div className='text-center text-3xl md:text-5xl font-black z-20'>Interested in my works? Say hello to me here!</div>
            <a href="mailto:jvcrotanson@gmail.com" className='z-20'><button className='contactMe-button'>Hello!</button></a>
            
        </div>
    
    );
        
    
};