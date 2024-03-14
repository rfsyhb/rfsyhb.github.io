// Mendefinisikan variabel utama dan konstanta
const books = [];
const RENDER_EVENT = "book-rendered";
const STORAGE_KEY = "BOOK_APPS";

// Fungsi untuk menghasilkan ID unik
function generateId() {
  return +new Date();
}

// Fungsi untuk membuat objek buku
function createBookObject(id, title, author, year, isComplete) {
  return {
    id,
    title,
    author,
    year,
    isComplete,
  };
}

// Fungsi untuk menyimpan dan memuat data dari Local Storage
function isStorageExist() {
  return typeof Storage !== "undefined";
}

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event("book-saved"));
  }
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}

// Fungsi untuk menambahkan buku
function addBook() {
  const bookTitle = document.querySelector("#inputBookTitle").value;
  const bookAuthor = document.querySelector("#inputBookAuthor").value;
  const bookYear = document.querySelector("#inputBookYear").value;
  const bookIsComplete = document.querySelector("#inputBookIsComplete").checked;

  const generatedID = generateId();
  const bookObject = createBookObject(
    generatedID,
    bookTitle,
    bookAuthor,
    bookYear,
    bookIsComplete
  );
  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// Fungsi untuk menampilkan buku ke UI
function displayBooks(filteredBooks = books) {
  const incompleteBookshelfList = document.querySelector(
    "#incompleteBookshelfList"
  );
  const completeBookshelfList = document.querySelector(
    "#completeBookshelfList"
  );

  // Membersihkan daftar buku terlebih dahulu
  incompleteBookshelfList.innerHTML = "";
  completeBookshelfList.innerHTML = "";

  for (const book of filteredBooks) {
    const bookElement = makeBookElement(book);
    if (book.isComplete) {
      completeBookshelfList.appendChild(bookElement);
    } else {
      incompleteBookshelfList.appendChild(bookElement);
    }
  }
}

// Fungsi untuk membuat elemen buku dalam HTML
function makeBookElement(bookObject) {
  const { id, title, author, year, isComplete } = bookObject;

  const textTitle = document.createElement("h3");
  textTitle.innerText = title;

  const textAuthor = document.createElement("p");
  textAuthor.innerText = `Penulis: ${author}`;

  const textYear = document.createElement("p");
  textYear.innerText = `Tahun: ${year}`;

  const container = document.createElement("div");
  container.classList.add("book_item");
  container.append(textTitle, textAuthor, textYear);
  container.setAttribute("id", `book-${id}`);

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("action");

  if (isComplete) {
    const undoButton = document.createElement("button");
    undoButton.innerText = "Belum Selesai Dibaca";
    undoButton.classList.add("green");
    undoButton.addEventListener("click", function () {
      undoBookFromCompleted(id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Hapus Buku";
    deleteButton.classList.add("red");
    deleteButton.addEventListener("click", function () {
      removeBook(id);
    });

    actionContainer.append(undoButton, deleteButton);
  } else {
    const completeButton = document.createElement("button");
    completeButton.innerText = "Selesai Dibaca";
    completeButton.classList.add("green");
    completeButton.addEventListener("click", function () {
      addBookToCompleted(id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Hapus Buku";
    deleteButton.classList.add("red");
    deleteButton.addEventListener("click", function () {
      removeBook(id);
    });

    actionContainer.append(completeButton, deleteButton);
  }

  container.appendChild(actionContainer);

  return container;
}

// Fungsi untuk mengubah status buku menjadi "Selesai Dibaca"
function addBookToCompleted(bookId) {
  const bookTarget = books.find((book) => book.id === bookId);
  if (bookTarget == null) return;
  bookTarget.isComplete = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// Fungsi untuk menghapus buku
function removeBook(bookId) {
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex == -1) return;
  books.splice(bookIndex, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// Fungsi untuk mengubah status buku menjadi "Belum Selesai Dibaca"
function undoBookFromCompleted(bookId) {
  const bookTarget = books.find((book) => book.id === bookId);
  if (bookTarget == null) return;
  bookTarget.isComplete = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("inputBook");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  const searchForm = document.getElementById("searchBook");
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    searchBooks();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }

  // Menambahkan event listener untuk RENDER_EVENT
  document.addEventListener(RENDER_EVENT, function () {
    displayBooks(); // Ini akan memperbarui UI setiap kali ada perubahan pada data buku
  });
});

// Fungsi untuk mencari buku berdasarkan judul
function searchBooks() {
  const searchValue = document.getElementById("searchBookTitle").value.toLowerCase();
  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchValue));
  displayBooks(filteredBooks); // Menyesuaikan fungsi displayBooks untuk menerima parameter array buku
}