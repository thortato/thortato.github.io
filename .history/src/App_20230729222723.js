import './App.css';
import './Components/Content.css';

import Sidebar from './Pages/Sidebar';
import Header from './Pages/Header';
import About from './Pages/About';
import Works from './Pages/Works';
import ContactMe from './Pages/ContactMe';
import Footer from './Pages/Footer'

function App() {
  return (
    <div>
      <Sidebar />
      {/* <div className='content-container'> */}
      <Header />
      <About/>
      <Works/>
      {/* </div> */}
      
    </div>
  );
}

export default App;
