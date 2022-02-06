let elBody = document.querySelector("body");
let elHeader = document.querySelector(".header");
let elCase = document.querySelector(".header__nav-case");
var elHeaderHamburgBtn = document.querySelector(".header__button");

elHeaderHamburgBtn.addEventListener('click', function(){
    elHeader.classList.toggle("header--active");
})
function myFunction(x) {
   x.classList.toggle("change");
 }
 elHeaderHamburgBtn.addEventListener('click', function(){
   elBody.classList.toggle("body--active");
})