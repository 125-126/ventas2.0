/* =====================================================
   ZAVITA
   APP.JS
   SISTEMA INTERACCIONES PREMIUM v4
===================================================== */


document.addEventListener("DOMContentLoaded",()=>{


/* ==========================
   VARIABLES
========================== */


const header=document.querySelector("#header");
const menu=document.querySelector("#menu");
const nav=document.querySelector("#nav");
const navLinks=document.querySelectorAll("nav a");

const loader=document.querySelector(".loader");

const scrollTop=document.querySelector("#scrollTop");

const heroImage=document.querySelector(".hero-image");



/* =====================================================
   LOADER
===================================================== */


if(loader){

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.classList.add("hide");

},800);

});

}




/* =====================================================
   HEADER SCROLL
===================================================== */


function headerScroll(){


if(window.scrollY>50){

header?.classList.add("scrolled");

}else{

header?.classList.remove("scrolled");

}


}


window.addEventListener(
"scroll",
headerScroll
);





/* =====================================================
   MENU MOBILE
===================================================== */


if(menu && nav){


menu.addEventListener("click",()=>{


const active=
nav.classList.toggle("active");


menu.classList.toggle(
"open",
active
);


menu.setAttribute(
"aria-expanded",
active
);


});



navLinks.forEach(link=>{


link.addEventListener("click",()=>{


nav.classList.remove("active");

menu.classList.remove("open");

menu.setAttribute(
"aria-expanded",
false
);


});


});


}






/* =====================================================
   SCROLL SUAVE
===================================================== */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
e=>{


const target=document.querySelector(
link.getAttribute("href")
);



if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});






/* =====================================================
   REVEAL SCROLL
===================================================== */


const revealItems=document.querySelectorAll(
".about-box,.product-card,.why-card,.stat,.cta-content"
);



if(
"IntersectionObserver" in window
){


const revealObserver=
new IntersectionObserver(
entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add(
"show"
);


revealObserver.unobserve(
entry.target
);


}



});


},
{
threshold:.15
}
);



revealItems.forEach(item=>{


item.classList.add(
"reveal"
);


revealObserver.observe(item);


});


}






/* =====================================================
   BOTON ARRIBA
===================================================== */


if(scrollTop){


window.addEventListener(
"scroll",
()=>{


scrollTop.classList.toggle(
"active",
window.scrollY>500
);


});



scrollTop.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};



}






/* =====================================================
   PARALLAX HERO OPTIMIZADO
===================================================== */


if(heroImage && window.innerWidth>768){


let ticking=false;


window.addEventListener(
"scroll",
()=>{


if(!ticking){


requestAnimationFrame(()=>{


heroImage.style.transform=
`
translateY(${window.scrollY*0.04}px)
`;



ticking=false;


});


ticking=true;


}


});


}







/* =====================================================
   EFECTO 3D CARDS
===================================================== */


const cards=document.querySelectorAll(
".product-card,.why-card"
);



if(window.innerWidth>768){


cards.forEach(card=>{


card.addEventListener(
"mousemove",
e=>{


const rect=
card.getBoundingClientRect();


const x=
e.clientX-rect.left;


const y=
e.clientY-rect.top;



const rotateX=
-(y-rect.height/2)/30;


const rotateY=
(x-rect.width/2)/30;



card.style.transform=
`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});


});


}







/* =====================================================
   ACTIVE MENU
===================================================== */


const sections=
document.querySelectorAll(
"section[id]"
);



function activeMenu(){


let position=
window.scrollY+200;



sections.forEach(section=>{


const top=
section.offsetTop;


const height=
section.offsetHeight;


const id=
section.id;



if(
position>=top &&
position<=top+height
){


navLinks.forEach(link=>{


link.classList.remove(
"active"
);



if(
link.hash==="#"+id
){

link.classList.add(
"active"
);

}


});


}



});


}



window.addEventListener(
"scroll",
activeMenu
);






/* =====================================================
   LAZY LOAD
===================================================== */


document
.querySelectorAll("img")
.forEach(img=>{


img.loading="lazy";


});







/* =====================================================
   COPYRIGHT AUTOMATICO
===================================================== */


const copyright=
document.querySelector(
".copyright"
);



if(copyright){


copyright.innerHTML=
`
© ${new Date().getFullYear()} ZAVITA.
Todos los derechos reservados.
`;

}



console.log(
"ZAVITA PREMIUM SYSTEM ONLINE ✓"
);



});
