// const imgArray = new Array();
const imgArray = [];
imgArray.push(document.querySelector('#first').classList);
imgArray.push(document.querySelector('#second').classList);
imgArray.push(document.querySelector('#third').classList);
imgArray.push(document.querySelector('#fourth').classList);
imgArray.push(document.querySelector('#fifth').classList);

let i = 0;
let j = 1;

function fadein(){
    if (i > 4) i = 0;
    if (j > 4) j = 0;

    imgArray[i].remove('nowImg');
    if (j > 3) {
        imgArray[0].add('nowImg', 'nextImg');
    } else {
        imgArray[j + 1].add('nowImg', 'nextImg');
    }
    imgArray[j].remove('nextImg');
    i++; j++;
}
setInterval(fadein, 6000);