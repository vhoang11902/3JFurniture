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
    imgContainer.style.left = "-" + index*100 + "%"
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

function openLMenu(){
    document.getElementById("l_navbar").style.width = "250px"
}
function closeLMenu(){
    document.getElementById("l_navbar").style.width = "0px"
}

const search = document.querySelector('.header__navbar-search')
const toggle_search = document.querySelector('.icon-search')
toggle_search.onclick = function(){
    search.classList.toggle('active');
}


function openSearch(){
    document.getElementById(".header__navbar-search").toggle.onclick;
}
function closeSearch(){
    document.getElementById("l_navbar").toggle.onclick;
}


// filter drop down---------------//


var a_parent =  document.querySelectorAll(".cartegory_filter_btn");
    a_parent.forEach(function(aitem){
        aitem.onclick = function(){
            aitem.classList.toggle('active');
        }
})
const items = document.querySelectorAll(".filter_list");
items.forEach( items => {
    items.addEventListener("click", () => {
        items.classList.toggle("checked");
    })
})
