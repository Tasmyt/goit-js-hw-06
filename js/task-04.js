const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}

let counterValue = 0;
refs.decrement.addEventListener('click', onDecrementClick);
refs.increment.addEventListener('click', onIncrementClick);


function onDecrementClick() {    
    counterValue -= 1;
    refs.value.textContent = counterValue;
};

function onIncrementClick() {
    counterValue += 1;
    refs.value.textContent = counterValue;
};

