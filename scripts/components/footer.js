export function renderFooter() {

    const footer = document.getElementById("footer");

    if(!footer) return;

    footer.innerHTML = `

        <div class="footer-container">

            <div class="footer-brand">

                <h2>King Kuker</h2>

                <p>
                    Homemade cookies dan brownies premium
                    dengan rasa terbaik untuk keluarga.
                </p>

            </div>

            <div class="footer-links">

                <h3>Menu</h3>

                <a href="#home">Home</a>
                <a href="#product">Product</a>
                <a href="#why-us">Keunggulan</a>
                <a href="#testimonials">Testimoni</a>

            </div>

            <div class="footer-contact">

                <h3>Kontak</h3>

                <p>📍 Gondang Tugu Trenggalek</p>
                <p>📞 0877-5884-0229</p>
                <p>✉️ kingkuker@gmail.com</p>

            </div>

        </div>

        <div class="footer-bottom">

            <p>
                © 2026 King Kuker. All rights reserved.
            </p>

        </div>

    `;
}