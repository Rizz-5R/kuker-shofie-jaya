const cartButton = document.getElementById("floatingCart");
const cartSection = document.getElementById("cartSection");
const overlay = document.getElementById("cartOverlay");

cartButton.addEventListener("click", () => {
    cartSection.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    cartSection.classList.toggle("remove");
    overlay.classList.toggle("remove");
});