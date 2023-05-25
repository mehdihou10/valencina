
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


window.onscroll = function(){

    if(window.scrollY >=50){
        document.getElementsByTagName("header")[0].style.cssText= "background-color: black; border-bottom: 2px solid var(--main-color)";
        modeIcon.style.setProperty("visibility","visible");
        modeIcon.style.setProperty("cursor","pointer");
    }
    else{
        document.getElementsByTagName("header")[0].style.cssText= "background-color: transparent; border-bottom: none";
        modeIcon.style.setProperty("visibility","hidden");
        modeIcon.style.setProperty("cursor","initial");
    }
}


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

/*start landing*/
let lines = document.querySelectorAll(".page-one .lines .line");
let pageOne = document.querySelector(".page-one");

let j = 0;




//change the active + change background (click+lines)

let imgsPageOne = document.querySelectorAll(".page-one .page-one-cover img");


for(let i = 0 ; i < lines.length ; i++){
lines[i].onclick = function(){
    lines.forEach((line)=>{

        if(line.classList[1] === "active"){
            line.classList.remove("active");
        }
    });

    lines[i].classList.add("active");
    imgsPageOne.forEach((img)=>img.style.opacity = "0");
    imgsPageOne[i].style.opacity = "1";

    j=i;
}
}


//change the active + change background (lines+automaticly)
setInterval(function(){
    j++;
    
    if(j === 3){
        j=0;
    }
    
    lines.forEach((line)=>{
        if(line.classList[1] === "active"){
            line.classList.remove("active");
        }
    });
    lines[j].classList.add("active");
    imgsPageOne.forEach((img)=>img.style.opacity = "0");
    imgsPageOne[j].style.opacity = "1";
    
    
    },5000);
//change background by arrows

let arrowLeft = document.querySelector(".page-one .arrow.left");
let arrowRight = document.querySelector(".page-one .arrow.right");



arrowRight.addEventListener("click",()=>{
    
        j++;

        if(j === 3){
            j=0;
        }
        lines.forEach((line)=>{
            if(line.classList[1] === "active"){
                line.classList.remove("active");
            }
        });
        lines[j].classList.add("active");
        imgsPageOne.forEach((img)=>img.style.opacity = "0");
        imgsPageOne[j].style.opacity = "1";

    });


arrowLeft.addEventListener("click",()=>{
    j--;

    if(j === -1){
        j=2;
    }
    lines.forEach((line)=>{
        if(line.classList[1] === "active"){
            line.classList.remove("active");
        }
    });
    lines[j].classList.add("active");
    imgsPageOne.forEach((img)=>img.style.opacity = "0");
    imgsPageOne[j].style.opacity = "1";

});


/*end landing*/

/*start about*/

let wlAbout = document.querySelector(".about .container .content-two h1");
let spAbout = document.querySelectorAll(".about .container .content-two .informations .info .expression span:last-child");
let imgsAbout = document.querySelectorAll(".about .container .content-one img");

//change colors in dark mode


let arrAbout = [wlAbout,spAbout[0],spAbout[1]];
modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
        for(let elAbout of arrAbout){
            elAbout.style.cssText = "color: black; transition: var(--main-transition)";
        }

        imgsAbout.forEach((img)=>{
            img.style.cssText = "border: 3px solid transparent; transition: var(--main-transition)";
        });
    }
    else{
        for(let elAbout of arrAbout){
            elAbout.style.cssText = "color: white;";
        }

        imgsAbout.forEach((img)=>{
            img.style.cssText = "border: 3px solid var(--main-color);";
        });
        
    }
});


/*end about*/

/*start features*/

//add number of feature 

let numsFeatures = document.querySelectorAll(".features .container .content .box .feature-number");
for(let i in numsFeatures){
    if(i < 9){
        numsFeatures[i].innerHTML = "0"+ ++i;
    }
    else{
        numsFeatures[i].innerHTML = ++i;
    }
}

//remove box shadow in dark mode and do it as hover

let boxsFeatures = document.querySelectorAll(".features .container .content .box");

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
        
    boxsFeatures.forEach((box)=>{
        box.style.boxShadow = "0 0 15px 1px #ccc";
        box.onmouseleave = function(){
            box.style.boxShadow = "0 0 15px 1px #ccc";
            };

    });
    }
    else{

        boxsFeatures.forEach((box)=>{
            box.style.boxShadow = "none";
            
                box.onmouseenter = function(){
                    box.style.boxShadow = "0 0 15px 1px #ccc";
                };
                box.onmouseleave = function(){
                box.style.boxShadow = "none";
                };
            
           

        }); 
    }
});

/*end features*/

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
                    fd.style.display = "block";
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
                food.style.display = "block";
            }
           }
        });
    });

});


/*end menu*/

/* start specials*/

//put changable colors in array and change their color in dark mode

let specials = document.querySelector(".specials");
let lisSpecials = document.querySelectorAll(".specials .container .content ul li");
let childTitleSpecials = document.querySelectorAll(".specials .container .content .description h4");
let imgSpecials = document.querySelectorAll(".specials .container .content img");



let changeColorSp = [];

lisSpecials.forEach((li)=>{
changeColorSp.push(li);
});

childTitleSpecials.forEach((title)=>{
    changeColorSp.push(title);
});

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
       changeColorSp.map((el)=>el.style.color = "black");

       imgSpecials.forEach((el)=>el.style.border = "4px solid transparent");

       specials.style.backgroundColor = "white";
    }
    else{
       changeColorSp.map((el)=>el.style.color = "white");

       imgSpecials.forEach((el)=>el.style.border = "4px solid var(--main-color)");

       specials.style.backgroundColor = "black";
        
    }
});

// change active class by click

lisSpecials.forEach((li)=>{

    li.addEventListener("click",(e)=>{
        lisSpecials.forEach((liDel)=>{
            if(liDel.classList.contains("active")){
                liDel.classList.remove("active");
            }
        });
        
        e.currentTarget.classList.add("active");
    });
});

//change content by click on li's

let contentsSpecials = document.querySelectorAll(".specials .container .content .child-content");

lisSpecials.forEach((li)=>{

    li.addEventListener("click",(e)=>{
        contentsSpecials.forEach((content)=>{
            if(content.classList[content.classList.length - 1] === e.currentTarget.classList[0]){
                content.style.cssText = "display: flex !important;";
            }
            else{
                content.style.cssText = "display: none !important;";
            }
        });
    });
});

/* end specials*/

/* start events */


//change the active class in dots by click

let dotsEvents = document.querySelectorAll(".events .container .dots .dot");

let contentEvent = document.querySelectorAll(".events .container .content");


let jEvents = 0;

for(let i = 0 ; i <dotsEvents.length ; i++){

    dotsEvents[i].addEventListener("click",(e)=>{
        dotsEvents.forEach((dotDel)=>{
            if(dotDel.classList.contains("active")){
                dotDel.classList.remove("active");
            }
        });
        e.currentTarget.classList.add("active");
        jEvents = i;

        contentEvent.forEach((content)=>{
            content.style.display = "none";
        });
        contentEvent[jEvents].style.display = "flex";
    });
};

//change the active class in dots + change content automaticly

setInterval(()=>{
    jEvents++;
    if(jEvents === 3){
        jEvents = 0;
    }

    dotsEvents.forEach((dotDel)=>{
        if(dotDel.classList.contains("active")){
            dotDel.classList.remove("active");
        }
    });

    contentEvent.forEach((content)=>{
        content.style.display = "none";
    });

    dotsEvents[jEvents].classList.add("active");
    contentEvent[jEvents].style.display = "flex";

},5000);

//add border-top in dark mode to events div 


let events = document.querySelector(".events");

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
        events.style.borderTop = "none";
        events.style.borderBottom = "none";

    }
    else{    
        events.style.borderTop = "4px solid var(--main-color)";
        events.style.borderBottom = "4px solid var(--main-color)";


    }
});

/* end events */

/* start gallery */

//add border on images in dark mode

let imgGallery = document.querySelectorAll(".gallery .image");

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
       imgGallery.forEach((img)=>{
        img.style.border = "none";
       });

    }
    else{    
        imgGallery.forEach((img)=>{
            img.style.border = "3px solid var(--main-color)";
           });

    }
});

//see more or see less by click

let buttonGallery = document.querySelector(".gallery button");

buttonGallery.addEventListener("click",(e)=>{

    if(e.currentTarget.innerHTML.toLowerCase() === "see more"){
        imgGallery.forEach((img)=>{
            if(img.classList.contains("deleted")){
                img.style.display = "block";
            }
        });
        e.currentTarget.innerHTML = "see less";
    }
   
    else{
        imgGallery.forEach((img)=>{
            if(img.classList.contains("deleted")){
                img.style.display = "none";

            }
        });
        e.currentTarget.innerHTML = "see more";
    }

});


/* end gallery */

/* start testimonials*/

window.localStorage.clear();

let dotsTestimonials = document.querySelectorAll(".testimonials .container .dots .dot");
let contentTestimonials = document.querySelectorAll(".testimonials .container .content");
let dotPrincipalTestimonials = document.querySelector(".testimonials .container .dots");
let contentsTestimonials = document.querySelector(".testimonials .container .contents");
let jTestimonials = 0;




if(window.localStorage.getItem("content")){
    document.getElementById("add-comment-hide").remove();
    let contents = document.querySelector(".testimonials .container .contents");
    let contentAdd = document.createElement("div");
    contentAdd.className = "content";
    contentAdd.innerHTML = window.localStorage.getItem("content");
    contents.appendChild(contentAdd);
    contentAdd.style.display = "none";

    let dots = document.querySelector(".testimonials .container .dots");
    let dotAdd = document.createElement("div");
    dotAdd.className = "dot";
    dots.appendChild(dotAdd);
    
     dotsTestimonials = document.querySelectorAll(".testimonials .container .dots .dot");
     contentTestimonials = document.querySelectorAll(".testimonials .container .content");
     dotPrincipalTestimonials = document.querySelector(".testimonials .container .dots");
     contentsTestimonials = document.querySelector(".testimonials .container .contents");
    movingTestimonials();

    movingelemntsAutomaticly() 
}


else{
    movingTestimonials();
    //slider in (dots+contents) authomaticly
    
   let c =  setInterval(()=>{
        
    jTestimonials++;
    
    if(jTestimonials === dotsTestimonials.length){
        jTestimonials = 0;
    }
    
    dotsTestimonials.forEach((dotDel)=>{
    
        if(dotDel.classList.contains("active")){
            dotDel.classList.remove("active");
        }
    
    });
    
    contentTestimonials.forEach((content)=>{
        content.style.display = "none";
    });
    
    dotsTestimonials[jTestimonials].classList.add("active");
    contentTestimonials[jTestimonials].style.display = "block";
    
    },5000); 
    
    //show form and hide add comment button
    
    let addCommentTestimonials = document.getElementById("add-comment-hide");
    let addClassTestimonials = document.querySelector(".testimonials .container .add");
    
    addCommentTestimonials.onclick = function(){
    addClassTestimonials.style.display = "block";
    addCommentTestimonials.remove();
    };
    
    //add rating by click after form in add class
    let starsAddTestimonials = document.querySelectorAll(".testimonials .container .add .add-rating .icons i");
    
    for(let i = 0 ; i< starsAddTestimonials.length ; i++){
        starsAddTestimonials[i].onclick = function(){
            starsAddTestimonials.forEach((star)=>{
                if(star.classList.contains("active")){
                    star.classList.remove("active");
                }
            });
            for(let j = 0 ; j<=i ; j++){
                starsAddTestimonials[j].classList.add("active");
            }
        };
    }
    
    
    //add person comment to testimonials list by click in add comment button
    let addTestimonials = document.getElementById("add-comment");
    
    
    addTestimonials.addEventListener("click",()=>{
    let selectGenderTestimonials = document.querySelector(".testimonials .container .add select"); 
    let firstNameTestimonials = document.querySelector(".testimonials .container .add .first-name");
    let LastNameTestimonials = document.querySelector(".testimonials .container .add .last-name");
    let JobNameTestimonials = document.querySelector(".testimonials .container .add .career");
    let ratingAddTestimonials = document.querySelector(".testimonials .container .add .add-rating .icons");
    let textAddTestimonials = document.querySelector(".testimonials .container .add textarea");
    
    
    let contentAddTestimonials = document.createElement("div");
    contentAddTestimonials.className = "content";
    
    
    let imgTestimonials = document.createElement("img");
    
    if(selectGenderTestimonials.value.toLowerCase() === "male"){
    imgTestimonials.src = "img/testimonials/anonymous.png";
    }
    else{
    imgTestimonials.src = "img/testimonials/anonymous-female.png";
    }


    
    imgTestimonials.alt = "client";
    contentAddTestimonials.appendChild(imgTestimonials);
    
    
    let spanNameTestimonials = document.createElement("span");
    spanNameTestimonials.setAttribute("class","name");
    spanNameTestimonials.innerHTML = `${firstNameTestimonials.value} ${LastNameTestimonials.value}`;
    contentAddTestimonials.appendChild(spanNameTestimonials);
    
    
    let spanJobTestimonials = document.createElement("span");
    spanJobTestimonials.className = "job";
    spanJobTestimonials.innerHTML = JobNameTestimonials.value;
    contentAddTestimonials.appendChild(spanJobTestimonials);
    
    
    let ratingTestimonials = document.createElement("div");
    ratingTestimonials.className = "rating";
    ratingTestimonials.innerHTML = ratingAddTestimonials.innerHTML;
    contentAddTestimonials.appendChild(ratingTestimonials);
    
    
    let paragraphTestimonials = document.createElement("p");
    paragraphTestimonials.className = "client-feedback";
    paragraphTestimonials.innerHTML = textAddTestimonials.value;
    contentAddTestimonials.appendChild(paragraphTestimonials);
    
    if(modeIcon.className === "fa-solid fa-moon"){
        paragraphTestimonials.style.color = "black";
        spanNameTestimonials.style.color = "black";  
    }

    else if(modeIcon.className === "fa-solid fa-sun"){
        paragraphTestimonials.style.color = "white";
        spanNameTestimonials.style.color = "white";  
    }

    modeIcon.addEventListener("click",()=>{
        if(modeIcon.className === "fa-solid fa-moon"){
            paragraphTestimonials.style.color = "black";
            spanNameTestimonials.style.color = "black";
        }
        else{    
            paragraphTestimonials.style.color = "white";
            spanNameTestimonials.style.color = "white";
        }
    });
    
    
    let textsTestimonials = document.querySelectorAll(".testimonials .container .add form input,.testimonials .container .add form textarea");
    
    let booleanTestimonials = true;
    textsTestimonials.forEach((text)=>{
    text.style.position = "relative";
    if(text.value.trim() === ""){
        booleanTestimonials = false;
        if(text.nextElementSibling === null || text.nextElementSibling.tagName.toLowerCase() !== "p"){
            let warningTestimonials = document.createElement("p");
            warningTestimonials.innerHTML = `Write Your ${text.dataset.name}`;
            warningTestimonials.style.cssText = "color: red; text-align: center; margin-bottom: 20px";
            text.after(warningTestimonials);
        }
        
    
    }
    else{
        if(text.nextElementSibling!== null && text.nextElementSibling.tagName.toLowerCase() === "p"){
            text.nextElementSibling.remove();
        }
    }
    });
    if(booleanTestimonials === true){
    
    let dotAddTestimonials = document.createElement("div");
    dotAddTestimonials.className = "dot";
    dotPrincipalTestimonials.appendChild(dotAddTestimonials);
    
        contentsTestimonials.appendChild(contentAddTestimonials);
        contentAddTestimonials.style.display = "none";
        
        window.localStorage.setItem("content",contentAddTestimonials.innerHTML);

        //add new (content+dot) in the list
        
        dotsTestimonials = document.querySelectorAll(".testimonials .container .dots .dot");
        contentTestimonials = document.querySelectorAll(".testimonials .container .content");
        movingTestimonials();
        clearInterval(c);
        //slider in dots authomaticly
        movingelemntsAutomaticly()
    
            
    
            fakeAlert("Your Comment has Added,Thank You for Sharing your Opinion !");
            
    }
    
    
    });
    
    //function to add a fake alert
    function fakeAlert(para){
    
    let confirmationTextTestimonials = document.createElement("p");
    confirmationTextTestimonials.innerHTML = para;
    confirmationTextTestimonials.style.cssText = "color: var(--main-color); text-align: center; margin-top: 20px; line-height: 1.6";
    
    
    setTimeout(()=>{
    document.querySelector(".testimonials .container").replaceChild(confirmationTextTestimonials,addClassTestimonials);
    },200);
    
    setTimeout(()=>{
    confirmationTextTestimonials.remove();
    },10000);
    }
}


//function for do moving at dots and contents by click
function movingTestimonials(){
    //add quote symboles in the start/end of the clients feedback paragraph
    
    let paragraphTestimonials = document.querySelectorAll(".testimonials .container .content .client-feedback");
    
    
    paragraphTestimonials.forEach((para)=>{
    if(para.children.length < 2){
        let quoteStart = document.createElement("i");
        quoteStart.className = "fa-solid fa-quote-left";
        
        let quoteEnd = document.createElement("i");
        quoteEnd.className = "fa-solid fa-quote-right";
        
        
        para.prepend(quoteStart);
        para.append(quoteEnd);
    }
    
    });
    
    
    
    // slider in dots by click
    
    
    for(let i = 0 ; i < dotsTestimonials.length ; i++){
    
    dotsTestimonials[i].addEventListener("click",(e)=>{
    
    dotsTestimonials.forEach((dotDel)=>{
    
    if(dotDel.classList.contains("active")){
        dotDel.classList.remove("active");
    }
    
    });
    
    contentTestimonials.forEach((content)=>{
        content.style.display = "none";
    });
    e.currentTarget.classList.add("active");
    contentTestimonials[i].style.display = "block";
    jTestimonials = i;
    });
    
    }
    }

//function for do moving at dots and contents authomaticly

function movingelemntsAutomaticly(){
    setInterval(()=>{
        
        jTestimonials++;
        
        if(jTestimonials === dotsTestimonials.length){
            jTestimonials = 0;
        }
        
        dotsTestimonials.forEach((dotDel)=>{
        
            if(dotDel.classList.contains("active")){
                dotDel.classList.remove("active");
            }
        
        });
        
        contentTestimonials.forEach((content)=>{
            content.style.display = "none";
        });
        
        dotsTestimonials[jTestimonials].classList.add("active");
        contentTestimonials[jTestimonials].style.display = "block";
        
        },5000); 
}

//add dark mode modifications
let testimonials = document.querySelector(".testimonials");
let overlayTestimonials = document.querySelector(".testimonials .overlay");
let opinionsTestimonials = document.querySelectorAll(".testimonials .container .client-feedback");
let namesTestimonials = document.querySelectorAll(".testimonials .container .name");
let genderTestimonials = document.querySelector(".testimonials .container form .gender h3");
let ratingTitleTestimonials = document.querySelector(".testimonials .container .add .add-rating span");
let starsSecondTestimonials = document.querySelectorAll(".testimonials .container .add .add-rating .icons i");

let arrTestimonials = [];
arrTestimonials.push(genderTestimonials,ratingTitleTestimonials);
opinionsTestimonials.forEach((text)=>arrTestimonials.push(text));
namesTestimonials.forEach((name)=>arrTestimonials.push(name));

modeIcon.addEventListener("click",()=>{
    if(modeIcon.className === "fa-solid fa-moon"){
        overlayTestimonials.style.backgroundColor = "rgb(255 255 255 / 74%)";
        arrTestimonials.map((el)=>el.style.color = "black");
        dotsTestimonials.forEach((dot)=>dot.style.backgroundColor = "grey");
        starsSecondTestimonials.forEach((star)=>star.style.color = "grey");
        
    }
    else{    
        overlayTestimonials.style.backgroundColor = "rgb(0 0 0 / 90%)";
        arrTestimonials.map((el)=>el.style.color = "white");
        dotsTestimonials.forEach((dot)=>dot.style.backgroundColor = "rgba(255, 255, 255, 0.5)");
        starsSecondTestimonials.forEach((star)=>star.style.color = "rgba(255, 255, 255, 0.5)");


    }
});

/* end testimonials*/



