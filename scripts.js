"use strict";
//////////////////////////////////////////////////////////// INTENTO DE MODO OSCURO

// const darkbtn = document.querySelector(".btn");
// darkbtn.addEventListener("click", darkrai);

// const bg_changed = document.querySelector(".main_container--navbar");

// function darkrai() {
//     bg_changed.style.background= "linear-gradient(to right, #7a7a7a, #232323)";

// }

///////////////////////////////DEPLOY NAVBAR
// const navbarController = document.querySelector(".main_container--navbar");
// const buttonDeploy = document.querySelector(".fa-stream")

// navbarController.addEventListener("click",() => {
//     navbarController.classList.toggle("active");
//     buttonDeploy.classList.toggle("active");
    
// });

// const togglebtn = document.getElementById("toggle_btn").addEventListener("click", openAction);
// function openAction() {
//     document.querySelector(".navar").style.left="0px";
// }


// const closerNav = document.querySelector(".close").addEventListener("click", closeTag);
// function closeTag() {
//     document.querySelector(".navar").style.left="-100%";
// }

// const btnToggler = document.querySelector(".toggle_menu").addEventListener("click", deploy);

// const closeButn = document.querySelector(".closer").addEventListener("click", close);

// function deploy() {
//   document.querySelector(".navar").style.left="100%"; 
// }

// function close() {
//   document.querySelector(".navar").style.left="-100%";
// }

// document.querySelector(".toggle_menu").addEventListener("click", ()=> document.querySelector(".main_container--navbar").classList.toggle("show"));




// const toggleBtn = document.querySelector(".toggle");
// const closeBtn = document.querySelector(".close");

// toggleBtn.addEventListener("click", function () {
//   document.querySelector(".main_container--navbar").style.left="0";
//   document.querySelector(".main_container--navbar").style.width="50%";

// })

// closeBtn.addEventListener("click",function(){
//   document.querySelector(".main_container--navbar").style.left="-100%";
//   // document.querySelector(".main_container--navbar").style.width="50%";
 
// })



// function myfunction(x) {
//   if (x.matches) {
//     const toggleBtn = document.querySelector(".toggle");
// const closeBtn = document.querySelector(".close");

//     toggleBtn.addEventListener("click", function () {
//       document.querySelector(".main_container--navbar").style.left="0";
//       document.querySelector(".main_container--navbar").style.width="50%";
    
//     })
    
//     closeBtn.addEventListener("click",function(){
//       document.querySelector(".main_container--navbar").style.left="-100%";
//       // document.querySelector(".main_container--navbar").style.width="50%";
     
//     })
//   }
// }

// var x = window.matchMedia("(max-width: 900px)")
// myfunction(x);
// x.addEventListener(myfunction);
  
// window.onload=function(){
//   const hamburguer = document.querySelector(".toogle");
//   const navbar = document.querySelector(".main_container--navbar");
  
//   if(hamburguer) {
//     hamburguer.addEventListener("click", function() {
//     navbar.classList.toggle("open");
//   })
//   }
// }


const hamburguer = document.querySelector(".toogle");
const navbar = document.querySelector(".main_container--navbar");

if(hamburguer) {
  hamburguer.addEventListener("click", function() {
  navbar.classList.toggle("open");
})
}
