const books = [];
const RENDER_EVENT = 'render-book';
const STORAGE_KEY = 'BOOKSHELF_APP';

document.addEventListener('DOMContentLoaded', () => {
  const bookForm = document.getElementById('bookForm');
  const searchBook = document.getElementById('searchBook');

  bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBook();
  });

  searchBook.addEventListener('input', () => {
    searchBooks(searchBook.value);
  });

  if (isStorageExist()) {
    loadBooksFromStorage();
  }
});

function addBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  const year = parseInt(document.getElementById('bookYear').value);
  const isComplete = document.getElementById('isComplete').checked;

  const id = +new Date();
  const book = generateBookObject(id, title, author, year, isComplete);
  books.push(book);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveBooksToStorage();
}

function generateBookObject(id, title, author, year, isComplete) {
  return { id, title, author, year, isComplete };
}

function renderBooks() {
  const incompleteBookshelf = document.getElementById('incompleteBookshelf');
  const completeBookshelf = document.getElementById('completeBookshelf');

  incompleteBookshelf.innerHTML = '';
  completeBookshelf.innerHTML = '';

  books.forEach((book) => {
    const bookElement = createBookElement(book);
    if (book.isComplete) {
      completeBookshelf.append(bookElement);
    } else {
      incompleteBookshelf.append(bookElement);
    }
  });
}

function createBookElement(book) {
  const title = document.createElement('h3');
  title.innerText = book.title;

  const author = document.createElement('p');
  author.innerText = `Penulis: ${book.author}`;

  const year = document.createElement('p');
  year.innerText = `Tahun: ${book.year}`;

  const container = document.createElement('div');
  container.append(title, author, year);
  container.setAttribute('id', `book-${book.id}`);

  const actionContainer = document.createElement('div');

  if (book.isComplete) {
    const undoButton = document.createElement('button');
    undoButton.innerText = 'Belum selesai';
    undoButton.addEventListener('click', () => undoBook(book.id));

    actionContainer.append(undoButton);
  } else {
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Selesai';
    completeButton.addEventListener('click', () => completeBook(book.id));

    actionContainer.append(completeButton);
  }

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Hapus';
  deleteButton.addEventListener('click', () => removeBook(book.id));

  actionContainer.append(deleteButton);
  container.append(actionContainer);

  return container;
}

function completeBook(id) {
  const book = books.find((b) => b.id === id);
  if (book) {
    book.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveBooksToStorage();
  }
}

function undoBook(id) {
  const book = books.find((b) => b.id === id);
  if (book) {
    book.isComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveBooksToStorage();
  }
}

function removeBook(id) {
  const index = books.findIndex((b) => b.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveBooksToStorage();
  }
}

function searchBooks(query) {
  const lowerQuery = query.toLowerCase();
  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(lowerQuery)
  );
  renderFilteredBooks(filteredBooks);
}

function renderFilteredBooks(filteredBooks) {
  const incompleteBookshelf = document.getElementById('incompleteBookshelf');
  const completeBookshelf = document.getElementById('completeBookshelf');

  incompleteBookshelf.innerHTML = '';
  completeBookshelf.innerHTML = '';

  filteredBooks.forEach((book) => {
    const bookElement = createBookElement(book);
    if (book.isComplete) {
      completeBookshelf.append(bookElement);
    } else {
      incompleteBookshelf.append(bookElement);
    }
  });
}

function saveBooksToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function loadBooksFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  if (serializedData) {
    const data = JSON.parse(serializedData);
    books.push(...data);
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
}

function isStorageExist() {
  if (typeof Storage === undefined) {
    alert('Browser tidak mendukung local storage');
    return false;
  }
  return true;
}

document.addEventListener(RENDER_EVENT, () => {
  renderBooks();
});
