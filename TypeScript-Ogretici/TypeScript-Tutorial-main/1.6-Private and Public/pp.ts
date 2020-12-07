
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
    private isim:string; //Private: isim artık Musterinde vs.gelmez sadece ve sadece tanımlandığı class içinde geçerli.Private sadece tanımlı olduğu metot class vb. içinde geçer.
    protected Name:string;//Protected az önce yapamadığımı yapmamızı sağlıyor inheritance(kalıtım) verdiğimiz class içindede geçiyor demek. Mesela bir alttaki Musteri classında buna görelim.
    public NameSurname:string;//Public ise heryerde erişebilirim demek. Yine aynı şekilde Musteri classında görelim
    kaydet(){
        console.log("kişi kaydedildi");
    }
}

class Musteri extends Kisi{
    Name="Sadece geldiğini görmemiz için yazdık";
    NameSurname="Sadece geldiğini görmemiz için yazdık";
    satisYap(){
        console.log("Satış Yapıldı");
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maaş öde");
    }
}


let musteri=new Musteri();
musteri.kaydet();
musteri.satisYap();

//Private, Public, Protected ile ilgili daha fazla bilgi edinmek için:
//https://www.typescriptlang.org/docs/handbook/classes.html