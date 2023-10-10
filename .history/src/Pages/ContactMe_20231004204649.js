import '../Components/Content.css';
import ContactMeIllustration from './../Assets/Image/ContactMeIllustration.png';

export default function ContactMe(){

    return(
        <div className='contactMe'>
            <img className='absolute z-10' src={ContactMeIllustration} alt="Illustration" />
            <div className='text-center text-5xl font-black z-20'>Interested in my works? Say hello to me here!</div>
            <a href="mailto:jvcrotanson@gmail.com"><button className='contactMe-button'>Hello!</button></a>
            
        </div>
    
    );
        
    
};