//Getter ve Setter encapsulation dediğimiz kapsülleme yöntemidir.
class Ev{
    _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;

    
    constructor(odaSayisi:number,pencereSayisi:number,kat:number) {
        this._odaSayisi=odaSayisi; 
        this._pencereSayisi=pencereSayisi;
        this._kat=kat;
    }

    yemekYe(){
        console.log(this._kat+" katlı evde yemek yenildi");
    }
}

let ev=new Ev(3,4,5);
console.log(ev);
ev.yemekYe();

class Kisi{
    //örnekte sayın Ahmet yazdıralım tabii getter ve setter kullanarak
    private _isim:string;//dışarıdan erişilmez
    //get seti çağırdığımda dışarıdan verdiğim değer settera düşer
    get isim():string{
        return " Sayın: " + this._isim;// setten gelen değeri başına "Sayın" koyarak yazdırdık
    }
    //ad'ın içindeki isim yani değer this.isim'in içine gönderilir.Oda gette yazdırılır
    set isim(ad:string){
        this._isim=ad;
    }
    
    
    kaydet(){
        console.log("kişi kaydedildi");
    }
}

class Musteri extends Kisi{
    satisYap(){
        console.log("Satış Yapıldı");
    }
}


let musteri=new Musteri();
musteri.isim="Ahmet";//settara Ahmeti gönderdim
console.log(musteri.isim);//okumak için yani geti çalıştırır
//Console Çıktısı: Sayın: Ahmet  Not:Sizde console üzerinden görmek isterseniz en alt satırlarda "CONSOLEDE GÖRMEK İÇİN" bölümüne bakınız.



musteri.kaydet();
//Console Çıktısı:kişi kaydedildi
musteri.satisYap();
//Console Çıktısı: Satış Yapıldı

//Getter ve Setter ile ilgili daha fazla bilgi edinmek için:
//https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/



