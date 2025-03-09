// JavaScript for Zomato Clone Website

// Cart functionality
let cart = [];
const cartCount = document.createElement("span");
cartCount.id = "cart-count";
cartCount.textContent = "0";

// Add cart icon to navbar
const cartIcon = document.createElement("div");
cartIcon.id = "cart-icon";
cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i>`;
cartIcon.appendChild(cartCount);
document.querySelector(".navbar__menu_container").appendChild(cartIcon);

// Function to add items to cart
function addToCart(item) {
    cart.push(item);
    updateCartUI();
}

// Function to update cart count
function updateCartUI() {
    cartCount.textContent = cart.length;
    let cartList = document.getElementById("cart-list");
    if (!cartList) {
        cartList = document.createElement("div");
        cartList.id = "cart-list";
        cartIcon.appendChild(cartList);
    }
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        const cartItem = document.createElement("p");
        cartItem.textContent = `${item} `;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeFromCart(index);
        cartItem.appendChild(removeBtn);
        cartList.appendChild(cartItem);
    });
}

// Function to remove items from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Add event listeners to add-to-cart buttons
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".we_offer__cards").forEach((card, index) => {
        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.classList.add("add-to-cart");
        addToCartBtn.onclick = () => addToCart(`Item ${index + 1}`);
        card.appendChild(addToCartBtn);
    });
});
