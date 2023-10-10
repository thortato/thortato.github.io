import './App.css';
import './Components/Content.css';
import Sidebar from './Pages/Sidebar.js';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import ScrolltoTop from './ScrolltoTop';
import { Routes, Route} from 'react-router-dom';
import {WorkAlterland} from './Pages/Works/Work_Alterland.js';
import {WorkIntotheForest} from'./Pages/Works/Work_IntotheForest.js';


function App() {
  return (
    <>
        {/* <Sidebar /> */}
        <div className='flex flex-col justify-center align-center'>
        <ScrolltoTop/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Alterland' element={<WorkAlterland/>} />
          <Route path='IntotheForest' element={<WorkIntotheForest/>} />
          <Route path="Penyelamat_Bumi" element={}
        </Routes>
        <Footer/>
        </div>
        
        
      
    </>
  );
}

export default App;
