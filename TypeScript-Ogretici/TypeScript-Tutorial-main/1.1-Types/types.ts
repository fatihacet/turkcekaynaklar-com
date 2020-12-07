let a:number=5;
let b:string='a';
let c:boolean=true;
let d:any;
let e:number[]=[1,2,3];//e'nin değişkenime number dizisi ve gelen değerleride 1,2,3 olarak belirtiyorum
let f:Array<number>=[1,2,3];
let g:any[]=[1,'a',true];//dizinin tipi any olursa istediğin tipi atıyabilirsin
let h:[string,number,boolean]=['Ahmet',5000,true]; //buna tuple denir. Sırasıyla gelecek olan tipleri belirttim


enum Payment {kredi=0,havale=1,eft=2,kapidaodeme=3};

let kredi=Payment.kredi;// 0
let havale=Payment.havale;// 1
let eft=Payment.eft;//2 'dir gelecek olan değer
//şimdi ben Paymentte kredi - havalenin arasına kapidaodeme eklersem bu sefer havale 2 olur
//bu karışıklıklar olmasın diye başta numaralandırma verdim
let kapidaodeme=Payment.kapidaodeme;//3

//Bulunduğumuz klasördeki types.js dosyasına mutlaka bakmalısınız. Js'de ne enumların ne kadar karışık olduğu dikkatinizi çekecektir.
