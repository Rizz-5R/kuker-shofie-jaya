import { cart } from "../core/cart.js";

export function renderCart() {

    const cartItems = document.getElementById("cartItems");

    const grandTotal = document.getElementById("grandTotal");

    if(!cartItems || !grandTotal) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const div = document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `
        <h4>${item.product.name}</h4>
        <p>Varian : ${item.variant}</p>
        
        <p>Jumlah : ${item.quantity}</p>
        <p>Total : Rp${(item.price * item.quantity).toLocaleString("id-ID")}</p>
        
        <button class="remove-btn">Hapus</button>`;

        const removeButton = div.querySelector(".remove-btn");

        removeButton.addEventListener("click", () => {
            cart.splice(index, 1);
            renderCart();
        })
        cartItems.appendChild(div);
    });
    grandTotal.innerText = `Total Belanja : Rp${total.toLocaleString("id-ID")}`;
}

