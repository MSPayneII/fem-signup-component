const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");

const fNameError = document.querySelector("#first-name-error-msg");
const lNameError = document.querySelector("#last-name-error-msg");
const emailError = document.querySelector("#email-error-msg");
const passError = document.querySelector("#password-error-msg");


firstName.value = "";
lastName.value = "";
email.value = "";
password.value = "";

submit.addEventListener("click", (event) => {
    event.preventDefault

    if(firstName.value.length === 0){
        firstName.placeholder = "";
        firstName.style.background = "url('./images/icon-error.svg') no-repeat 95% 50%";
        firstName.style.border = "1px solid #ff7a7a";
        firstName.style.paddingRight = "2rem";
        firstName.style.marginBottom = "0.5rem";
        fNameError.style.display = "block";
        event.preventDefault();

    } else {
        fNameError.style.display = "none";
        firstName.style.background = "none";
        firstName.style.border = "0.5px solid #dedede";
    }

    if(lastName.value.length === 0){
        lastName.placeholder = "";
        lastName.style.background = "url('./images/icon-error.svg') no-repeat 95% 50%";
        lastName.style.border = "1px solid #ff7a7a";
        lastName.style.marginBottom = "0.5rem";
        lNameError.style.display = "block";
        event.preventDefault();

    } else {
        lNameError.style.display = "none";
        lastName.style.background = "none";
        lastName.style.border = "0.5px solid #dedede";
    }
    if(email.value.length === 0 || email.value.includes("@") ===false ) {
        email.placeholder = "email@example/com";
        email.style.color = "red";
        email.style.background = "url('./images/icon-error.svg') no-repeat 95% 50%";
        email.style.border = "1px solid #ff7a7a";
        email.style.marginBottom = "0.5rem";
        emailError.style.display = "block";
        event.preventDefault();
    } else {
        emailError.style.display = "none";
        email.style.background = "none";
        email.style.border = "0.5px solid #dedede";
        email.style.color = "#3e3c49";
        
    }
    if(password.value.length === 0){
        password.placeholder = "";
        password.style.background = "url('./images/icon-error.svg') no-repeat 95% 50%";
        password.style.border = "1px solid #ff7a7a";
        password.style.marginBottom = "0.5rem";
        passError.style.display = "block";
        event.preventDefault();
    } else {
        passError.style.display = "none";
        password.style.background = "none";
        password.style.border = "0.5px solid #dedede";
    }

})