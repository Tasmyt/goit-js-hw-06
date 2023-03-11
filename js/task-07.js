const refs = {
    fontInput: document.querySelector('#font-size-control'),
    fontSizeControl: document.querySelector('#text'),
}

refs.fontInput.addEventListener('input', onInputFont);

function onInputFont() {
    refs.fontSizeControl.style.fontSize = `${refs.fontInput.value}px`;         
    
}