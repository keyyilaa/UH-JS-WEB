function mulaiPerulangan() {
    var hasilElement = document.getElementById("hasil");
    hasilElement.innerText = "";

    for (var i = 1; i <= 10; i++) {
        var anakAyam = "Anak ayam turun " + i + ", mati satu tinggal " + (i - 1);
        var pElement = document.createElement("p");
        pElement.innerText = anakAyam;
        hasilElement.appendChild(pElement);
    }
}
