
// fix the problem when you do blur on input

let email = document.querySelector(".registration form input[type=\"text\"]");
let spanInput = document.querySelector(".registration form .email span");



email.onfocus = function(){
spanInput.style.cssText = "  top: -10px; transform: translateY(0); z-index: 2; color: var(--main-color)";
email.style.borderColor = "var(--main-color)";
if(email.value.length > 0 && /\w+@\w+\.\w{3,}/.test(email.value) === false){

    spanInput.style.setProperty("color","red");
    email.style.setProperty("border-color","red");
}
};

email.onblur = function(){
if(email.value.length > 0){
spanInput.style.cssText = "  top: -10px; transform: translateY(0); z-index: 2; color: var(--main-color)";
email.style.borderColor = "var(--main-color)";
if(/\w+@\w+\.\w{3,}/.test(email.value) === false){

    spanInput.style.setProperty("color","red");
    email.style.setProperty("border-color","red");
}

}
else{
    spanInput.style.cssText = "top: 50%; transform: translateY(-50%); z-index: 1; color: grey";
    email.style.borderColor = "#ccc";

}
};

email.onkeyup = function(){
    if(email.value.length > 0 && /\w+@\w+\.\w{3,}/.test(email.value) === false){

        spanInput.style.setProperty("color","red");
        email.style.setProperty("border-color","red");
    }
    else{
        spanInput.style.cssText = "  top: -10px; transform: translateY(0); z-index: 2; color: var(--main-color)";
        email.style.borderColor = "var(--main-color)";
    }
    };

    document.forms[0].onsubmit = function(e){

        if(email.style.borderColor === "red"){
            e.preventDefault();
        }
    };