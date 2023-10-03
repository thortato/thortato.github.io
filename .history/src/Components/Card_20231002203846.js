import './Content.css';

export default function Card({thumbnail,title, caption}){
    return(
        <>
        <div className="bg-amber rounded-md">
            <img className='' src={thumbnail} alt="Thumbnail here :)"/>
            <div className=''>{title}</div>
            <div className=''>{caption}</div>
            
        </div>
        </>

    );
}