/**
 * Fungsi untuk melakukan toggle highlight pada semua elemen 
 * dengan class 'target-highlight' dan mengubah teks tombol.
 */
function toggleHighlight() {
    // 1. Dapatkan SEMUA elemen yang ditargetkan menggunakan class
    // document.querySelectorAll mengembalikan NodeList (mirip array) dari semua elemen yang cocok.
    const targetTeksList = document.querySelectorAll(".target-highlight");
    
    // 2. Dapatkan elemen tombol
    const tombol = document.getElementById("tombolHighlight");

    // Lakukan perulangan (loop) pada setiap elemen yang ditemukan
    targetTeksList.forEach(element => {
        // classList.toggle akan menambah class 'highlight-on' jika belum ada, dan menghapusnya jika sudah ada.
        element.classList.toggle("highlight-on");
    });

    // Mengubah teks tombol secara dinamis berdasarkan status highlight
    // Kita cek status dari elemen pertama saja (targetTeksList[0])
    if (targetTeksList.length > 0 && targetTeksList[0].classList.contains("highlight-on")) {
        tombol.textContent = "Hapus Highlight"; 
    } else {
        tombol.textContent = "Highlight Paragraf";
    }
}

// 3. Menghubungkan fungsi 'toggleHighlight' ke event 'click' pada tombol
// Ini adalah cara yang disarankan (menggunakan addEventListener) daripada menggunakan onclick="" di HTML.
document.addEventListener('DOMContentLoaded', () => {
    const tombol = document.getElementById("tombolHighlight");
    if (tombol) {
        tombol.addEventListener('click', toggleHighlight); 
    }
});