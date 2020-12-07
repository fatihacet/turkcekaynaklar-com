var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Inheritance: Inheritance (miras alma, kalıtım),
bir nesnenin özelliklerinin farklı nesneler tarafından da kullanılabilmesine olanak sağlayan bir özelliktir */
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + " katlı evde yemek yenildi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
console.log(ev);
ev.yemekYe();
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Kisi.prototype.kaydet = function () {
        console.log("kişi kaydedildi");
    }; //peki kaydet fonksiyonu Musteri ve Personeldede olacak o halde Inheritance yapalım
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYap = function () {
        console.log("Satış Yapıldı");
    }; //Musteriye özel fonksiyonumu barındırır
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maaş öde");
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
musteri.kaydet();
musteri.satisYap(); //DİKKAT: kaydette satisyapta geldi çünkü Musteriye Kisi classını inheritance etmiştim.Yani kişinin özellikleri müşteriyede geçti :))
//Inheritance ile ilgili daha fazla bilgi edinmek için:
//https://www.javatpoint.com/typescript-inheritance
