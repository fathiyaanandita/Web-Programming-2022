const rupiah = 14650;
var dollar;
var hasil;
function hitung(){
    dollar = parseFloat(document.getElementById("rupiah").value);
    hasil = rupiah * dollar;
    document.getElementById('opt_ubah').value = hasil;
}