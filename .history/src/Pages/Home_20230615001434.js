import '../App.css';
import '../Components/Content.css';
import Header from './Header.js';
import About from './About.js';
import Works from './Works.js';
import ContactMe from './ContactMe';


function Home() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>  
      <Header/>
      <About/>
      <Works/>
      <ContactMe/>
    </>
  );
}

export default Home;
