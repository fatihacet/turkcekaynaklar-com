/*Generic'ler tasarlandığımız interface, class, metod yada parametrelerin (argümanların) belirli bir tip için değil
 bir şablon yapısına uyan her tip için çalışmasını sağlayan bir yapıdır.*/
 //Örneğin biz bir fonksiyona gelen değeri functionu yazarken belirtmek zorundayız fakat generic kullanırsak bunu sonradan gönderebiliriz. Nasılmı? örneğimize geçelim. 


 function gelen<T>(X:T):T{//<T> yerine number, string hangi değeri göndermek istersem o gelir. X:T hangi sayıyı göndermek istersem o gelir. :T dönüş tipi gelir.
     return X;
 }

 let result=gelen<Number>(5);//gelen isimli fonksiyonuma <Number> sayı tipinde bir değer göndereceğimi belirttim ve (5) sayısını gönderdim.
 console.log(result);

 let result2=gelen<string>('Gonderdiğim değerim');//buradada aynı fonksiyona string değer gönderiyorum.Consolede görelim.
 console.log(result2);
