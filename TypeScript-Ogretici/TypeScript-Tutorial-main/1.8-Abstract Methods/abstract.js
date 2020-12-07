var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("Kaydedildi");
    }; 
    return KrediBase;
}());
var TuketiciKredi = /** @class */ (function (_super) {
    __extends(TuketiciKredi, _super);
    function TuketiciKredi() {
        return _super.call(this) || this;
    }
    TuketiciKredi.prototype.hesapla = function () {
        console.log("Tüketici kredisine göre hesap yapıldı");
    };
    return TuketiciKredi;
}(KrediBase));
var MorgateKredi = /** @class */ (function (_super) {
    __extends(MorgateKredi, _super);
    function MorgateKredi() {
        return _super.call(this) || this;
    }
    MorgateKredi.prototype.hesapla = function () {
        console.log("Konut kredisine göre hesap yapıldı");
    };
    MorgateKredi.prototype.morgacaözelbiroperasyonum = function () {
    };
    return MorgateKredi;
}(KrediBase));
var tuketicikredi = new TuketiciKredi();
tuketicikredi.hesapla();
tuketicikredi.kaydet();
var morgateKredi = new MorgateKredi();
morgateKredi.hesapla();
morgateKredi.kaydet();
morgateKredi.morgacaözelbiroperasyonum(); 
