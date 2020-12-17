import React from 'react';
import './BackgroundSlider.css';
function BackgroundSlider(props) {

        const img = new Array();
        img.push('/images/screenshot01.jpg');
        img.push('/images/screenshot02.jpg');
        img.push('/images/screenshot03.jpg');
        img.push('/images/screenshot04.jpg');
        img.push('/images/screenshot05.jpg');


        // function fadein() {
        //     imgArray[i].remove('nowImg');
        //     if (j > 3) {
        //         imgArray[0].add('nowImg', 'nextImg');
        //     } else {
        //         imgArray[j + 1].add('nowImg', 'nextImg');
        //     }
        //     imgArray[j].remove('nextImg');
        //     // setIndexI(i++);setIndexJ(j++);
        //     props.setIndexI(i++);
        //     console.log(i);
        // }

    return (
        <>
        <img  src={ img[props.index]} />
        </>
    );
}
export default BackgroundSlider