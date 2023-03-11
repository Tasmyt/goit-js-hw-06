const refs = {
    idInput: document.querySelector('#validation-input'),
    dataLength: document.querySelector('[data-length]'),
}
let counter = 0; 
refs.idInput.addEventListener('input', onInputCounter);
refs.idInput.addEventListener('blur', onInputAudit);

function onInputCounter() {
    counter += 1;
       
}

function onInputAudit() {
    
    if (counter == refs.dataLength.getAttribute('data-length')) {
        refs.idInput.classList.add('valid');
        refs.idInput.classList.remove('invalid');
    } else {
        refs.idInput.classList.add('invalid'); 
        refs.idInput.classList.remove('valid');
    }
   
}

