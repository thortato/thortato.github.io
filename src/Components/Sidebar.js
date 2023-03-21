import React, { useState } from "react";
import './Sidebar.css';

export default function SideBar(props) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    }

    return (
        <div>
            <button onClick={toggleSidebar} className="close-Button">=</button>
            <div className={`sidebar ${isCollapsed ? 'collapse' : 'toggle'}`}>
                <h3 className='subtitle'>MENU <button onClick={toggleSidebar} className="close-Button">X</button></h3>
                <a href={''} className='option'>Home</a>
                <a href={''} className='option'>About</a>
                <a href={''} className='option'>Works</a>
                <a href={''} className='option'>About</a>
            </div>
        </div>
    );

};
