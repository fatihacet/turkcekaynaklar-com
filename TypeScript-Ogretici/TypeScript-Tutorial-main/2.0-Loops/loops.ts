//Bu bölümde "Iterators" yani yineleyiciler diye çevirdiğimiz operasyonlarını görelim.
//Örneğin bir diziye 3 isim yazacağım, peki bu isimleri tek bir console.log(); ile nasıl yazdırabilirdim?
let isimler=['Ayse','Ali','Serdar'];
//isimler dizisindeki 'Ayse','Ali' ... isimleri for in veya for of vasıtası ile yazdırabiliriz.

for (let i in isimler){
    console.log(i);
}

for(let i of isimler){
    console.log(i);
}// o halde farklarını console üzerinde görelim

/* for in operasyonumda indexler gelir 0,1,2
 for of operasyonumda ise direk isimler gelir

Eğer for in operasonunda isimleri yazdırmak istersek console.log(isimler[i]); yazmamız gerekir.
Bu şu demek indexte ki değeri al ekrana bas
*/

//Loops ilgili daha fazla bilgi edinmek için:
//https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
