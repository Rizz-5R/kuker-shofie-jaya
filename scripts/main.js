import { renderProducts } from "./modules/products.js";
import "./modules/checkout.js";
import { renderCart } from "./modules/cartUI.js";
import "./components/navbar.js"
import "./components/cartDrawer.js"
import { renderWhyUs } from "./components/whyUs.js";
import { renderTestimonials } from "./components/testimonial.js";
import { renderFooter } from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderCart();
    renderWhyUs();
    renderTestimonials();
    renderFooter();
});