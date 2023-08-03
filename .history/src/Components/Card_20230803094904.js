import './Content.css';

export default function Card({thumbnail,title, caption}){
    return(
        <>
        <div className="card-container">
            <img className='card-thumbnail' src={thumbnail} alt="Thumbnail here :)"/>
            <div className='card-title'><h2>{title}</h2></div>
            <div className='card-caption'>{caption}</div>
            
        </div>
        </>

    );
}