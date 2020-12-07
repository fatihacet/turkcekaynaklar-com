# TypeScript Tutorial
# Hoşgeldiniz

Merhaba, TypeScript öğrenirken öğrenim aşamamı adım adım dökümante ettim. Her projeyi yorum satırlarıyla açıkladım. Çoğu projenin sonunda daha detaylı bilgiler için kaynak bıraktım. Angulara geçmeden önce TypeScript altyapımın sağlam olmasını istedim. 3 farklı hocanın derslerini izledim. Bu hocalardan ikisi Türk biri ise yabancı. Üçününde bilgisini harmanlayarak ortaya güzel bir dökümantasyon çıkardım. Daha önceden C#, Java, C gibi programlama dillerinde bilginiz varsa çok hızlı bir şekilde TypeScript'e hakim olacağınızı düşünüyorum. Eğer ki hiç programlama bilgisine sahip değilseniz sabırla örnekleri uygulayarak ilerlemelisiniz.
Umarım memnun kalırsınız.


![alt text](https://www.puresourcecode.com/wp-content/uploads/2020/06/typescript-wallpaper.png)

# TypeScript nedir?

TypeScript, güçlü biçimde yazılmış, nesne yönelimli, derlenmiş bir dildir. Microsoft'ta **Anders Hejlsberg** (C# tasarımcısı) tarafından tasarlandı.  TypeScript; bünyesinde barındırdığı derleyici sayesinde, yazılan kodu JavaScript koduna çevirir. TypeScript gerek istemci taraflı, gerekse sunucu taraflı yazılım geliştirmede kullanılabilmektedir.

## Kurulum

TypeScript derleyicisini bilgisayarımıza yükleyerek işlememize başlayalım. 

 - PowerShellimizi açalım daha sonra açılan terminal ekranına **npm
   install -g typescript** yazalım.
 - Bilgisayarımıza TypeScript kurulumu gerçekleşti. Yüklendiğinden emin
   olmak için: **tsc --version** diyebiliriz. Eğerki hata vermeyerek
   versiyon numarasını yazdırdıysa bir problem yoktur.
 - Hata aldıysanız terminalinize **Set-ExecutionPolicy -ExecutionPolicy
   RemoteSigned** yazınız. Hata düzelecektir.




## Terminal Kullanımı

 - Projelerin çıktısını görmek için önce proje.**ts** olan dosyamı proje.**js**'ye çevirmeliyim. Daha sonra ise terminalde değerlerimi görmek için bir komut çalıştırmalıyım.
 - Terminal kullanımı çok basittir. Her bölüm için size birazdan anlatacağım terminal kullanımını uygulayabilirsiniz.
 - Örneğin 1. ders için yapalım: "1.0-Isınma Projesi" klasörümün üzerine sağ tıklayıp çıkan ekranda **Open in Integrated Terminal**'e tıklıyorum.
 - Çıkan terminal ekranına **tsc modules.ts** yazıyorum. 
 - Daha sonra console.logları görmek için **node greeter.js** yazıyorum.
 - Terminalde **console.log('Hello' + name);** değeri gözükecektir.

## Konular
1. Isınma Projesi
2. Types
3.	Type-Assertions
4.	Function
5.	Class
6.	Inheritance
7.	Private and Public
8.	Getter and Setter
9.	Abstract Methods
10.	Interface
11.	Loops
12.	Generic
13.	Modules

# Kaynaklar
[Komple Uygulamalalı Web Geliştirme: Sadık Turan](https://www.udemy.com/course/komple-web-developer-kursu/) 

[Modern Web Geliştirme: Engin Demiroğ](https://www.udemy.com/course/komple-sifirdan-web-gelistirme-kursu/) 

[TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!](https://www.youtube.com/watch?v=BwuLxPH8IDs&t=2s&ab_channel=Academind) 

www.typescriptlang.org 

www.tutorialspoint.com/typescript 

www.typescripttutorial.net
