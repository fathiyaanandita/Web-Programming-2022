function cariTeman(){
    let frm = document.getElementById("frm_cari");
    let str = frm.nama_cari.value;
    alert("Kata Cari : " + frm.nama_cari.value);
    document.getElementById("katacari").innerHTML= str;
    console.log(str);
    if(str == "himmah"){
        console.log("himmah ketemuu !!");
        document.getElementById("katacari").style="color:pink";
    } else{
        console.log("ini bukan himmah");
        document.getElementById("katacari").style="color:green";
    }
}