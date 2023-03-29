import './Content.css';
import {ArrowDown} from 'phosphor-react';

export default function Header(){

    return(
        <div >
            <div className='header'>
                <div className='title'>Hi, I'm Javic</div>
                <p>Design Enthusiast & Skillionaire Wannabe</p>
                <br/>
                <ArrowDown className='arrow' size={32} />
            </div>
        </div>
    );
};