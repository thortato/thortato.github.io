import '../Components/Content.css';
// import ContactMeIllustration from './../Assets/Image/ContactMeIllustration.png';

export default function ContactMe(){

    return(
        <div className='contactMe'>
            <div className='contactMe-caption'>Interested in my works? Say hello to me here!</div>
            <a href="mailto:someone@example.com"><button className='contactMe-button'>Hello!</button></a>
            
        </div>
    
    );
        
    
};