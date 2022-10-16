// first form validation
let emailField = document.getElementById('mail');
let emailError = document.getElementById('mail-error');

function validateEmail(){
    if(!emailField.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.innerHTML = 'Please check your email';
        emailError.style.color = "red";
        return false;
    }
    emailError.innerHTML = 'This is a valid adress'
    emailError.style.color = "green";
    return true;
}

// second form validation
let emailField2 = document.getElementById('mail-2');
let emailError2 = document.getElementById('mail-error-2');

function validateEmail2(){
    if(!emailField2.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError2.innerHTML = 'Please check your email';
        emailError2.style.color = "white";
        return false;
    }
    emailError2.innerHTML = 'This is a valid adress';
    emailError2.style.color = "black";
    return true;
}