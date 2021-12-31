function validasi(){
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var time = document.getElementById("time").value;
    var tujuan = document.getElementById("tujuan").value;
    var tiket = document.getElementById("tiket").value; 
    if (nama !="" && email!="" && time !="" && tujuan !="" && tiket !="") {
        return true;
    } else{
        alert('Data harus terisi dengan lengkap !');
    }
}