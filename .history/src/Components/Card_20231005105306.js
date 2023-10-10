import './Content.css';

export default function Card({Thumbnail,Title, Caption}){
    return(
        <>
        <div className="bg-amber rounded-md w-[300px] pb-20 hover:drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <img className='w-full h-[150px]' src={Thumbnail} alt="Thumbnail here :)"/>
            <div className='px-5 py-2'>
            <h1 className='text-lg font-bold'>{Title}</h1>
            <p className='text-base'>{Caption}</p>
            </div>
            
            
        </div>
        </>

    );
}