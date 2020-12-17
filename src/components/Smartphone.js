import React from 'react';
import './Smartphone.css';
// import 'js/app.js';

function Smartphone(props){

    console.log(document.querySelector('#first'));
        return (
            <div>
        <div className="container">
        <div><img src="/images/smartphone.PNG" draggable="false" alt="smartphone"></img></div>
            <div className="changeImg">
                <img id="first" className = "basicImg nowImg" src="/images/screenshot01.jpg" alt=""></img>
                <img id="second" className = "basicImg nowImg nextImg" src="/images/screenshot02.jpg" alt=""></img>
                <img id="third" className = "basicImg" src="/images/screenshot03.jpg" alt=""></img>
                <img id="fourth" className = "basicImg" src="/images/screenshot04.jpg" alt=""></img>
                <img id="fifth" className = "basicImg" src="/images/screenshot05.jpg" alt=""></img>
            </div>
        </div>
        </div>
        );
}

export default Smartphone