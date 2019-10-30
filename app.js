var btn = document.getElementById('book-form');

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};

btn.addEventListener('submit', function(e) {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;

    var book = new Book(title, author, isbn);
    var add = []
    add.push(book);
    console.log(add);
    e.preventDefault();
});

var arr = ["sg", "siy", "suhy", "su", "agh", "iuhd", "lkhd"];
var arr1 = [1, 2, 3, 4, 5, 6, 7];
var y = arr1.forEach(function(x) {
    var k;
    k = x * 5;
    console.log(k);
});
var str = "kdjh";
var m = arr.reverse();
console.log(m);

var text = "";
var i = 0;
do {
    text += " " + i;
    i++;
} while (i < 4);
console.log(text);

function myRecursia(n) {
    if (n < 0) {
        return 0;
    }
    console.log(n)
    return myRecursia(n - 1);

}
myRecursia(10);