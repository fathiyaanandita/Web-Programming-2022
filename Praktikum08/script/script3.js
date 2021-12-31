function getjumlah(){
    var hasil;
    var input1;
    var input2;
    input1 = parseInt(document.getElementById("bil1").value);
    input2 = parseInt(document.getElementById("bil2").value);
    hasil = input1 + input2;
    document.getElementById("hasil").value = hasil;
}