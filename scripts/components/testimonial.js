const testimonials = [
    {
        name: "Alya Putri",
        review: "Brownies-nya lembut banget dan manisnya pas. Bakal order lagi!",
        rating: 5
    },

    {
        name: "Rizky Maulana",
        review: "Packaging rapi dan pengiriman cepat. Cookies favorit keluarga.",
        rating: 5
    },

    {
        name: "Nabila Sari",
        review: "Rasa premium tapi harga masih ramah. Recommended banget.",
        rating: 5
    }
];

export function renderTestimonials() {

    const section = document.getElementById("testimonials");

    if(!section) return;

    section.innerHTML = `

        <div class="section-title">
            <h2>Testimoni Pelanggan</h2>
            <p>Apa kata mereka tentang produk kami</p>
        </div>

        <div class="testimonial-container">

            ${testimonials.map((item) => `

                <div class="testimonial-card">

                    <div class="testimonial-stars">
                        ${generateStars(item.rating)}
                    </div>

                    <p class="testimonial-review">
                        "${item.review}"
                    </p>

                    <div class="testimonial-user">
                        <div class="testimonial-avatar">
                            ${item.name.charAt(0)}
                        </div>

                        <h4>${item.name}</h4>
                    </div>

                </div>

            `).join("")}

        </div>

    `;
}

function generateStars(rating) {

    return "⭐".repeat(rating);

}