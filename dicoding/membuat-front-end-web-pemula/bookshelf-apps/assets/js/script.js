// >Mendefinisikan variabel utama
const books = [];
const RENDER_EVENT = "book-rendered";
const STORAGE_KEY = "BOOK_APPS";

// >Membuat id unik dari timestamp
function generateId() {
  return +new Date();
}

// >Membuat object
function createBookObject(id, title, author, year, isComplete) {
  return {
    id,
    title,
    author,
    year: parseInt(year),
    isComplete,
  };
}

// *mencari object buku yang tepat
function findBook(bookId) {
  for (const bookItem of books) {
    if (bookItem.id === bookId) {
      return bookItem;
    }
  }
  return null;
}

// *mencari index buku yang sesuai
function findBookIndex(bookId) {
  for (const index in books) {
    if (books[index].id === bookId) {
      return index;
    }
  }
  return -1;
}

// *Memastikan browser support storage
function isStorageExist() {
  return typeof Storage !== "undefined";
}

// >Menyimpan data
// =merubah object agar menjadi string
function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event("book-saved"));
  }
}

// >Mengambil data
// =mengambil data dari local storage kemudian mem-parse
// ?agar menjadi JSON
function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  // *data yang didapat akan di-push ke array books
  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}

// >Fungsi menambah buku
// =membuat object buku dan menambahkan ke array
function addBook() {
  const bookTitle = document.querySelector("#inputBookTitle").value;
  const bookAuthor = document.querySelector("#inputBookAuthor").value;
  const bookYear = parseInt(document.querySelector("#inputBookYear").value);
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
// >Menampilkan buku
// =parameter set default value
// ?jika belum melakukan filtering maka books yang digunakan
function displayBooks(filteredBooks = books) {
  // ! menggunakan querySelector
  // * '#' sebagai ciri mencari id
  const incompleteBookshelfList = document.querySelector(
    "#incompleteBookshelfList"
  );
  const completeBookshelfList = document.querySelector(
    "#completeBookshelfList"
  );

  // Clearign html buku
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

// >Membuat elements HTML dari buku
function makeBookElement(bookObject) {
  // deconstruct
  const { id, title, author, year, isComplete } = bookObject;

  // tujuan akhir elemen
  /*
  <article class="book_item card" id="book-x">
    <div class="book_data">
      <h3>{judulBuku}</h3>
      <p>{namaAuthor}</p>
      <p>{tahun}</p>
    </div>
    <div class="action">
      buttons tergantung dari status buku
    </div>
  </article>
  */
  const textTitle = document.createElement("h3");
  textTitle.innerText = title;

  const textAuthor = document.createElement("p");
  textAuthor.innerText = `Penulis: ${author}`;

  const textYear = document.createElement("p");
  textYear.innerText = `Tahun: ${year}`;

  const bookData = document.createElement("div");
  bookData.classList.add("book_data");
  // =append adalah menambah elemen di barisan akhir dalam elemen parent
  bookData.append(textTitle, textAuthor, textYear);

  const container = document.createElement("article");
  container.classList.add("book_item", "card");
  container.setAttribute("id", `book-${id}`);
  container.append(bookData);

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("action");

  if (isComplete) {
    const undoButton = document.createElement("button");
    undoButton.innerHTML = '<i class="fas fa-undo"></i>';
    undoButton.classList.add("green");
    undoButton.setAttribute('title', 'Urungkan');
    undoButton.addEventListener("click", function () {
      undoBookFromCompleted(id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("red");
    deleteButton.setAttribute('title', 'Hapus');
    deleteButton.addEventListener("click", function () {
      removeBook(id);
    });

    actionContainer.append(undoButton, deleteButton);
  } else {
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check-square"></i>';
    completeButton.classList.add("green");
    completeButton.setAttribute('title', 'Selesaikan');
    completeButton.addEventListener("click", function () {
      addBookToCompleted(id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("red");
    deleteButton.setAttribute('title', 'Hapus');
    deleteButton.addEventListener("click", function () {
      removeBook(id);
    });

    actionContainer.append(completeButton, deleteButton);
  }

  container.append(actionContainer);

  return container;
}

// Fungsi untuk mengubah status isComplete buku menjadi "true"
// ?memasukkan buku ke rak "Selesai dibaca" / "Completed"
function addBookToCompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  // menyimpan ke localStorage
  saveData();
}

// Fungsi untuk menghapus buku
// =menggunakan .splice
function removeBook(bookId) {
  const bookObject = findBook(bookId);
  // menggunakan method bawaan JS
  const  isConfirmed = confirm(`Apakah Anda yakin ingin menghapus buku ${bookObject.title} (${bookObject.year}) ?`);

  if (isConfirmed) {
    alert('Buku berhasil dihapus');

    // mencari index yang tepat
    const bookIndex = findBookIndex(bookId);
    
    if (bookIndex === -1) return;
    
    // menghapus index sebanyak 1 (hanya index itu saja)
    books.splice(bookIndex, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  } 
}

// Fungsi untuk mengubah status isComplete buku menjadi "false"
// ?memasukkan ke rak "Belum selesai dibaca" / "not completed"
function undoBookFromCompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// >event ketika HTML sudah sepenuhnya di-load
document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("inputBook");

  submitForm.addEventListener("submit", function (event) {
    // prevent default agar ketika submit tidak reset
    event.preventDefault();
    // akan memanggil RENDER_EVENT
    addBook();
  });

  const searchForm = document.getElementById("searchBook");
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // langsung displayBooks
    searchBooks();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

// Menambahkan event listener untuk RENDER_EVENT
document.addEventListener(RENDER_EVENT, function () {
  // *memanggil fungsi
  displayBooks(); // Ini akan memperbarui UI setiap kali ada perubahan pada data buku
});

// >fungsi mencari book dari value input
function searchBooks() {
  const searchValue = document
    .getElementById("searchBookTitle")
    .value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchValue)
  );
  displayBooks(filteredBooks); // Menyesuaikan fungsi displayBooks untuk menerima parameter array buku
}
