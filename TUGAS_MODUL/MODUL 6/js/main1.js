/**
 * Fungsi untuk melakukan perhitungan kalkulator
 * @param {string} operasi - Jenis operasi: 'jumlah', 'kurang', 'kali', atau 'bagi'
 */
function hitung(operasi) {
    // Mengambil nilai dari input dan mengubahnya menjadi angka (floating point)
    const angka1 = parseFloat(document.getElementById('angka1').value);
    const angka2 = parseFloat(document.getElementById('angka2').value);
    let hasil;

    // Memeriksa apakah input valid
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById('hasil').innerHTML = "Hasil: **Masukkan dua angka yang valid!**";
        return;
    }

    // Melakukan perhitungan berdasarkan operasi
    switch (operasi) {
        case 'jumlah':
            hasil = angka1 + angka2;
            break;
        case 'kurang':
            hasil = angka1 - angka2;
            break;
        case 'kali':
            hasil = angka1 * angka2;
            break;
        case 'bagi':
            if (angka2 === 0) {
                document.getElementById('hasil').innerHTML = "Hasil: **Tidak bisa dibagi nol!**";
                return;
            }
            hasil = angka1 / angka2;
            break;
        default:
            hasil = "Operasi tidak valid";
    }

    // Menampilkan hasil pada elemen div#hasil menggunakan innerHTML
    document.getElementById('hasil').innerHTML = `Hasil ${operasi}: **${hasil}**`;
}