/*
Interface arayüz demek. Tanımlanmamış operasyonlar barındırıyor.
İmzayı bırakıyoruz ve açıp farklı yerlerde bunu yazıyoruz.
İnterface üretecek olduğumuz bilgilerin imzasını taşır. Aracın hangi özelliklere sahip olmasını gerektiğini tutan şema gibi düşünebiliriz.
*/
interface Product{
    id:number;
    name:string;
    unitPrice:number;
}// Product 3 özellipe sahip olsun. id, name, unitPrice

function save(product:Product){//yaptığımda artık ben bu productu veritabanına kaydedeceğim gibi düşünebiliriz.
    console.log(product.name +" kaydedildi!"); //product noktaya basınca id, name, unitPrice geldi. Bende nameyi kullandım.
}

save({id:1,name:'Mouse',unitPrice:5000});//bakın save fonksiyonun içine id, name, unitprice gönderdim.Eğer tüm değerleri göndermeseydim hata verirdi.
save({id:2,name:'Keyboard',unitPrice:4000});//daha sonra DİKKAT yine aynı save fonksiyonuna farklı bilgiler gönderiyorum.
//Console çıktısı:  Mouse Kaydedildi!   Not:Sizde console üzerinden görmek isterseniz en alt satırlarda Consolede Görmek kısmına bakınız.
//Console çıktısı:  Keyboard Kaydedildi!
    //Detayı yakaladınız değil mi? tek bir fonksiyonum üzerinden birden fazla kez hatta istediğim kadar ekleme yapabiliyorum.


//Interfacelerle ilgili daha fazla bilgi edinmek için:
//https://www.typescriptlang.org/docs/handbook/interfaces.html