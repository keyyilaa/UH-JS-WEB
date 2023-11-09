function hitungKeliling() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);
    var sideD = parseFloat(document.getElementById("sideD").value);

    var keliling = sideA + sideB + sideC + sideD;

    document.getElementById("hasil").textContent = "Keliling trapesium: " + keliling;
}
