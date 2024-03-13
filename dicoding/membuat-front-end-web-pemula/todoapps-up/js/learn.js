// TODO 1: Deklarasi Variabel untuk Nilai Awal dan Key
// Deklarasikan array todos untuk menyimpan daftar tugas.
// Tentukan STORAGE_KEY sebagai kunci untuk menyimpan data ke localStorage.
// Deklarasikan RENDER_EVENT dan SAVED_EVENT untuk event yang akan digunakan.
const todos = [];
const RENDER_EVENT = "render-todo";
const SAVED_EVENT = "saved-todo";
const STORAGE_KEY = "TODO_APPS";

// TODO 2: Fungsi untuk Generate ID
// Buat fungsi generateId yang mengembalikan timestamp saat ini sebagai ID unik.
function generateId() {
  return +new Date();
}

// TODO 3: Fungsi untuk Membuat Objek Todo
// Buat fungsi generateTodoObject yang menerima id, task, timestamp, dan isCompleted
// sebagai argumen dan mengembalikan objek todo.
function generateTodoObject(id, task, timestamp, isCompleted) {
  return {
    id,
    task,
    timestamp,
    isCompleted,
  };
}

// TODO 4: Fungsi untuk Menemukan Todo Berdasarkan ID
// Buat fungsi findTodo yang mencari todo dalam array todos berdasarkan todoId
// dan mengembalikan objek todo yang ditemukan.
// Buat fungsi findTodoIndex yang mirip dengan findTodo tetapi mengembalikan indeks
// dari todo yang dicari.
function findTodo(todoId) {
  for (const todoItem of todos) {
    if (todoItem.id === todoId) {
      // jika ditemukan function stop dan return object
      return todoItem;
    }
    // = sebelumnya salah tulis return null malah dalam for loop
  }
  // jika tidak ditemukan function stop dan return null
  return null;
}

function findTodoIndex(todoId) {
  for (const index in todos) {
    if (todos[index].id === todoId) {
      return index;
    }
  }
  return -1;
}

// TODO 5: Fungsi untuk Menyimpan dan Memuat Data dari Local Storage
// Buat fungsi isStorageExist untuk memeriksa dukungan localStorage.
// Buat fungsi saveData untuk menyimpan array todos ke localStorage.
// Buat fungsi loadDataFromStorage untuk memuat data dari localStorage dan
// memasukkannya ke dalam array todos.
function isStorageExist() {
  if (typeof Storage === undefined) {
    alert("Browser tidak support web storage!");
    return false;
  } else {
    return true;
  }
}

function saveData() {
  if (isStorageExist) {
    const parsed = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const todo of data) {
      // ^ push ke todos
      todos.push(todo);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}

// TODO 6: Membuat Todo dalam HTML
// Buat fungsi makeTodo yang menerima todoObject sebagai argumen dan mengembalikan
// elemen HTML yang merepresentasikan todo tersebut.
// container(textContainer (textTitle, textTimestamp), button)
function makeTodo(todoObject) {
  // ^ deconstruct
  const { id, task, timestamp, isCompleted } = todoObject;

  // ^ buat elements
  const textTitle = document.createElement("h2");
  textTitle.innerText = task;
  const textTimestamp = document.createElement("p");
  textTimestamp.innerText = timestamp;

  const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  textContainer.append(textTitle, textTimestamp);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.append(textContainer);
  container.setAttribute("id", `todo-${id}`);

  // ^ menentukan elemen button
  if (isCompleted) {
    const undoButton = document.createElement("button");
    undoButton.classList.add("undo-button");
    undoButton.addEventListener("click", function () {
      undoTaskFromCompleted(id);
    });

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.addEventListener("click", function () {
      removeTaskFromCompleted(id);
    });

    // append ke container
    container.append(undoButton, trashButton);
  } else {
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-button");
    checkButton.addEventListener("click", function () {
      addTaskToCompleted(id);
    });

    // append ke container
    container.append(checkButton);
  }

  return container;
}

// TODO 7: Menambah Todo ke Array dan Menampilkan ke UI
// Buat fungsi addTodo untuk menambahkan todo baru ke dalam array todos dan menyimpannya
// ke localStorage.
// Tambahkan event listener untuk form submission yang memanggil fungsi addTodo.
function addTodo() {
  const textTodo = document.getElementById("title").value;
  const timestamp = document.getElementById("date").value;
  const generatedID = generateId();

  const todoObject = generateTodoObject(
    generatedID,
    textTodo,
    timestamp,
    false
  );
  todos.push(todoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  // save data ke localStorage
  saveData();
}

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault(); /* agar tidak reset */
    addTodo();
  });

  // load data
  if (isStorageExist) {
    loadDataFromStorage();
  }
});

// TODO 8: Fungsi untuk Mengubah Status Todo
// Buat fungsi addTaskToCompleted untuk menandai todo sebagai selesai.
// Buat fungsi removeTaskFromCompleted untuk menghapus todo.
// Buat fungsi undoTaskFromCompleted untuk mengembalikan todo ke status belum selesai.
function addTaskToCompleted(todoId /* masih berupa id */) {
  const todoTarget = findTodo(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function removeTaskFromCompleted(todoId) {
  const todoTarget = findTodoIndex(todoId);

  // ? kenapa -1 karena itu index
  if (todoTarget == -1) return;

  todos.splice(todoTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function undoTaskFromCompleted(todoId) {
  const todoTarget = findTodo(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// TODO 9: Menangani Event Render dan Saved
// Tambahkan event listener untuk RENDER_EVENT untuk mengatur ulang tampilan todo setiap kali
// ada perubahan data.
// Tambahkan event listener untuk SAVED_EVENT untuk memberikan feedback ketika data berhasil disimpan.
document.addEventListener(RENDER_EVENT, function () {
  const uncompletedTODOList = document.getElementById("todos");
  const listCompleted = document.getElementById("completed-todos");

  // clearing
  uncompletedTODOList.innerHTML = "";
  listCompleted.innerHTML = "";

  for (const todoItem of todos) {
    // membbuat element todo dari array object
    const todoElement = makeTodo(todoItem);
    if (todoItem.isCompleted) {
      listCompleted.append(todoElement);
    } else {
      uncompletedTODOList.append(todoElement);
    }
  }
});

document.addEventListener(SAVED_EVENT, function () {
  console.log("Data berhasil disimpan.");
});