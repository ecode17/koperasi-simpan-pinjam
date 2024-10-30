window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) { 
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});
function showContent(type, element) {
    const content = document.getElementById("content");
    if (content) {
        if (type === "laporan") {
            content.innerHTML = `
                <h4>Laporan Koperasi</h4>
                <p>Laporan berisi data lengkap yang membantu anggota memahami perkembangan koperasi secara menyeluruh.</p>
            `;
        } else if (type === "statistik") {
            content.innerHTML = `
                <h4>Statistik Koperasi</h4>
                <p>Statistik menunjukkan angka pertumbuhan dan tren kinerja koperasi dari waktu ke waktu untuk evaluasi yang lebih baik.</p>
            `;
        } else if (type === "analisis") {
            content.innerHTML = `
                <h4>Analisis Kinerja Koperasi</h4>
                <p>Menunjukkan beberapa capaian signifikan dalam menjalankan fungsi-fungsinya. Manajemen anggota berjalan efektif dengan tingkat akurasi data yang tinggi.</p>
            `;
        }
    }
    const buttons = document.querySelectorAll(".button-group .btn");
    if (buttons) {
        buttons.forEach(btn => btn.classList.remove("active"));
        if (element) {
            element.classList.add("active");
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 768) {
        document.querySelectorAll(".footer-title").forEach(function (title) {
            title.addEventListener("click", function () {
                const targetId = title.nextElementSibling.id;
                const targetElement = document.getElementById(targetId);
                const isCollapsed = targetElement.classList.contains("show");
                if (isCollapsed) {
                    targetElement.classList.remove("show");
                } else {
                    targetElement.classList.add("show");
                }
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1200,
        once: true
    });
});