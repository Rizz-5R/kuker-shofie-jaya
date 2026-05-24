const ctaButton = document.querySelector(".nav-cta");

if (ctaButton) {
    ctaButton.addEventListener("click", () => {
        const productSection = document.getElementById("product");
        if (productSection) {
            productSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}