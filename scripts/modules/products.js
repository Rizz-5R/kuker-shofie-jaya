//ini step kedua 
import { PRODUCTS } from "../core/constants.js"; //ambil semua data produk
import { cart } from "../core/cart.js";
import { renderCart } from "./cartUI.js";
import { sendWhatsAppMessage } from "../service/whatssapp.service.js";

const container = document.getElementById("productsContainer"); //dr html

export function renderProducts() {
    PRODUCTS.forEach((product) => {
        //
        const variantHTML = product.variant.map((variant) => 
            `<option value="${variant.name}" data-price="${variant.price}">${variant.name} </option>`
        ).join("");

        const card = document.createElement("div");

        card.classList.add("product-card");
        card.innerHTML = `
            <img src=${product.image} alt=${product.name}/>
            <h3>${product.name}</h3>
            <p>${product.description}</p>

            <select class="variant-select">
                ${variantHTML}
            </select>

            <input type="number" class="quantity-input" placeholder="Jumlah" min="1" value="1" />

            <div class="price-display"></div>

            <button class="order-btn">Pesan Sekarang</button>

            <button class="cart-btn">Tambah ke Keranjang</button>
            `;

        const totalPriceDisplay = card.querySelector(".price-display"); //pemanggilan 

        const orderButton = card.querySelector(".order-btn");
        const cartButton = card.querySelector(".cart-btn");
        const quantityInput = card.querySelector(".quantity-input");
        const select = card.querySelector(".variant-select");

        function updateTotalPrice() { //update harga berdasarkan jumlah produk
            const selectedOption = select.options[select.selectedIndex];

            const price = Number(selectedOption.dataset.price);

            const quantity = Number(quantityInput.value);

            const total = price * quantity;

            totalPriceDisplay.innerText = `Total : Rp${total.toLocaleString("id-ID")}`; //
        }

        orderButton.addEventListener("click",() => {
            const selectedVariant = select.value;
            const quantity = Number(quantityInput.value);

            const selectedOption = select.options[select.selectedIndex];
            const price = Number(selectedOption.dataset.price);

            sendWhatsAppMessage(
                product.name,
                selectedVariant,
                quantity,
                price
            );
        });

        cartButton.addEventListener("click", () => {
            const selectedVariant = select.value;
            const quantity = Number(quantityInput.value);

            const selectedOption = select.options[select.selectedIndex];
            const price = Number(selectedOption.dataset.price);

            cart.push({
                product: product,
                variant: selectedVariant,
                quantity,
                price
            });

            renderCart();
            
        });

        select.addEventListener("change", updateTotalPrice);

        quantityInput.addEventListener("input", updateTotalPrice);

        updateTotalPrice();
        container.appendChild(card);
    });
}