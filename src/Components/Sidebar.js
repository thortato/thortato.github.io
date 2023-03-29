import React, { useState } from "react";
import './Sidebar.css';
import { House, AddressBook,List, X ,CirclesFour, PaperPlaneTilt} from "phosphor-react";

export default function SideBar(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    }

    return (
        <div>    
            <div className={`sidebar ${isCollapsed ? 'collapse' : 'toggle'}`}>
                <h3 className='subtitle'>MENU 
                <button onClick={toggleSidebar} className="closeButton"><X size={32} /></button></h3>
                <a href={''} className='option'><House size={32} className="buttonAlign"/>Home</a>
                <a href={''} className='option'><AddressBook size={32} />About</a>
                <a href={''} className='option'><CirclesFour size={32} />Works</a>
                <a href={''} className='option'><PaperPlaneTilt size={32} />Contact Me</a>
            </div>
            <button onClick={toggleSidebar} className="toggleButton"><List size={32} /></button>
        </div>
    );

};
