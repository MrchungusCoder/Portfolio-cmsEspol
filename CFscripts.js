

const linkNavbar = console.log(document.getElementById("link"));


const asd = document.getElementsByClassName("navbar_container--list");
console.log(asd);

for (let i = 0; i < asd.length; i++) {
    let element = asd[i];
    console.log(element);
}


/////////////////////////////////////////////////////////QUERY SELECTOR POR ID
// const colorLink = document.querySelector("#link");
// console.log(colorLink);

// for (let i in asd) {
//    colorLink.style.color="red";
// }

/////////////////////////////////////////////////////////QUERY SELECTOR POR ID
// const bg_color = document.querySelector("#navbar_container--list").addEventListener("click", colorChange);

// function colorChange () {
//     bg_color[i].style.background = "red";
// }


/////////////////////////////////////////////////////////QUERY SELECTOR ALL
// const asd = document.querySelectorAll("li:nth-child(odd)");
// console.log(asd);
// for (let i = 0; i < asd.length; i++) {
//     let element = asd[i];
//     console.log(element);
// }

/////////////////////////////////////////////////////////CHILDREN ELEMENT
// const ulContainer = document.querySelector(".navbar_container");
// console.log(ulContainer.children[0]);

/////////////////////////////////////////////////////// SIBLING ELEMENTS
// const siblingElement = document.querySelector("div.main_container--navbar > nav.navbar > ul.navbar_container > li")
// console.log(siblingElement.nextElementSibling.nextElementSibling);

/////////////////////////////////////////////////////// NODOS
const siblingElement = document.querySelector("div.main_container--navbar > nav.navbar > ul.navbar_container > li")
console.log(siblingElement.childNodes);


//////////////////////////////////////////////////////////// INTENTO DE MODO OSCURO

// const darkbtn = document.querySelector(".btn");
// darkbtn.addEventListener("click", darkrai);

// const bg_changed = document.querySelector(".main_container--navbar");

// function darkrai() {
//     bg_changed.style.background= "linear-gradient(to right, #7a7a7a, #232323)";

// }


