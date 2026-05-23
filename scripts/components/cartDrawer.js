const cartButton = document.getElementById("floatingCart");
const cartSection = document.getElementById("cartSection");
const overlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

cartButton.addEventListener("click", () => {
    cartSection.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    cartSection.classList.toggle("remove");
    overlay.classList.toggle("remove");
});

closeCart.addEventListener("click", () => {
    cartSection.classList.remove("active");
    overlay.classList.remove("active");
});