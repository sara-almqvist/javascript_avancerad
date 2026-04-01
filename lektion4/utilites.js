const container = document.getElementById('container');
const fragment= document.createDocumentFragment();

export function randomNumber() {
    return Math.floor(Math.random() *257)
}

export function randomColor() {
    const randomRgb= String(randomNumber()) +',' + String(randomNumber()) +','+ String(randomNumber());
    return `rgb(${randomRgb})`
}

export const colorBox = () => {
    
    for (let i=0; i<200; i++) {
        let divEl = document.createElement('div');
        divEl.style.backgroundColor = randomColor();
        divEl.style.width = '25px';
        divEl.style.height = '25px';
        fragment.appendChild(divEl);
    }

    container.appendChild(fragment);
}

export function removeButton(btn){
    //document.body.removeChild(btn);
    btn.removeEventListener('click', removeButton)
    btn.remove();
}