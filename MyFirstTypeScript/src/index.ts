class Product {

    cost: number;
    id: string;

    constructor(cost: number, id: string){
        this.cost = cost;
        this.id = id;
    }
}

class Book extends Product {
    title: string;
    author: string;

    constructor(title: string, author: string, cost: number, id: string){
        super(cost,id);
        this.title = title;
        this.author = author;
    }
}

class BluRay extends Product {
    title: string;
    year: number;

    constructor(title: string, year: number, cost: number, id: string){
        super(cost,id);
        this.title = title;
        this.year = year;
    }

    GetTitle(): string{
        return "BluRay Movie Name";
    }

}

let cool: BluRay = new BluRay("cool", 2001, 34, "WDR333")
let BOB: Book = new Book("Book of Books", "J.J.Booker", 5, "BOB-JJB#112")
console.log("The cost of", cool.title, "is",cool.cost);
console.log("And the cost of", BOB.title, "is",BOB.cost);
var total = 0;
console.log("Thats a combined total of",total = BOB.cost + cool.cost);