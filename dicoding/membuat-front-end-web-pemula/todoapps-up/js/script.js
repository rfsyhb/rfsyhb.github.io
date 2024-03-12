// TODO Menambahkan metode manipulasi data web storage
// TODO Menambahkan fungsi memuat data ketika Todo Apps dibuka

// listener yang akan menjalankan kode ketika semua element HTML sudah dimuat
// dimuat menjadi DOM dengan baik
document.addEventListener("DOMContentLoaded", function () {
  // menyimpan data object todo
  const todos = [];
  const RENDER_EVENT = "render-todo";
  const SAVED_EVENT = "saved-todo";
  const STORAGE_KEY = 'TODO_APPS';

  // id form
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (event) {
    // agar web tidak refresh yang menyebabkan memory refresh (data hilang)
    event.preventDefault();
    addTodo();
  });

  function addTodo() {
    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;

    // membuat id dari fungsi generator
    const generatedID = generateId();
    // memanggil generateTodoObject
    const todoObject = generateTodoObject(
      generatedID,
      textTodo,
      timestamp,
      false
    );
    // melakukan push dari object dibuat
    todos.push(todoObject);

    // me-render data yang telah disimpan pada array todos
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  // membuat identitas unik tiap item
  function generateId() {
    // memanfaatkan new Date() untuk mendapatkan timestamp
    return +new Date();
  }

  // membuat object baru
  function generateTodoObject(id, task, timestamp, isCompleted) {
    return {
      id,
      task,
      timestamp,
      isCompleted,
    };
  }

  //  render
  document.addEventListener(RENDER_EVENT, function () {
    // console.log(todos);
    const uncompletedTODOList = document.getElementById("todos");
    // memastikan isinya bersih
    uncompletedTODOList.innerHTML = "";

    const completedTODOList = document.getElementById("completed-todos");
    completedTODOList.innerHTML = "";

    for (const todoItem of todos) {
      const todoElement = makeTodo(todoItem);

      if (!todoItem.isCompleted) {
        // append ke container uncompleted
        uncompletedTODOList.append(todoElement);
      } else {
        // append ke container completed
        completedTODOList.append(todoElement);
      }
    }
  });

  // membuat fungsi makeTodo
  function makeTodo(todoObject) {
    const textTitle = document.createElement("h2");
    textTitle.innerText = todoObject.task;

    const textTimestamp = document.createElement("p");
    textTimestamp.innerText = todoObject.timestamp;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner");
    // mengisi ke dalam div
    textContainer.append(textTitle, textTimestamp);

    const container = document.createElement("div");
    container.classList.add("item", "shadow");
    container.append(textContainer);
    container.setAttribute("id", `todo-${todoObject.id}`);

    // fungsi
    if (todoObject.isCompleted) {
      const undoButton = document.createElement("button");
      // menambah class
      undoButton.classList.add("undo-button");

      undoButton.addEventListener("click", function () {
        undoTaskFromCompleted(todoObject.id);
      });

      const trashButton = document.createElement("button");
      trashButton.classList.add("trash-button");

      trashButton.addEventListener("click", function () {
        removeTaskFromCompleted(todoObject.id);
      });

      container.append(undoButton, trashButton);
    } else {
      const checkButton = document.createElement("button");
      checkButton.classList.add("check-button");

      checkButton.addEventListener("click", function () {
        addTaskToCompleted(todoObject.id);
      });

      container.append(checkButton);
    }

    return container;
  }

  // > remove todo
  function removeTaskFromCompleted(todoId) {
    const todoTarget = findTodoIndex(todoId);

    if (todoTarget === -1) return;

    todos.splice(todoTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    // menyimpan ke local
    saveData();
  }

  // > undo todo
  function undoTaskFromCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    // menyimpan ke local
    saveData();
  }

  // > add todo
  function addTaskToCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    // menyimpan ke local
    saveData();
  }

  // mengambil object yang sesuai dengai id
  function findTodo(todoId) {
    for (const todoItem of todos) {
      if (todoItem.id === todoId) {
        return todoItem;
      }
    }
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

  // > menyimpan data
  function saveData() {
    if (isStorageExist()) {
      const parsed = JSON.stringify(todos);
      localStorage.setItem(STORAGE_KEY, parsed);
      document.dispatchEvent(new Event(SAVED_EVENT));
    }
  }
  
  // memastikan storage supported
  function isStorageExist() /* boolean */ {
    if (typeof Storage === undefined) {
      alert("Browser kamu tidak mendukung local storage");
      return false;
    }
    return true;
  }

  document.addEventListener(SAVED_EVENT, function () {
    console.log(localStorage.getItem(STORAGE_KEY));
  });
});
