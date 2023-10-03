import '../Components/Content.css';

import { Link } from 'react-router-dom';
import Card from '../Components/Card.js';
import image1 from '../Assets/Image/ItF_thumbnail.png';
import image2 from '../Assets/Image/alterland_thumbnail.png'
import image3 from '../Assets/Image/alterland_thumbnail.png';


export default function Works(){
    return(
        <div>
            <div>
                <h1>Works</h1>
                <p>Below are some of the things I've worked on</p>
            </div>
        </div>
        // <div className='works'>
           
        //     <div className='works-description'>
        //         <h1>Works</h1>
        //     </div>
        //     <div className='work-containers '>
        //         <Link to='Alterland'>
        //         <Card thumbnail={image2} title="Alterland" caption="Made using Blender"/>
        //         </Link>
        //         <Link to='IntotheForest'>
        //         <Card thumbnail={image1} title="Into the Forest" caption="2D Unity Game with Fuzzy Logic" />
        //         </Link>
        //         <Card thumbnail={image3} title="Penyelamat Bumi" caption="Designing UI and Assets" />
                

        //     </div>
        // </div>
    );
}