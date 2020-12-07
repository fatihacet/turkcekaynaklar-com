//Ortalama hesaplaması yapan fonksiyon
function getAverage(a, b, c) {
    var result = (a + b + c) / 3; // gelen paremetre toplanır 3'e bölünür
    return 'result: ' + result; //daha sonra ise sonucumu döndürdüm
}
/*Aklımıza şu soru gelebilir a:number yazmak ne işimize yaradı?
    eğer a,b,c şeklinde verseydik sayı gönderseydik sıkıntı olmazdı fakat harfte versen başta hata vermezdi.
        a:number ... diyerek ben aşağıda fonksiyonuma harf verirsem artık anında hata verecektir uyaracaktır.*/
getAverage(10, 20, 30); //fonksiyonun beklediği sayısal değerleri gönderdim.
/*  ŞİMDİİ BİR ÖRNEK DAHA YAPALIM EĞER 3 SAYI VERMEK İSTESEYDİK  */
function getAverage2(a, b, c) {
    var total = a + b; // a değer ile b değerini topladım örn: 10+20=30.  30 sonucunu total değeri içine attım.
    var count = 2; // a,b count 2. henüz 2 değer geldi.
    if (typeof c !== 'undefined') { //c değeri undefined yani tanımsız belirsiz değilse içinde değer varsa
        total = total + c; // yukarıdaki total ile c'nin içindeki değeri topla
        count++; //count değerinide bir arttır 3 yap
    }
    var result = total / count; //daha sonra toplamı kaç değer gönderildiyse ona böl.
    return 'result: ' + result;
}
getAverage2(10, 20);
function getAverage3() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0; 
    var count = 0;
    for (var i = 0; i < a.length; i++) { 
        total = total + a[i]; 
        count++; 
    }
    var result = total / count;
    return 'result: ' + result;
}

var Result = getAverage3(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
console.log(Result);

