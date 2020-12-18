import React from 'react';
import './BackgroundSlider.css';
function BackgroundSlider(props) {

        let now = 'nowImg';
        let next = 'nowImg nextImg';
        let i = props.index,
            j = i+1;
        if(props.index > 3){
            j=0
        }
        function fadeIn(index) {
            if(index === i){
                return now;
            }else if(index === j){
                return next;
            }else {
                return '';
            }
        }
    return (
        <>
        <img className={"basicImg " + fadeIn(0) } src="/images/screenshot01.jpg" alt=""/>
        <img className={"basicImg " + fadeIn(1) } src="/images/screenshot02.jpg" alt=""/>
        <img className={"basicImg " + fadeIn(2) } src="/images/screenshot03.jpg" alt=""/>
        <img className={"basicImg " + fadeIn(3) } src="/images/screenshot04.jpg" alt=""/>
        <img className={"basicImg " + fadeIn(4) } src="/images/screenshot05.jpg" alt=""/>
        </>
    );
}
export default BackgroundSlider