/* =====================================================
   ZAVITA
   APP.JS
   SISTEMA DE INTERACCIONES
===================================================== */


/* ==========================
   VARIABLES
========================== */


const header = document.getElementById("header");

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav");

const navLinks = document.querySelectorAll("nav a");

const scrollTopBtn = document.getElementById("scrollTop");





/* ==========================
   LOADER
========================== */


window.addEventListener("load",()=>{


    const loader =
    document.querySelector(".loader");


    setTimeout(()=>{


        loader.style.opacity="0";


        loader.style.visibility="hidden";


    },800);


});







/* ==========================
   HEADER SCROLL
========================== */


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.classList.add("scrolled");


    }

    else{


        header.classList.remove("scrolled");


    }


});







/* ==========================
   MENU MOBILE
========================== */


if(menu){


menu.addEventListener("click",()=>{


    nav.classList.toggle("active");


    menu.classList.toggle("open");


});



}





/* CERRAR MENU AL NAVEGAR */


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        nav.classList.remove("active");


    });


});







/* ==========================
   SCROLL SUAVE
========================== */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


    const target =
    document.querySelector(
    this.getAttribute("href")
    );


    if(target){


        e.preventDefault();


        target.scrollIntoView({


            behavior:"smooth",

            block:"start"


        });


    }


});


});







/* ==========================
   COUNTERS
========================== */


const counters =
document.querySelectorAll(".counter");



let started=false;



function startCounters(){


    if(started) return;


    counters.forEach(counter=>{


        const target =
        +counter.dataset.target;


        let count=0;



        const speed =
        target / 80;



        const update=()=>{


            count += speed;


            if(count < target){


                counter.innerText =
                Math.floor(count);


                requestAnimationFrame(update);


            }


            else{


                counter.innerText =
                target + "+";


            }


        };


        update();



    });


    started=true;


}






window.addEventListener("scroll",()=>{


    const stats =
    document.querySelector(".statistics");


    if(stats){


        const position =
        stats.getBoundingClientRect()
        .top;


        if(position <
        window.innerHeight - 150){


            startCounters();


        }


    }


});







/* ==========================
   SCROLL REVEAL
========================== */


const revealElements =
document.querySelectorAll(
".about-box, .product-card, .why-card, .stat, .cta-content"
);



const revealObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("reveal");


        setTimeout(()=>{


            entry.target.classList.add("show");


        },100);


    }


});


},
{


threshold:.15


});




revealElements.forEach(el=>{


    revealObserver.observe(el);


});







/* ==========================
   BUTTON BACK TOP
========================== */


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        scrollTopBtn.classList.add("active");


    }

    else{


        scrollTopBtn.classList.remove("active");


    }


});




if(scrollTopBtn){


scrollTopBtn.addEventListener("click",()=>{


    window.scrollTo({


        top:0,

        behavior:"smooth"


    });


});


}







/* ==========================
   HERO PARALLAX
========================== */


const heroImage =
document.querySelector(".hero-image");



window.addEventListener("scroll",()=>{


    if(heroImage){


        let offset =
        window.scrollY * .15;



        heroImage.style.transform =
        `translateY(${offset}px)`;


    }


});







/* ==========================
   CARD TILT EFFECT
========================== */


const cards =
document.querySelectorAll(
".product-card, .why-card"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;



const y =
e.clientY - rect.top;



const rotateY =
(x - rect.width/2)/20;



const rotateX =
-(y - rect.height/2)/20;



card.style.transform =

`
perspective(700px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)
`;



});




card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});


});







/* ==========================
   WHATSAPP MICRO EFFECT
========================== */


const whatsapp =
document.querySelector(".whatsapp");



if(whatsapp){


setInterval(()=>{


whatsapp.classList.toggle("pulse");


},2500);


}







/* ==========================
   CURRENT YEAR FOOTER
========================== */


const year =
new Date().getFullYear();



const copyright =
document.querySelector(".copyright");



if(copyright){


copyright.innerHTML =

`
© ${year} ZAVITA.
Todos los derechos reservados.
`;


}







/* =====================================================
   END APP.JS
===================================================== */