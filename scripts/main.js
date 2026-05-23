import { renderProducts } from "./modules/products.js";
import "./modules/checkout.js";
import { renderCart } from "./modules/cartUI.js";
import "./components/navbar.js"
import "./components/cartDrawer.js"

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderCart();

});