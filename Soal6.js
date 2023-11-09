function cekTahun() {
    var tahun = parseInt(document.getElementById("tahun").value);
    var hasilElement = document.getElementById("hasil");

    if (tahun % 4 === 0) {
        hasilElement.innerText = "Tahun " + tahun + " merupakan tahun kabisat.";
    } else {
        hasilElement.innerText = "Tahun " + tahun + " bukan tahun kabisat.";
    }
}
