import { randomColor, colorBox, removeButton } from "./utilites.js";

//Elementreference
const btn= document.getElementById('btn');
const colorBtn = document.getElementById('colorbox');

container.addEventListener('click', event => {
    event.target.style.backgroundColor = randomColor();
    event.currentTarget.style.backgroundColor = randomColor();
})

colorBtn.addEventListener('click', () => {
    colorBox()
    colorBtn.remove();
});

btn.addEventListener('click', event => removeButton(event.target));