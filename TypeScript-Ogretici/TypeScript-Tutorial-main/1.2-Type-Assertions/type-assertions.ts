let message='Hello';//bu halde messagenin üzerine gelirsen string olduğunu anlarsın
message.length;// .'dan sonra string ile kullanabileceğimiz bir sürü metod gelir.

let message1;//any gelir çünkü tanımlamasını yaptık fakat içine bir değer atamadık.
message1='Hello World';//bu durumdada any gelir çünkü tanımlarken sayı harf vb. atamadık sonradan atadık

//message1. dediğinde string gibi kullanabileceğim özellikler gelmez çünkü message1'in türü any'dir;
    //fakat biz şu şekilde çevirebiliriz.
let count=(<string>message1).length;//işte bu halde string değere çevirdiğimizi açıkca belli ettik ve lengtin gelmesini 
//daha doğrusu string ile kullanabileceğim metodların gelmesini sağladık ve lengthi seçtik.
        //farklı bir kullanım örneği
let counts=(message1 as string).length; //bu yöntemlede fark veri tiplerine dönüştürülebilir.
