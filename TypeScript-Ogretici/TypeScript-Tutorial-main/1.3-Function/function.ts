//Ortalama hesaplaması yapan fonksiyon
function getAverage(a:number,b:number,c:number):string{//dışarıdan a,b,c değerlerini number olarak aldım ve geriye bunları hesaplama sonucu string olarak dön dedim
    const result=(a+b+c)/3;// gelen paremetre toplanır 3'e bölünür
    return 'result: '+result;//daha sonra ise sonucumu döndürdüm
}

    /*Aklımıza şu soru gelebilir a:number yazmak ne işimize yaradı?
        eğer a,b,c şeklinde verseydik sayı gönderseydik sıkıntı olmazdı fakat harfte versen başta hata vermezdi.
            a:number ... diyerek ben aşağıda fonksiyonuma harf verirsem artık anında hata verecektir uyaracaktır.*/

getAverage(10,20,30);//fonksiyonun beklediği sayısal değerleri gönderdim.


   
    /*  ŞİMDİİ BİR ÖRNEK DAHA YAPALIM EĞER 3 SAYI VERMEK İSTESEYDİK  */

    function getAverage2(a:number,b:number,c?:number):string{ //(a:number,b:number,c?:number) cden sonra "?" koydum.Bu şu demek istersen c'ye değer atamayabilirsin hata vermez
        let total=a+b;// a değer ile b değerini topladım örn: 10+20=30.  30 sonucunu total değeri içine attım.
        let count=2;// a,b count 2. henüz 2 değer geldi.

        if (typeof c!=='undefined') {//c değeri undefined yani tanımsız belirsiz değilse içinde değer varsa
            total =total+c;// yukarıdaki total ile c'nin içindeki değeri topla
            count++;//count değerinide bir arttır 3 yap
        }
        const result=total/count;//daha sonra toplamı kaç değer gönderildiyse ona böl.
        return 'result: '+result;
    }
getAverage2(10,20);

    /*  PEKİ DİLEDİĞİMİZ KADAR SAYI GÖNDERMEK İSTESEYDİK İŞTE BURADA KONUYA REST PARAMETERS DAHİL OLUR  */

    function getAverage3(...a:number[]):string{//gelecek değere a dedim değerinide number dizisi olarak belirttim
    let total=0;//çünkü ne geleceğini bilmiyoruz 0'dan başlattık
    let count=0;

    for (let i = 0; i < a.length; i++) {//0 dan başla a'ya kaç değer gönderdiysem toplam sayısını al 10 değer gönderdim. bir bir arttır.
        total =total+a[i];//a'nın içindeki değerleri bir bir arttırarak totala at orada ise toplamına işlemi olur.
        count++;//ve her for döndüğünde burayıda bir arttır.
    }
    
    const result=total/count; //total 550 count ise 10
    return 'result: '+result;//sonuç: 55
}
//getAverage3(10,20,30,40,50,60,70,80,90,100);

//isterseniz sonucu görelim bunun için fonksiyonu consta atıp daha sonra bunu console.logla yazdıracağım.

const Result=getAverage3(10,20,30,40,50,60,70,80,90,100);
    console.log(Result); //Console çıktısı: 55
