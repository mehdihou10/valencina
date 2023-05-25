/* start header */

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


//window scroll and change header background + light/dark mode in body and special-title

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


/* end header */

/*start about*/

let wlAbout = document.querySelector(".about .container .content-two h1");
let spAbout = document.querySelectorAll(".about .container .content-two .informations .info .expression span:last-child");
let imgsAbout = document.querySelectorAll(".about .container .content-one img,.second-about img");
let textsAbout = document.querySelectorAll(".second-about .container .content .description,.second-about .container .content ul li");

//change colors in dark mode


let arrAbout = [wlAbout,spAbout[0],spAbout[1]];

textsAbout.forEach((text)=>arrAbout.push(text));

arrAbout.map((el)=>el.style.transition = "var(--main-transition)");


modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
        for(let elAbout of arrAbout){
            elAbout.style.color = "black";
        }

        imgsAbout.forEach((img)=>{
            img.style.border = "3px solid transparent";
        });
    }
    else{
        for(let elAbout of arrAbout){
            elAbout.style.color = "white";

        }

        imgsAbout.forEach((img)=>{
            img.style.border = "3px solid var(--main-color)";

        });
        
    }
});


/*end about*/