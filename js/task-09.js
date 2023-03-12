function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  divColor: document.querySelector('body'),
  spanColor: document.querySelector('.color'),
  buttonChangeColor: document.querySelector('.change-color'),
}

refs.buttonChangeColor.addEventListener('click', onButtonChangecolor);

function onButtonChangecolor() {
refs.divColor.style.backgroundColor = `${getRandomHexColor()}`;
  refs.spanColor.textContent = refs.divColor.style.backgroundColor;
   
}

console.log(getRandomHexColor())