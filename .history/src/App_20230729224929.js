import './App.css';
import './Components/Content.css';

import Sidebar from './Pages/Sidebar';
import Home from './Pages/Home';
import Footer from './Pages/Footer'

function App() {
  return (
    <div>
      <Sidebar />
      {/* <div className='content-container'> */}
      <Home/>
      <Footer/>
      {/* </div> */}
      
    </div>
  );
}

export default App;
