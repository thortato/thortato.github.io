import '../App.css';
import '../Components/Content.css';
import Header from './Header';
import About from './About';
import Works from './Works';
import ContactMe from './ContactMe';


function Home() {
  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Header/>
      {/* <About/>
      <Works/>
      <ContactMe/> */}
    </>
  );
}

export default Home;
