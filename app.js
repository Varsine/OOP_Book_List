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
})