//initialization ------------------------------------------------------------------------------
const bookshelfElement = document.querySelector(".books");
const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);
bookshelf.render();


//favorite Feature ------------------------------------------------------------------------------
const favCount = document.querySelector(".favCount");
const updateBtn = document.querySelector(".favUpdateBtn");

updateBtn.addEventListener("click", () => {
  favCount.textContent = bookshelf.countFavoriteBooks();
});


//searching ------------------------------------------------------------------------------
const searchInput = document.querySelector("nav input");
const searchBtn = document.querySelector(".searchBtn");

  //this only searches through the titles of the books
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const searchFn = (b) => b.title.toLowerCase().includes(query);
  bookshelf.filterVisibleBooks(searchFn);
});


//sorting ------------------------------------------------------------------------------
const sortBy = document.querySelector(".sortBy");

  //this only sorts by the titles of the books
sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  let sortFn;

  if (query === "titleaz") {
    sortFn = (a, z) => a.title.localeCompare(z.title);
  } else if (query === "titleza") {
    sortFn = (a, z) => z.title.localeCompare(a.title);
  }

  bookshelf.sortVisibleBooks(sortFn);
});

//add new book ------------------------------------------------------------------------------
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document.querySelector("#addAuthor").value;
  const title = document.querySelector("#addTitle").value;
  const language = document.querySelector("#addLanguage").value;
  const subjects = document.querySelector("#addSubject").value.split(' ');
  const bookInstance = new Book(author, language, subjects, title);
  console.log(bookInstance);
  bookData.push(bookInstance);
  console.log(bookData);
  form.reset()
});

//comment box ------------------------------------------------------------------------------
