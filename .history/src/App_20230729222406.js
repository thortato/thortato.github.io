import './App.css';
import './Components/Content.css';

import Sidebar from './Pages/Sidebar';
import Header from './Pages/Header';
import About from './Components/About.js';
import Works from './Components/Works.js';

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
