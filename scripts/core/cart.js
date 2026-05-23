let cartData = [];

try {

    const savedCart = localStorage.getItem("cart");

    cartData = savedCart
        ? JSON.parse(savedCart)
        : [];

} catch(error) {

    console.error("Cart localStorage rusak:", error);

    localStorage.removeItem("cart");

    cartData = [];
}

export const cart = cartData;