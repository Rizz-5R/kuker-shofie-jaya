import { cart } from "../core/cart.js";
import { sendWhatsAppCart } from "../service/whatssapp.service.js";

const checkoutButton = document.getElementById("checkoutButton");

checkoutButton.addEventListener("click", () => {
    if(cart.length === 0) {
        alert("Keranjang kosong! Silahkan tambahkan produk ke keranjang");
        return;
    } 
    sendWhatsAppCart(cart);
})