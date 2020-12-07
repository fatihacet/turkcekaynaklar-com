
function greeter(name) {//Fonksiyonun içine name göndereceğim
    console.log('Hello' + name);//ve program derlendiğinde Hello Ahmet yazılmasını sağlayacağım.
}

let user = 'Ahmet';//'Ahmet' verimizi user değişkenimize atıyoruz.
greeter(user);//ve greeter fonksiyonumuza gönderiyoruz.
//O halde bu operasonları js'ye çevirip nasıl göründüğüne ve çalıştığına bakalım.Js dosyasına çevirmek için "Terminal Kullanımı" bölümünü okuyunuz.

//Şu anki tek farkı burada 'let' anahtar kelimesini Js'de var ile değiştiriyor olması.
//Let'i eski versiyon tarayıcılar anlamaz çünkü let ES6 ile birlikte geldi bu sebepten dolayı her taracının anlayacağı var'a çevrildi.
