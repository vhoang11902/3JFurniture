window.onload = function(){ 
    // your code 
    let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick =() =>{
    cart.classList.add("active");
}

closeCart.onclick =() =>{
    cart.classList.remove("active");
}

if (document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}
//making function

function ready(){
    //remove item from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener("click",removeCartItem);
    }
    updateTotal();
    //quanlitychanges

    var quanlityInputs = document.getElementsByClassName("cart-pd-quanlity");
    for (var i = 0; i < quanlityInputs.length; i++){
        var input = quanlityInputs[i]; 
        input.addEventListener("change", quanlityChanged);
        cart.classList.add("active");
    }
    //add cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    //buy button work
    document
        .getElementsByClassName("btn-cart")[0]
        .addEventListener("click",buyButtonClicked);
}
function buyButtonClicked(){
    alert("Your order is placed")
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}
//remove cart------------//

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

//quanlity change

function quanlityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
    }
    updateTotal();
}
//
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    // console.log(title, price, productImg);
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg){
    var cartBox = document.createElement("div");
        cartBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-pd-lable");
    for (var i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert("You have already add this item to cart !!!!!");
            return;
        }
    }

    var cartBoxContent = `
                            <img src="${productImg}" alt="" class="cart-img">
                            <div class="detail-box">
                                <div class="cart-pd-lable">${title}</div>
                                <div class="cart-pd-price">${price}</div>
                                <input type="number" value="1" id=""class="cart-pd-quanlity">
                            </div>
                            <!-- Remove -->
                            <ion-icon name="trash-outline" class="cart-remove"></ion-icon>`;
    
    cartBox.innerHTML = cartBoxContent;
    cartItems.append(cartBox);
    cartBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click",removeCartItem);
    cartBox
        .getElementsByClassName("cart-pd-quanlity")[0]
        .addEventListener("change",quanlityChanged);
}

//update total price

function updateTotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-pd-price")[0];
        var quanlityElement = cartBox.getElementsByClassName("cart-pd-quanlity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quanlity = quanlityElement.value;
        total = total + price * quanlity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-cart-price")[0].innerText = "$" + total;
}
};


