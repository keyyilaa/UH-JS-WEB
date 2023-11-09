function cekKelayakan() {
    var usia = parseInt(document.getElementById("usia").value);
    var hasilElement = document.getElementById("hasil");

    if (usia < 13) {
        hasilElement.innerText = "Balita tidak boleh menonton ke bioskop.";
    } else if (usia >= 13 && usia <= 19) {
        hasilElement.innerText = "Remaja boleh menonton ke bioskop.";
    } else {
        hasilElement.innerText = "Anda boleh menonton ke bioskop.";
    }
}
