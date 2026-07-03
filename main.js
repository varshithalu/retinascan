// ==========================
// THEME TOGGLE
// ==========================

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }

});

// ==========================
// GALLERY
// ==========================

const cards = document.querySelectorAll(".card");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const caption = document.getElementById("lightboxCaption");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// ===================================
// IMAGE DATA
// ===================================

const galleryData = [

{
title:"Doctor Dashboard",

description:"Central dashboard displaying patient statistics, AI screening metrics, retinal analysis summaries and quick actions for ophthalmologists."
},

{
title:"Dashboard Analytics",

description:"Overview of diabetic retinopathy grading, patient distribution, AI predictions and clinical analytics."
},

{
title:"Doctor Login",

description:"Secure authentication portal allowing registered doctors to access RetinaScan AI."
},

{
title:"Patient Dashboard",

description:"Comprehensive patient profile including retinal history, BMI, HbA1c, blood pressure and previous screenings."
},

{
title:"Patient Registration",

description:"Register new patients with demographic details and medical history before retinal screening."
},

{
title:"Patient Report Portal",

description:"Patients can securely access diagnosis, AI confidence score and retinal screening reports."
},

{
title:"AI Lifestyle Recommendations",

description:"Personalized lifestyle guidance generated using retinal screening results and clinical information."
},

{
title:"Doctor Report & Grad-CAM",

description:"Detailed medical report containing AI diagnosis, Grad-CAM visualization, confidence score and downloadable PDF."
},

{
title:"Fundus Scan Upload",

description:"Upload retinal fundus images for automated diabetic retinopathy detection using deep learning."
},

{
title:"Doctor Registration",

description:"Create secure doctor accounts with role-based authentication and access management."
}

];

// ==========================

function openImage(index){

    currentIndex = index;

    lightboxImg.src =
        cards[index].querySelector("img").src;

    caption.innerHTML = `

        <h2>${galleryData[index].title}</h2>

        <p>${galleryData[index].description}</p>

    `;

    lightbox.classList.add("show");

}

// ==========================

cards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        openImage(index);

    });

});

// ==========================

function nextImage(){

    currentIndex++;

    if(currentIndex>=cards.length){

        currentIndex=0;

    }

    openImage(currentIndex);

}

// ==========================

function prevImage(){

    currentIndex--;

    if(currentIndex<0){

        currentIndex=cards.length-1;

    }

    openImage(currentIndex);

}

nextBtn.addEventListener("click",nextImage);

prevBtn.addEventListener("click",prevImage);

// ==========================

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

// ==========================

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

});

// ==========================

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("show");

    }

    if(e.key==="ArrowRight"){

        nextImage();

    }

    if(e.key==="ArrowLeft"){

        prevImage();

    }

});

// ==========================
// PREVENT IMAGE DRAGGING
// ==========================

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("draggable","false");

});