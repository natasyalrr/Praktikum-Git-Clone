/**
 * Fungsi untuk melakukan toggle highlight pada semua elemen 
 * dengan class 'target-highlight' dan mengubah teks tombol.
 */
function toggleHighlight() {
    // 1. Dapatkan SEMUA elemen yang ditargetkan (NodeList)
    const targetTeksList = document.querySelectorAll(".target-highlight");
    // 2. Dapatkan elemen tombol
    const tombol = document.getElementById("tombolHighlight");

    // Melakukan perulangan dan toggle class
    targetTeksList.forEach(element => {
        // classList.toggle berfungsi untuk menambah/menghapus class secara otomatis.
        element.classList.toggle("highlight-on");
    });

    // Mengubah teks tombol berdasarkan status highlight elemen pertama
    if (targetTeksList.length > 0 && targetTeksList[0].classList.contains("highlight-on")) {
        tombol.textContent = "Hapus Highlight"; 
    } else {
        tombol.textContent = "Highlight Paragraf";
    }
}

// Tambahkan event listener setelah DOM selesai dimuat (DOMContentLoaded)
// Ini memastikan elemen tombol sudah ada saat kode JS mencoba mengaitkannya.
document.addEventListener('DOMContentLoaded', () => {
    const tombol = document.getElementById("tombolHighlight");
    if (tombol) {
        // 3. Menghubungkan fungsi 'toggleHighlight' ke event 'click'
        tombol.addEventListener('click', toggleHighlight); 
    }
});