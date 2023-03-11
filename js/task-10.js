function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  valueInput: document.querySelector('input'),
  dataCreate: document.querySelector('[data-create]'),
  dataDestroy: document.querySelector('[data-destroy]'),
    boxes: document.querySelector('#boxes'),
}
let amount;
refs.dataCreate.addEventListener('click', createBoxes)
refs.valueInput.addEventListener('change', () => {
  amount = refs.valueInput.value;}
)

function createBoxes() {
  let width = 20;
  let height = 20;
  for (let i = 0; i < amount; i += 1) {
  const newEl = document.createElement("div");
  newEl.style.width = `${ width += 10 }px`;
  newEl.style.height = `${ height += 10 }px`;
  newEl.style.backgroundColor = `${getRandomHexColor()}`;
  refs.boxes.append(newEl);  
  }  
}

refs.dataDestroy.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  for (let i = 0; i < amount; i += 1) {
    refs.boxes.firstChild.remove()
  }
}
