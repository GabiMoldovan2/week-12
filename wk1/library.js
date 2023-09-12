export class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books = [...this.books, book];
  }

  removeBook(ISBN) {
    this.books = this.books.filter(book => book.ISBN !== ISBN);
  }

  findBooksByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }

  listBooks() {
    this.books.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`);
    });
  }

  getTotalBooks() {
    return this.books.length;
  }

  getBooksByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }

  getBooksWithTitleContaining(keyword) {
    return this.books.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()));
  }

  getUniqueAuthors() {
    const authors = this.books.map(book => book.author);
    return [...new Set(authors)];
  }

  getTotalBooksByAuthor(author) {
    return this.books.reduce((total, book) => {
      return book.author === author ? total + 1 : total;
    }, 0);
  }

  hasAnyBooksByAuthor(author) {
    return this.books.some(book => book.author === author);
  }

  haveAllBooksByAuthor(author) {
    return this.books.every(book => book.author === author);
  }

  getBookTitles() {
    return this.books.map(book => book.title);
  }
}