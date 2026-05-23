const ctaButton = document.querySelector(".nav-cta");

ctaButton.addEventListener("click", () => {
    document.getElementById("product").scrollIntoView({behavior: "smooth"});
});