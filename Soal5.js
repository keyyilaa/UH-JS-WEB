function submitForm(event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var nik = document.getElementById("nik").value;
    var email = document.getElementById("email").value;
    var telpon = document.getElementById("telpon").value;

    if (nama && nik && email && telpon) {
        alert("Terimakasih sudah melakukan pendaftaran!");
    } else {
        alert("Anda harus mengisi data dengan lengkap!");
    }
}
