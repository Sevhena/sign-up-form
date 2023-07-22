function handlePasswordValidation() {
    if (password.value !== passwordConfirmation.value &&
        !password.classList.contains('error')) {

        password.classList.add('error');
        passwordConfirmation.classList.add('error');

        const errorMessage = document.createElement('div');
        errorMessage.textContent = '*Passwords do not match';
        errorMessage.classList.add('error');
        passwordField.appendChild(errorMessage);
    }
    else if (password.value === passwordConfirmation.value &&
            password.classList.contains('error')){
        password.classList.remove('error');
        passwordConfirmation.classList.remove('error');
        passwordField.removeChild(passwordField.lastChild)
    }
    
}

const passwordField = document.querySelector('#password-field');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#confirm-password');

passwordConfirmation.addEventListener('input', handlePasswordValidation);