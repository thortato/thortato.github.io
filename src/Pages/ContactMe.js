import '../Components/Content.css';
import ContactMeIllustration from './../Assets/Image/ContactMeIllustration.png';

export default function ContactMe(){

    return(
    <div className='contactMeBG'>
        {/* <img src={ContactMeIllustration} className='contactMeIllustration' alt="Boom"/> */}
        <div className='contactMe'>
            <h1>Interested in my works? Say hello to me here!</h1>
            <button className='button-new'>Hello!</button>
        </div>
        
    </div>
    );
        
    
};