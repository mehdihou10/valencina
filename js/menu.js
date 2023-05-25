
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

// Light/dark mode

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

/*start menu*/

let chMenu = document.querySelectorAll(".menu .container .choices .choice");

//add active class on clickable choice element and remove it from the past element who has active class

chMenu.forEach((choice)=>{

    choice.addEventListener("click",()=>{

        chMenu.forEach((el)=>{
            if(el.classList[3] === "active"){
                el.classList.remove("active");
            }
        });
        choice.classList.add("active");
        
    });



});

//change color of choice element in the dark mode

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
     chMenu.forEach((choice)=>{
        choice.style.color = "black";
       
     });
    }
    else{
        chMenu.forEach((choice)=>{
            choice.style.color = "white";
         });
        
    }
});

//change color of prices to white in dark mode 

let priceMenu = document.querySelectorAll(".menu .container .content .info .info-properties .prop-one .price");

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
        priceMenu.forEach((price)=>{
            price.style.color = "black";
        });
     
    }
    else{
        priceMenu.forEach((price)=>{
            price.style.color = "white";
        });
        
    }
});

//select a type of menu

let foodMenu = document.querySelectorAll(".menu .container .content .info");


chMenu.forEach((choice)=>{

    choice.addEventListener("click",(e)=>{
        foodMenu.forEach((food)=>{
            if(e.currentTarget.innerHTML.toLowerCase() === "show all"){
                foodMenu.forEach((fd)=>{
                    fd.style.display = "flex";
                });
            }

           else{
            let booleanMenu = false;
            for(let cl of food.classList){
                if(e.currentTarget.innerHTML.toLowerCase() === cl){
                    booleanMenu = true;
                }
            }
            if(booleanMenu === false){
                food.style.display = "none";
            }
            else{
                food.style.display = "flex";
            }
           }
        });
    });

});

//add buttons to add food to your list

foodMenu.forEach((food)=>{
let sp = document.createElement("span");
sp.innerHTML = "<i class=\"fa-solid fa-plus fa-beat\"></i>";
sp.setAttribute("class","order-food");
food.prepend(sp);


});


//add food to order-list by click

let addFood = document.querySelectorAll(".menu-page .order-food");
let nameFood = document.querySelectorAll(".menu-page .prop-one .name");
let imgsOne = document.querySelectorAll(" .menu .container .content .info img");

let orderList = document.querySelector(".menu-page .order-list .list-content");
let titleOrder = document.querySelector(".menu-page .order-list .order-title");

let emptyList = document.querySelector(".menu-page .order-list p");
let orderBag = document.querySelector(".order-bag");

let mainPrice = document.querySelector(".menu-page .order-list .price");
let Totalprice = document.querySelector(".menu-page .order-list .total");
let foodPrice = document.querySelectorAll(".menu .container .content .price");

let counter = 0;
let sum = 0;

for(let i = 0 ; i< addFood.length ; i++){

addFood[i].addEventListener("click",(e)=>{

emptyList.style.display = "none";
mainPrice.style.display = "block";
orderBag.style.display = "grid";

 let nameInfoOrder = document.querySelectorAll(".menu-page .order-list .list-content .info .name");

   
counter++;

let info = document.createElement("div");
info.className = "info";

let number = document.createElement("span");
number.className = "number";
number.innerHTML = "."+counter;
info.appendChild(number);


let img = e.currentTarget.nextElementSibling.cloneNode(true);
info.appendChild(img);



let name = nameFood[i].cloneNode(true); 
info.appendChild(name);

let quantity = document.createElement("span");
quantity.className = "quantity";
quantity.innerHTML = "1";
info.appendChild(quantity);

let arrMenuInside = [number,quantity];
arrMenuInside.map((el)=>el.style.transition = "var(--main-transition)");

if(modeIcon.className === "fa-solid fa-moon"){
    arrMenuInside.map((el)=>el.style.color = "black");

}
else if(modeIcon.className === "fa-solid fa-sun"){
    arrMenuInside.map((el)=>el.style.color = "white");

}

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
        arrMenuInside.map((el)=>el.style.color = "black");

    }
    else{
        arrMenuInside.map((el)=>el.style.color = "white");
        
    }
});

let remove = document.createElement("span");
remove.className = "remove";
remove.innerHTML = "<i class=\"fa-solid fa-minus fa-beat\"></i>";
info.appendChild(remove);

orderList.appendChild(info);


let quantityInfoOrder = document.querySelectorAll(".menu-page .order-list .list-content .quantity");

    for(let j = 0 ; j < nameInfoOrder.length ; j++){

        if(nameFood[i].innerHTML === nameInfoOrder[j].innerHTML){
           quantityInfoOrder[j].innerHTML++;
           info.remove();
           counter--;

    
        }
    }
  
    
    let imgsTwo = document.querySelectorAll(".menu .container .order-list img");

    
    for(let n = 0 ; n < imgsTwo.length ; n++){

        if(imgsOne[i].src === imgsTwo[n].src){
            sum = sum + +foodPrice[i].innerHTML.slice(1);
            Totalprice.innerHTML = "$" + sum.toFixed(2);
            
            
        }
        
    }

let numbersInfoOrder = document.querySelectorAll(".menu-page .order-list .list-content .number");
let infos = document.querySelectorAll(".menu-page .order-list .list-content .info");

remove.addEventListener("click",()=>{

       quantity.innerHTML--;
       numbersInfoOrder = document.querySelectorAll(".menu-page .order-list .list-content .number");
      
       if(+quantity.innerHTML === 0){

        for(let m = 0 ; m < numbersInfoOrder.length ; m++){
           if(+number.innerHTML.slice(1) < +numbersInfoOrder[m].innerHTML.slice(1)){

            let cut = numbersInfoOrder[m].innerHTML.slice(1);
            cut = + --cut;
            numbersInfoOrder[m].innerHTML = "." + cut;
           }

        }

        info.remove();
        infos = document.querySelectorAll(".menu-page .order-list .list-content .info");
        counter--;

       
        
       } 
      
     
       if(infos.length === 0){
        emptyList.style.display = "block";
        mainPrice.style.display = "none";
        orderBag.style.display = "none";


       }
       for(let n = 0 ; n < imgsTwo.length ; n++){

        if(imgsOne[i].src === imgsTwo[n].src){
            sum = sum - +foodPrice[i].innerHTML.slice(1);
            Totalprice.innerHTML = "$" + sum.toFixed(2);
        }
        
    }

 });


});

}

//add modifications on some elements in dark mode

let arrMenu = [];
arrMenu.push(mainPrice,titleOrder);

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
        arrMenu.map((el)=>el.style.color = "black");
    }
    else{
        arrMenu.map((el)=>el.style.color = "white");
        
    }
});

//add inputs' laws

let phone = document.querySelector(".menu-page .phone");
let position = document.querySelector(".menu-page .position");

phone.onkeyup = function(){
    if(phone.nextElementSibling.tagName === "P"){
        phone.nextElementSibling.remove(); 
    }
    
if(isNaN(+phone.value) || /\d{10,}/.test(phone.value) === false){

    phone.style.borderColor = "red";
}
else{
    phone.style.borderColor = "grey";
    
    phone.onfocus = function(){
        if(isNaN(+phone.value) === false && /\d{10,}/.test(phone.value)){
            phone.style.borderColor = "var(--main-color)";
        }
    }
    phone.onblur = function(){
        if(isNaN(+phone.value) === false && /\d{10,}/.test(phone.value)){
            phone.style.borderColor = "grey";
        }
    }

}
};

position.onkeyup = function(){

    if(position.nextElementSibling.tagName === "P"){
        position.nextElementSibling.remove(); 
    }
if(/\w+/.test(position.value) === false){
position.style.borderColor = "red";
}
else{
    position.style.borderColor = "grey";

    position.onfocus = function(){
        if(/\w+/.test(position.value)){
            position.style.borderColor = "var(--main-color)";

        }
    };
    position.onblur = function(){
        if(/\w+/.test(position.value)){
            position.style.borderColor = "grey";

        }
    };
}
};




//confirm your order

let confirmButton = document.querySelector(".menu-page button");
let popup = document.querySelector(".menu-page .popup");

confirmButton.addEventListener("click",()=>{

if(phone.value === "" && phone.nextElementSibling.tagName !== "P"){
    let warning = document.createElement("p");
    warning.style.cssText = "color: red; text-align: center; margin: 10px 0";
    warning.innerHTML = "Write Your Phone Number";
    phone.after(warning);
    
}
if(position.value === "" && position.nextElementSibling.tagName !== "P"){
    let warning = document.createElement("p");
    warning.style.cssText = "color: red; text-align: center; margin: 10px 0";
    warning.innerHTML = "Write Your Adress";
    position.after(warning);
}

});
let mainPage = document.querySelector(".menu-page .container")
let mainOrder = document.querySelector(".menu-page .order-list");
let over = document.querySelector(".menu-page .over");

confirmButton.addEventListener("click",()=>{
    if(emptyList.style.display === "block"){
        alert("YOU MUST ORDER");
    }
    
    if((phone.value !== "" && phone.style.borderColor !== "red" && position.value !== "" && position.style.borderColor !== "red") && emptyList.style.display !== "block" ){
        position.blur();
        phone.blur();
        setTimeout(()=>{
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth",
            });
        },500);

        orderBag.style.display = "none";
        setTimeout(()=>{
            popup.style.cssText = "opacity: 1; z-index: 9";
            document.body.style.overflow = "hidden";
            over.style.display = "block";
            addFood.forEach((add)=>{
                add.remove();
        });
        },1000);
    
    }

});

/*end menu*/
