import React, { useEffect, useState } from 'react';
import './Smartphone.css';
import BackgroundSlider from './BackgroundSlider.js'

function Smartphone(props){

    const [index, setIndex] = useState(0);
    

    useEffect(() => {
        let interval = setInterval(countIndex, 1000);
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
                {/* <img id="first" className = "basicImg nowImg" src="/images/screenshot01.jpg" alt=""></img>
                <img id="second" className = "basicImg nowImg nextImg" src="/images/screenshot02.jpg" alt=""></img>
                <img id="third" className = "basicImg" src="/images/screenshot03.jpg" alt=""></img>
                <img id="fourth" className = "basicImg" src="/images/screenshot04.jpg" alt=""></img>
                <img id="fifth" className = "basicImg" src="/images/screenshot05.jpg" alt=""></img> */}
                <BackgroundSlider index={index}/>
            </div>
        </div>
        </div>
        );
}

export default Smartphone