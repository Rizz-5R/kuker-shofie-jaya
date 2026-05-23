export function sendWhatsAppMessage(
    productName, variantName, quantity, price) {
    const phoneNumber = "6287758840229";

    const total = price * quantity;

    const message = `Assalamualaikum, halo min,
     (nama) Saya: 
     Alamat: 

     Ingin memesan kue : ${productName} 
     Varian : ${variantName} 
     Jumlah : ${quantity} pcs  
     Total : Rp${total.toLocaleString("id-ID")}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;



    window.open(url, "_blank");
}

export function sendWhatsAppCart(cart) {

  const phoneNumber = "6287758840229";

  let message =
    `Assalamualaikum halo min. 
    (Nama) Saya: 
    Alamat:  

    Ingin memesan kue: `;

  let grandTotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;

    grandTotal += itemTotal;

    message +=
      `${item.product.name} 
      Varian: ${item.variant} 
      Jumlah: ${item.quantity} pcs. ` 
  });

  message +=
    `Total Harga: Rp${grandTotal.toLocaleString("id-ID")}`;

  const url =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}