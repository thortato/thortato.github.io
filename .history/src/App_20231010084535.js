import './App.css';
import './Components/Content.css';
import Sidebar from './Pages/Sidebar.js';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import ScrolltoTop from './ScrolltoTop';
import { Routes, Route} from 'react-router-dom';
import {WorkAlterland} from './Pages/Works/Work_Alterland.js';
import {WorkIntotheForest} from'./Pages/Works/Work_IntotheForest.js';
import { WorkPenyelamatBumi } from './Pages/Works/Work_PenyelamatBumi';
import { useEffect } from 'react';
import {
  Animate,
  initTE,
  Datepicker,
   Input,
} from "tw-elements";


initTE({ Animate });
  


function App() {
  useEffect(() => {
    initTE({ Datepicker, Input });
  }, []);
  return (
    <>
    <div
      className="relative mb-3"
      data-te-datepicker-init
      data-te-input-wrapper-init>
      <input
        type="text"
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        placeholder="Select a date" />
      <label
        htmlFor="floatingInput"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Select a date</label
      >
    </div>
        {/* <Sidebar /> */}
        <div className='flex flex-col justify-center align-center'>
        <ScrolltoTop/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Alterland' element={<WorkAlterland/>} />
          <Route path='IntotheForest' element={<WorkIntotheForest/>} />
          <Route path="Penyelamat_Bumi" element={<WorkPenyelamatBumi/>} />
        </Routes>
        <Footer/>
        </div>
        
        
      
    </>
  );
}

export default App;
