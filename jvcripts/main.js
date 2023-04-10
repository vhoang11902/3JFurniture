const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem = document.querySelectorAll(".dot")
let imgNuber = imgPosition.length
let index = 0
imgPosition.forEach(function(image,index){
    image.style.left = index*100 +"%"
    dotItem[index].addEventListener("click",function(){
    slider (index)
    })
})
function imgSlide (){
    index++;
    console.log(index)
    if (index >= imgNuber) {index = 0}
    slider (index)
}
function slider(index){
    imgContainer.style.left = "-" + index*100 + "%";
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSlide,5000)
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
menu.addEventListener("click",function(){
    menu.classList.toggle("block")
    })
})

window.addEventListener("scroll",function(){
    var header = this.document.querySelector(".header__navbar");
    header.classList.toggle("sticky",window.scrollY > 0);
})

const search = document.querySelector('.header__navbar-search')
const toggle_search = document.querySelector('.icon-search')
toggle_search.onclick = function(){
    search.classList.toggle('active');
}
// filter drop down---------------//


var a_parent =  document.querySelectorAll(".category_filter_btn");
    a_parent.forEach(function(aitem){
        aitem.onclick = function(){
            aitem.classList.toggle('active');
        }
})
let menuIcon = document.querySelector(".toggle_navbar_menu");
let menu = document.querySelector(".l_navbar");
let closeMenu = document.querySelector(".toggle_navbar_menu-close");

menuIcon.onclick =() =>{
    menu.classList.add("active");
}

closeMenu.onclick =() =>{
    menu.classList.remove("active");
}
const items = document.querySelectorAll(".filter_list");
items.forEach( items => {
    items.addEventListener("click", () => {
        items.classList.toggle("checked");
    })
})

let menuIcon = document.querySelector(".toggle_navbar_menu");
let menuu = document.querySelector(".l_navbar");
let closeMenu = document.querySelector(".toggle_navbar_menu-close");

menuIcon.onclick =() =>{
    menu.classList.add("active");
}

closeMenu.onclick =() =>{
    menu.classList.remove("active");
}

// loader---------
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });


//   img------//
const bigImg = document.querySelector(".product_big-img img")
const smalImg =  document.querySelectorAll(".product_small-img img")
smalImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
    bigImg.src = imgItem.src
    })
})
