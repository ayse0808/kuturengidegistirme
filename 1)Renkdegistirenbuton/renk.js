const kutu = document.querySelector('#renkkutu');
const yer = document.querySelector('#buttonyer');
const popup = document.querySelector('#Popupmesaj');

function rastgeleRenkUret() {
    const rastgeleSayi = Math.floor(Math.random() * 16777215);
    return "#" + rastgeleSayi.toString(16).padStart(6, "0");
}

function popupGoster(mesaj, sure = 2000) {//2000 milisaniye ekranda kalacak olan popup
    popup.textContent = mesaj;
    popup.style.display = 'block'; //display block yapınca gizli olan divim artık görümeye başlayacak 

    setTimeout(() => {
        popup.style.display = 'none';//settime outu mesajı gösterip sonrasında popu gizlemek için kullandım
    }, sure);
}


/*.addeventlistener kullanarak  butona tıklanınca ne olacağını göstermek istedim
rastgelerenküret fonksiyonunu çağırıyorum  çağırmış olduğum bu fonksiyon rastgele bir HEX üretiyor.
üretilen yeni rengin hex kodu yeni renk değişkenine atanıyor 
kutu.style.background ile kutunun rengi değişiyor. 
*/

yer.addEventListener('click', () => {
    const yeniRenk = rastgeleRenkUret();
    kutu.style.backgroundColor = yeniRenk;
    popupGoster(`Kutunun rengi değiştirildi HEX: ${yeniRenk}`);
});