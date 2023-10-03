import './Content.css';

export default function Card({Thumbnail,Title, Caption}){
    return(
        <>
        <div className="bg-amber rounded-md w-[300px] ">
            <img className='w-full h-[150px]' src={Thumbnail} alt="Thumbnail here :)"/>
            <h1 className='text-lg'>{Title}</h1>
            <p className='text-base'>{Caption}</p>
            
        </div>
        </>

    );
}