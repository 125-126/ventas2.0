/* =====================================================
   ZAVITA
   APP.JS
   SISTEMA DE INTERACCIONES PREMIUM v3
===================================================== */


document.addEventListener("DOMContentLoaded",()=>{


/* ==========================
   VARIABLES
========================== */


const header = document.getElementById("header");

const menu = document.getElementById("menu");

const nav = document.getElementById("nav");

const navLinks = document.querySelectorAll("nav a");

const scrollTopBtn = document.getElementById("scrollTop");

const loader = document.querySelector(".loader");

const heroImage = document.querySelector(".hero-image");

const whatsapp = document.querySelector(".whatsapp");




/* =====================================================
   LOADER FIX ZAVITA
===================================================== */


if(loader){

setTimeout(()=>{

loader.classList.add("hide");

},2500);


}




/* =====================================================
   HEADER SCROLL
===================================================== */


window.addEventListener("scroll",()=>{


if(header){

if(window.scrollY > 50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

}


});




/* =====================================================
   MENU MOBILE
===================================================== */


if(menu && nav){


menu.addEventListener("click",()=>{


nav.classList.toggle("active");

menu.classList.toggle("open");


});


}




navLinks.forEach(link=>{


link.addEventListener("click",()=>{


if(nav){

nav.classList.remove("active");

}


if(menu){

menu.classList.remove("open");

}


});


});





/* =====================================================
   SCROLL SUAVE
===================================================== */


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target=document.querySelector(
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





/* =====================================================
   REVEAL ANIMATIONS
===================================================== */


const revealElements=document.querySelectorAll(

".about-box, .product-card, .why-card, .stat, .cta-content"

);



if("IntersectionObserver" in window){


const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:.15

});



revealElements.forEach(element=>{


element.classList.add("reveal");

observer.observe(element);


});


}


/* =====================================================
   BACK TO TOP
===================================================== */


if(scrollTopBtn){


window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


scrollTopBtn.classList.add("active");


}else{


scrollTopBtn.classList.remove("active");


}


});




scrollTopBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}




/* =====================================================
   HERO PARALLAX
===================================================== */


if(heroImage){


window.addEventListener("scroll",()=>{


const movement = window.scrollY * 0.08;


heroImage.style.transform =
`translateY(${movement}px)`;


});


}






/* =====================================================
   CARD HOVER 3D
===================================================== */


const cards=document.querySelectorAll(
".product-card, .why-card"
);



cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const box=card.getBoundingClientRect();


const x=e.clientX-box.left;

const y=e.clientY-box.top;


const rotateX =
-(y-box.height/2)/25;


const rotateY =
(x-box.width/2)/25;



card.style.transform=
`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)
`;



});





card.addEventListener("mouseleave",()=>{


card.style.transform="";


});


});






/* =====================================================
   WHATSAPP PULSE
===================================================== */


if(whatsapp){


setInterval(()=>{


whatsapp.classList.toggle("pulse");


},2500);


}






/* =====================================================
   FOOTER YEAR AUTOMATICO
===================================================== */


const year=new Date().getFullYear();


const copyright=document.querySelector(".copyright");


if(copyright){


copyright.innerHTML=

`
© ${year} ZAVITA.
Todos los derechos reservados.
`;


}






/* =====================================================
   IMAGENES LAZY LOAD
===================================================== */


const images=document.querySelectorAll("img");


images.forEach(img=>{


if(!img.hasAttribute("loading")){


img.setAttribute(
"loading",
"lazy"
);


}


});







/* =====================================================
   ACTIVE MENU LINK
===================================================== */


const sections=document.querySelectorAll(
"section[id]"
);



window.addEventListener("scroll",()=>{


let scrollPosition=window.scrollY+150;



sections.forEach(section=>{


const sectionTop=section.offsetTop;

const sectionHeight=section.offsetHeight;

const sectionId=section.id;



if(
scrollPosition >= sectionTop &&
scrollPosition <= sectionTop+sectionHeight
){



navLinks.forEach(link=>{


link.classList.remove("active");



if(
link.getAttribute("href")==="#"+sectionId
){


link.classList.add("active");


}


});


}



});


});


   /* =====================================================
   CURSOR EFFECT
===================================================== */


const buttons=document.querySelectorAll(
".btn-primary, .btn-secondary, .product-card"
);



buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{


button.style.transition=".3s ease";


});


});






/* =====================================================
   CONTROL PESTAÑA OCULTA
===================================================== */


document.addEventListener(
"visibilitychange",
()=>{


if(document.hidden){


document.body.classList.add(
"page-hidden"
);


}else{


document.body.classList.remove(
"page-hidden"
);


}


});






/* =====================================================
   PROTECCION CONTRA ERRORES
===================================================== */


window.addEventListener(
"error",
(event)=>{


console.warn(
"ZAVITA SYSTEM:",
event.message
);


});







/* =====================================================
   SISTEMA LISTO
===================================================== */


console.log(
"ZAVITA SYSTEM ONLINE ✓"
);



});
/* =====================================================
   FIN APP.JS
===================================================== */                       
