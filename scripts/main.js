import { renderProducts } from "./modules/products.js";
import "./modules/checkout.js";
import { renderCart } from "./modules/cartUI.js";
import "./components/navbar.js"

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderCart();

});