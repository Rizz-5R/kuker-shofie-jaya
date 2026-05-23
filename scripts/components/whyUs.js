const features = [
    {
        icon: "",
        title: "Fresh Daily",
        description: "Diproduksi fresh setiap hari dengan bahan premium."
    },

    {
        icon: "",
        title: "Fast Delivery",
        description: "Pengiriman cepat dan aman sampai tujuan."
    },

    {
        icon: "",
        title: "Best Quality",
        description: "Menggunakan resep homemade pilihan terbaik."
    },

    {
        icon: "",
        title: "Customer Favorite",
        description: "Dipercaya oleh banyak pelanggan setia."
    }
];

export function renderWhyUs() {

    const section = document.getElementById("why-us");

    if(!section) return;

    section.innerHTML = `
    
        <div class="section-title">
            <h2>Kenapa Memilih Kami?</h2>
            <p>Produk homemade premium dengan kualitas terbaik</p>
        </div>

        <div class="why-us-container">

            ${features.map(feature => ` 
                <div class="why-card">
                    <div class="why-icon">
                        ${feature.icon}
                    </div>

                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>

                </div>

            `).join("")}

        </div>
    
    `;
}