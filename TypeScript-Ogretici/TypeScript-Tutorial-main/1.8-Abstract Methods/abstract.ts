/*Abstract classlar adı üstünde kendileri aslında bir classdır fakat tek başlarına kullanılmazlar
ancak inheritence yöntemi le miras verme yöntemi ile kullanılabilirler ama classdırlar.
interfaceler class değildir mesela.
abstract classlar ne zaman kullanılır
şömyle düşünün tüm bankalar kredi verir
verdikten sonra veritabanına kredi verildi diye kayıt atarsınız
kaydetmek ortak bir iş
fakat kredi hesaplarken bu işler değişir hesaplar değişir
hesaplama işlemi değişir ama kaydetme işlemi ortak işte biz ortak ve ortak olmayan operasyonları belirlemek için kullanıyoruz
*/
abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{
        console.log("Kaydedildi");
    }//tüm sınıflarda ortak.Tamamlanmış içi dolu operasyon
    abstract hesapla():void;//heryede ortak değil o yüzden imza şeklinde bırakıyorum
}

class TuketiciKredi extends KrediBase{//tuketicikredi altı kızdı üzerine gelip ctrl+. yaptım sen diyo kredibase kalıtım yapıyosun hesaplayı kodlamak zorundasın diyor
    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı");
    }
    constructor() {
        super();//abstract içinde bunu yazmamız gerekiyor c#da bu yok.Parametresiz olarak gönderdik ctoru o yüzden
    }
}

class MorgateKredi extends KrediBase{//tuketicikredi altı kızdı üzerine gelip ctrl+. yaptım sen diyo kredibase kalıtım yapıyosun hesaplayı kodlamak zorundasın diyor
    hesapla(): void {
        console.log("Konut kredisine göre hesap yapıldı");
    }
    constructor() {
        super();//abstract içinde bunu yazmamız gerekiyor c#da bu yok.Parametresiz olara kgönderdikya ctoru o yüzden
    }

    morgacaözelbiroperasyonum(){

    }
}

let tuketicikredi=new TuketiciKredi();
tuketicikredi.hesapla();
tuketicikredi.kaydet();

let morgateKredi=new MorgateKredi();
morgateKredi.hesapla();
morgateKredi.kaydet();
morgateKredi.morgacaözelbiroperasyonum();//gördüğünüz gibi TuketiciKredide morgacekredi.. gelmiyoken burada geliyor.
//yani abstractta ortak öz var onları kullanıyoruz ama özel istediğimiz operasyonlarıda yazabiliyoruz.


//Abstractlarla ilgili daha fazla bilgi edinmek için:
//https://www.tutorialsteacher.com/typescript/abstract-class