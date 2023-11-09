function hitungKembalian() {
    var harga = parseInt(document.getElementById("harga").value);
    var uang = parseInt(document.getElementById("uang").value);

    var kembalian = uang - harga;

    var hasilElement = document.getElementById("hasil");

    if (kembalian >= 0) {
        hasilElement.innerText = "Kembalian yang harus dibayarkan: Rp " + kembalian;
    } else {
        hasilElement.innerText = "Uang yang dibayarkan kurang. Silakan tambahkan uang.";
    }
}
