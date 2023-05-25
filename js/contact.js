

//switch toggles + display navbar

let togParent = document.querySelector("header .toggle");
let tog = document.querySelector("header .toggle i");
let nav = document.querySelector("header ul");
let conLanding = document.querySelector(".landing .container");


togParent.onclick = function(){
if(tog.getAttribute("class") === "fa-solid fa-bars"){
    tog.className = "fa-solid fa-xmark";
    nav.style.cssText = "opacity: 1; top: calc(100% + 20px); z-index: 1000";
    

}
else{
    tog.className = "fa-solid fa-bars";
    nav.style.cssText = "opacity: 0; z-index: -10; top: -200px";
}
};


//light/dark mode in body and special-title

let mode = document.querySelector("header .container .mode");
let modeIcon = document.querySelector("header .container .mode i");
let spTitle = document.querySelectorAll(".special-title");

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
        modeIcon.className = "fa-solid fa-sun";
        modeIcon.style.color = "var(--main-color)";
        document.body.style.backgroundColor = "black";
        spTitle.forEach((sp)=>{
            sp.style.color = "white";

        });
    }
    else{
        modeIcon.className = "fa-solid fa-moon";
        modeIcon.style.color= "var(--purpile-color)";
        document.body.style.backgroundColor = "transparent";
        spTitle.forEach((sp)=>{
            sp.style.color = "black";

        });
        
    }
});

//switch between form and map by click

let btns = document.querySelectorAll(".contact .container .buttons span");
let parentContent = document.querySelector(".contact .container .parent-content");

for(let i = 0 ; i< btns.length ; i++){
    btns[i].addEventListener(("click"),(e)=>{
        btns.forEach((btnDel)=>{
            if(btnDel.classList.contains("active")){
                btnDel.classList.remove("active");
            }
        });
        e.currentTarget.classList.add("active");
        for(let j = 0 ; j < parentContent.children.length;j++){
            if(i === j){
                parentContent.children[j].style.display = "block";
            }
            else{
                parentContent.children[j].style.display = "none";
            }
        }
        
    });
    
}
//change the style of form in dark mode
let contentOne = parentContent.children[0];

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
       contentOne.style.overflow = "visible";
    }
    else{
        contentOne.style.overflow = "hidden";
        
    }
});

let email = document.querySelector(".contact .container .content-one form .email");

email.onkeyup = function(){
    if(/\w+@\w+\.\w{3,}/.test(email.value) === false){
        email.style.setProperty("border-color","red","important");
    }
    else{
        email.style.borderColor = "#ccc";
       email.addEventListener("focus",()=>{
        if(/\w+@\w+\.\w{3,}/.test(email.value)){
            email.style.borderColor = "var(--main-color)";
        }
       });

       email.addEventListener("blur",()=>{
        if(/\w+@\w+\.\w{3,}/.test(email.value)){
            email.style.borderColor = "#ccc";
        }

       });
    }
    };

 

document.forms[0].addEventListener("submit",(e)=>{

   if(email.style.borderColor === "red"){
    e.preventDefault();
    
   }
});



