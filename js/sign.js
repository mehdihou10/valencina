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
let logoIcon = document.querySelector(".sign .container i");
let title = document.querySelector(".sign .container .description");

let arrSign = [logoIcon,title];

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
        modeIcon.className = "fa-solid fa-sun";
        modeIcon.style.color = "var(--main-color)";
        document.body.style.backgroundColor = "black";
        arrSign.map((el)=>el.style.color = "white");
       
    }
    else{
        modeIcon.className = "fa-solid fa-moon";
        modeIcon.style.color= "var(--purpile-color)";
        document.body.style.backgroundColor = "transparent"; 
        arrSign.map((el)=>el.style.color = "black");

    }
});

