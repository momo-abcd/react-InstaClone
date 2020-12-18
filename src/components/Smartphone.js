import React, { useEffect, useState } from 'react';
import './Smartphone.css';
import BackgroundSlider from './BackgroundSlider.js'

function Smartphone(props){

    const [index, setIndex] = useState(0);
    

    useEffect(() => {
        let interval = setInterval(countIndex, 6000);
        return () => {
            clearInterval(interval);
        }
   
    });
    const countIndex = () =>{
        if(index > 3) setIndex(0);
        else{setIndex(index+1)};
    } 

        return (
            <div>
        <div className="container">
        <div><img src="/images/smartphone.PNG" draggable="false" alt="smartphone"></img></div>
            <div className="changeImg">
                <BackgroundSlider index={index}/>
            </div>
        </div>
        </div>
        );
}

export default Smartphone