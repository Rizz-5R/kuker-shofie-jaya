export function sendWhatsAppMessage(
    productName, variantName, quantity, price) {
    const phoneNumber = "087758840229";

    const total = price * quantity;

    const message = `Assalamualaikum, halo min,` +
     `saya ingin memesan kue :` + 
     ` ${productName} ` +
     `Varian : ${variantName} ` +
     `Jumlah : ${quantity} pcs / kemasan ` +
     `Total : Rp${total.toLocaleString("id-ID")}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;



    window.open(url, "_blank");
}

export function sendWhatsAppCart(cart) {

  const phoneNumber = "087758840229";

  let message =
    `Assalamualaikum halo min. ` +
    `Saya ingin memesan: `;

  let grandTotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;

    grandTotal += itemTotal;

    message +=
      ` ${item.product.name} ` +
      `Varian: ${item.variant} ` +
      `Jumlah: ${item.quantity} pcs / kemasan. ` 
  });

  message +=
    `Total Harga: Rp${grandTotal.toLocaleString("id-ID")}`;

  const url =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}