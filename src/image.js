import YAKSHI from './image/yakshi.jpg';

function Image(){
    const IMG = document.createElement('img');
    IMG.alt = "Yakshi AI";
    IMG.width = 400;
    IMG.src = YAKSHI;
    const body = document.querySelector('body');
    body.appendChild(IMG);
}

export default Image;