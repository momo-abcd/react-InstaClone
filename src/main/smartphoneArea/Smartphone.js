import React from 'react';
import './style.css';
// import 'js/app.js';

function Smartphone(props){
        return (
            <div>
        <div className="container">
        <div><img src="/main/smartphone.PNG" draggable="false" alt="smartphone"></img></div>
            <div className="changeImg">
                <img id="first" className = "basicImg nowImg" src="/main/screenshot01.jpg" alt=""></img>
                <img id="second" className = "basicImg nowImg nextImg" src="/main/screenshot02.jpg" alt=""></img>
                <img id="third" className = "basicImg" src="/main/screenshot03.jpg" alt=""></img>
                <img id="fourth" className = "basicImg" src="/main/screenshot04.jpg" alt=""></img>
                <img id="fifth" className = "basicImg" src="/main/screenshot05.jpg" alt=""></img>
            </div>
        </div>
        </div>
        );
}

export default Smartphone