
function Bookshelf(htmlElement, books = []) {
    this.books = books;
    this.htmlElement = htmlElement;
    this.visibleBooks = books;
  
    this.seed = function (data) {
      //load in the data
      data.forEach((bookInfo) => {
        const book = new Book(
          bookInfo.author,
          bookInfo.language,
          bookInfo.subject,
          bookInfo.title
        );
        this.addBook(book);
      });
      
    //prepare and sort visible books ------------------------------------------------------------------------
    this.visibleBooks = this.books;
    this.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));
  
    this.render();
    // this.addNewBooks();
    
    };
  
    //add a book to the Bookshelf ------------------------------------------------------------------------
    this.addBook = function (book) {
      this.books.push(book);
      console.log(books);
    };
    this.addNewBooks = function () {
      console.log("Button Clicked");
      // this.books.push(bookInstance);
      // console.log(books);
    };
    this.render = function () {
      const ul = document.createElement("ul");
      const books = this.visibleBooks.map((b) => b.render());
      ul.replaceChildren(...books);
      this.htmlElement.replaceChildren(ul);
    };
    
  
    
    //returns the number of favorite books ------------------------------------------------------------------------
    this.countFavoriteBooks = function () {
      return this.books.reduce(
        (count, book) => (book.isFavorite ? count + 1 : count),
        0
      );
    };
  
    
    //filter visible books according to a given criteria function: {(book: Book) => boolean} criteria ------------------------------------------------------------------------
    this.filterVisibleBooks = function (criteria) {
      this.visibleBooks = this.books.filter(criteria);
      this.render();
    };
  
    //sort visible books according to a given compare function: {(a: Book, b: Book) => number}, compareFn ------------------------------------------------------------------------
    this.sortVisibleBooks = function (compareFn) {
      this.visibleBooks.sort(compareFn);
      this.render();
      };
    }
  
    // //making the toggle button hidden ------------------------------------------------------------------------
    //  function toggleComment(addCommentButton,input){
    //    console.log("toggle")
    //    addCommentButton.classList.toggle("hidden")
    //    input.classList.toggle("hidden")
    // }
    

    // //this pushes the comment into the array of books
     function addComment(book, value, input){
        console.log(book);
        book.comments=value; 
       input.value=""
     }
     