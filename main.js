const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
        toggle.innerHTML="☀️";
    }else{
        localStorage.setItem("theme","dark");
        toggle.innerHTML="🌙";
    }

});

if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light");
    toggle.innerHTML="☀️";
}

const cards = document.querySelectorAll(".card");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const caption = document.getElementById("lightboxCaption");

let currentIndex = 0;

cards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        currentIndex=index;

        lightboxImg.src =
            card.querySelector("img").src;

        caption.innerText =
            card.querySelector("h3").innerText;

        lightbox.classList.add("show");

    });

});

function updateImage(){

    const card = cards[currentIndex];

    lightboxImg.src =
        card.querySelector("img").src;

    caption.innerText =
        card.querySelector("h3").innerText;

}

document.querySelector(".next")
.addEventListener("click",()=>{

    currentIndex =
        (currentIndex + 1) % cards.length;

    updateImage();

});

document.querySelector(".prev")
.addEventListener("click",()=>{

    currentIndex =
        (currentIndex - 1 + cards.length) % cards.length;

    updateImage();

});

document.querySelector(".close")
.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){
        lightbox.classList.remove("show");
    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){
        lightbox.classList.remove("show");
    }

    if(lightbox.classList.contains("show")){

        if(e.key==="ArrowRight"){
            document.querySelector(".next").click();
        }

        if(e.key==="ArrowLeft"){
            document.querySelector(".prev").click();
        }

    }

});