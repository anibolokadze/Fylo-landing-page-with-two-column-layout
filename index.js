let emailField = document.getElementById('mail');
let emailError = document.getElementById('mail-error');

let emailField2 = document.getElementById('mail-2');
let emailError2 = document.getElementById('mail-error-2');

function validateEmail(){
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Please check your email';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}
function validateEmail2(){
    if(!emailField2.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError2.innerHTML = 'Please check your email';
        return false;
    }
    emailError2.innerHTML = '';
    return true;
}