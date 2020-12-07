/*Inheritance: Inheritance (miras alma, kalıtım),
bir nesnenin özelliklerinin farklı nesneler tarafından da kullanılabilmesine olanak sağlayan bir özelliktir */
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

class Kisi{//Kişi classı oluşturdum ve bunun içinde kaydet fonksiyonum var
    kaydet(){
        console.log("kişi kaydedildi");
    }//peki kaydet fonksiyonu Musteri ve Personeldede olacak o halde Inheritance yapalım
}

class Musteri extends Kisi{//extends anahtarı ile Kisiyi inheritance diyorum
    satisYap(){
        console.log("Satış Yapıldı");
    }//Musteriye özel fonksiyonumu barındırır
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maaş öde");
    }
}


let musteri=new Musteri();
musteri.kaydet();
musteri.satisYap();//DİKKAT: kaydette satisyapta geldi çünkü Musteriye Kisi classını inheritance etmiştim.Yani kişinin özellikleri müşteriyede geçti :))


//Inheritance ile ilgili daha fazla bilgi edinmek için:
//https://www.javatpoint.com/typescript-inheritance




