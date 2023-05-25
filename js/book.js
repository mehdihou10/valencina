//start special header


let togParent = document.querySelector(".book-header .toggle");
let tog = document.querySelector(".book-header .toggle i");
let nav = document.querySelector(".book-header ul");


let mode = document.querySelector(".book-header .container .mode");


let spTitle = document.querySelectorAll(".special-title");

// switching between mode and nav 

let containerBookHeader = document.querySelector(".book-header .container");


let navClone = nav.cloneNode(true);
let modeClone = mode.cloneNode(true);


    if(window.innerWidth > 991){
        containerBookHeader.replaceChild(navClone,mode);
        containerBookHeader.replaceChild(modeClone,nav);
    }
    let newIcon = document.querySelector(".book-header .mode i");

//add dark mode

newIcon.addEventListener("click",()=>{
    if(newIcon.className === "fa-solid fa-moon"){
        document.forms[0].style.boxShadow = "none";
        document.forms[0].style.borderColor = "var(--main-color)";
        newIcon.className = "fa-solid fa-sun";
        newIcon.style.color = "var(--main-color)";
        document.body.style.backgroundColor = "black";
        spTitle.forEach((sp)=>{
            sp.style.color = "white";

        });
    }
    else{
        document.forms[0].style.boxShadow = "0 0 19px 0 #ccc";
        document.forms[0].style.borderColor = "transparent";
        newIcon.className = "fa-solid fa-moon";
        newIcon.style.color= "var(--purpile-color)";
        document.body.style.backgroundColor = "transparent";
        spTitle.forEach((sp)=>{
            sp.style.color = "black";

        });
        
    }
});

//switch toggles + display navbar
let newTogParent = document.querySelector(".book-header .toggle");
let newTog = document.querySelector(".book-header .toggle i");
let newNav = document.querySelector(".book-header ul");

newTogParent.onclick = function(){
    if(newTog.getAttribute("class") === "fa-solid fa-bars"){
        newTog.className = "fa-solid fa-xmark";
        newNav.style.cssText = "opacity: 1; top: calc(100% + 20px); z-index: 1000";
        
    
    }
    else{
        newTog.className = "fa-solid fa-bars";
        newNav.style.cssText = "opacity: 0; z-index: -10; top: -200px";
    }
    };



//start put conditions on inputs 

let inputsBook = document.querySelectorAll(".book .container form input:not([type=\"submit\"])");

// let submitBook = document.querySelector(".book .container form input[type=\"submit\"]");

document.forms[0].addEventListener("submit",(e)=>{
    inputsBook.forEach((input)=>{
        if(input.value.trim() === ""){
            e.preventDefault();
            if(input.nextElementSibling !== null && input.nextElementSibling.tagName === "P"){
                input.nextElementSibling.remove();
            }

            if(input.nextElementSibling === null|| input.nextElementSibling.tagName !== "P"){
                let warning = document.createElement("p");
                warning.innerHTML = `write ${input.dataset.name}`;
                warning.style.cssText = "color: red; text-align: center; margin-bottom: 15px";
                input.after(warning);
            }

            


        }
        else{
           
            if(input.nextElementSibling !== null && input.nextElementSibling.tagName === "P"){
                input.nextElementSibling.remove();
            }

            if(input.classList.contains("phone")){

                let warningTwo = document.createElement("p");
                warningTwo.style.cssText = "color: red; text-align: center; margin-bottom: 15px";

                if(isNaN(+input.value)){
                    console.log("found");
                e.preventDefault();

                warningTwo.innerHTML = `write a Number`;

                input.after(warningTwo);
                
                }
                else{
                    if(input.value.length < 10){
                        e.preventDefault();
                        warningTwo.innerHTML = "write 10 numbers or more";
                        input.after(warningTwo);

                        
                    }
                }
                
                
            }
            if(input.classList.contains("table")){
               if(!(+input.value > 0 && +input.value <= 145)){
                e.preventDefault();
                input.style.borderColor = "red";
               }
               else{
                input.style.borderColor = "#ccc";
               }
            }
            if(input.classList.contains("people")){
                if(!(+input.value > 0 && +input.value <= 10)){
                    e.preventDefault();
                    input.style.borderColor = "red";
                   }
                   else{
                    input.style.borderColor = "#ccc";

                   }
            }

            if(input.classList.contains("email")){
                let warningThree = document.createElement("p");
                warningThree.style.cssText = "color: red; text-align: center; margin-bottom: 15px";
                if(/\w+@\w+\.\w{3,}/.test(input.value) === false){
                    e.preventDefault();
                    warningThree.innerHTML = "Your Have Syntax Error";
                    input.after(warningThree);
                }
            }
        }

    })
});






