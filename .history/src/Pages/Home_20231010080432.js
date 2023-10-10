import '../App.css';
import '../Components/Content.css';
import Header from './HeroSection';
import About from './About';
import Works from './Works';
import ContactMe from './ContactMe';


function Home() {
  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className='flex flex-col px-10 gap-24 md:gap-[300px] mb-10 md:snap-mandatory md:snap-y' >
      <Test
      <Header/>
      <About/>
      <Works/>
      
      </div>
      <ContactMe/>
      
    </>
  );
}

export default Home;
