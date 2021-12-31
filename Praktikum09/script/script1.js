const chatBox = document.getElementById('box');
const inputPesan = document.getElementById('pesan');
const btnKirim = document.getElementById('kirim');

btnKirim.onclick = function(){
    const p = document.createElement("P")
    chatBox.appendChild(p);
    p.innerHTML = inputPesan.value;
}