import './Content.css';

export default function Card({thumbnail,title, caption}){
    return(
        <>
        <div className="bg-amber rounded-md w-ful">
            <img className='w-1/3' src={thumbnail} alt="Thumbnail here :)"/>
            <div className=''>{title}</div>
            <div className=''>{caption}</div>
            
        </div>
        </>

    );
}