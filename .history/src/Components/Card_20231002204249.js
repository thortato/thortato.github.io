import './Content.css';

export default function Card({Thumbnail,Title, Caption}){
    return(
        <>
        <div className="bg-amber rounded-md w-[250px]">
            <img className='w-full' src={Thumbnail} alt="Thumbnail here :)"/>
            <h1>{Title}</h1>
            <p>{Caption}</p>
            
        </div>
        </>

    );
}