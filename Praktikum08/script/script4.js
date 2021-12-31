const input = document.querySelector(".input");
const kursSelect = document.querySelector(".kurs");
const hitungBtn = document.querySelector(".hitung");
const hasil = document.querySelector(".hasil");

const kursMataUang ={
    "usd": 14650,
    "eur": 16140,
    "sgd": 10546,
}
hitungBtn.addEventListener("click", function(){
    if(kursSelect.value == "usd"){
        hasil.innerHTML = "Hasil: " + input.value * kursMataUang.usd;
    }
    else if(kursSelect.value == "eur"){
        hasil.innerHTML = formattingMataUang(input.value * kursMataUang.eur);
        hasil.innerHTML = "Hasil: " + input.value * kursMataUang.eur;
    }
    else if(kursSelect.value == "sgd"){
        hasil.innerHTML = "Hasil: " + input.value * kursMataUang.sgd;
    }
})
