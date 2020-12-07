/*
Class nesne diye adlandırabileceğimiz bir yapıdır.
Class gerçek hayatta bir nesneye benzeyebilir, örneğin ev evin oda sayısı pencere sayısı evin duvar rengi tipi vb... 
Bunlar bir ev nesnesinin özellikleridir.
Birde evin içinde yapabileceklerimiz var uyumak yemek yemek.
Classlar yani nesneler hem özellikleri hemde içinde operasyonları barındıracak olan yapılardır.
*/

class Ev{
    _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;//özelliklerimiz

    //Classlar bir referans tiptir.Biz bu classı kullanmak için ondan bir instance üretmemiz gerekiyor yani newlemek dediğimiz örnekleme işlemini yapmamız gerekiyor bunu yapınca çalışacak blok
    //constructor bloktur 
    constructor(odaSayisi:number,pencereSayisi:number,kat:number) {//constructor bu şekilde tanımlanır.Yukarıdan gelen değerleri buraya atayacağım
        this._odaSayisi=odaSayisi; //constructordan gelen değelerimi _odasayisi , _Pencere gibi değerlerime gönderiyorum
        this._pencereSayisi=pencereSayisi;
        this._kat=kat;
    }

    yemekYe(){//fonksiyonumuz
        console.log(this._kat+" katlı evde yemek yenildi");//daha sonra gönderdiğim değerleri burada kullanıyorum
    }
}

let ev=new Ev(3,4,5);//odasayisi penceresayisi kat değerlerini Ev'in constructoruna gönderdim;
console.log(ev);
ev.yemekYe();//yemekYe  () fonksiyon old. için sonuna parantez koymalıyım.


//Classlar ile ilgili daha fazla bilgi edinmek için:
//https://www.typescriptlang.org/docs/handbook/classes.html
