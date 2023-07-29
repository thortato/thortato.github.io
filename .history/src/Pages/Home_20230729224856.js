import '../App.css';
import '../Components/Content.css';
import Header from './Header';
import About from './bout';
import Works from './Works';
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
