import './App.css';
import './Components/Content.css';

import Sidebar from './Components/Sidebar.js';
import Header from './Components/Content.js';
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
