"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(cost, id) {
        this.cost = cost;
        this.id = id;
    }
    return Product;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(title, author, cost, id) {
        var _this = _super.call(this, cost, id) || this;
        _this.title = title;
        _this.author = author;
        return _this;
    }
    return Book;
}(Product));
var BluRay = /** @class */ (function (_super) {
    __extends(BluRay, _super);
    function BluRay(title, year, cost, id) {
        var _this = _super.call(this, cost, id) || this;
        _this.title = title;
        _this.year = year;
        return _this;
    }
    BluRay.prototype.GetTitle = function () {
        return "BluRay Movie Name";
    };
    return BluRay;
}(Product));
var cool = new BluRay("cool", 2001, 34, "WDR333");
var BOB = new Book("Book of Books", "J.J.Booker", 5, "BOB-JJB#112");
console.log("The cost of", cool.title, "is", cool.cost);
console.log("And the cost of", BOB.title, "is", BOB.cost);
var total = 0;
console.log("Thats a combined total of", total = BOB.cost + cool.cost);
