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

const btnToggler = document.querySelector(".toggle_menu").addEventListener("click", deploy);

const closeButn = document.querySelector(".closer").addEventListener("click", close);

function deploy() {
  document.querySelector(".navar").style.left="100%"; 
}

function close() {
  document.querySelector(".navar").style.left="-100%";
}