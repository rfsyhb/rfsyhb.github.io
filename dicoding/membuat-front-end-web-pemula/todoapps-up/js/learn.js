// > listener yang akan menjalankan kode ketika semua element HTML sudah dimuat
// ! dimuat menjadi DOM dengan baik
document.addEventListener("DOMContentLoaded", function () {
  // menyimpan data object todo
  const todos = [];
  const RENDER_EVENT = "render-todo";
  // id form
  const submitForm = document.getElementById("form");

  submitForm.addEventListener("submit", function (event) {
    // * agar web tidak refresh yang menyebabkan memory refresh (data hilang)
    event.preventDefault();
    // memanggil fungsi
    addTodo();
  });

  function addTodo() {
    // deklarasi variable
    // * mengambil nilai dari submit
    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;

    // create unique id
    const generatedID = generateId();

    // buat Object todo
    // * hasil dari function generateTodoObject
    const todoObject = generateTodoObject(
      generatedID,
      textTodo,
      timestamp,
      false
    );

    // melakukan push object untuk array "todos"
    todos.push(todoObject);

    // memanggil event RENDER_EVENT untuk melakukan hal hal lain
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  // * function 1: generate uniqueId berdasarkan timestamp
  // ? dipanggil dalam addTodo()
  function generateId() {
    // memanfaatkan new Date() untuk mendapatkan timestamp
    return +new Date();
  }

  // * function 2: membuat sebuah Object dari argumen yang diterima
  // ? dipanggil dalam addTodo()
  function generateTodoObject(id, task, timestamp, isCompleted) {
    return {
      id,
      task,
      timestamp,
      isCompleted,
    };
  }

  // > event: RENDER_EVENT
  // ? event dipanggil dalam addTodo()
  document.addEventListener(RENDER_EVENT, function () {
    // * deklarasi variable untuk mengambil elemen
    // * innerHTML kosong agar bersih
    const uncompletedTODOList = document.getElementById("todos");
    uncompletedTODOList.innerHTML = "";
    const completedTODOList = document.getElementById("completed-todos");
    completedTODOList.innerHTML = "";

    // * perulangan dari banyaknya object dalam array todos
    for (const todoItem of todos) {
      // ^ deklarasi variable todoElement dari function makeTodo
      // * function membuat <div><h2><p> untuk masing todo
      // * juga memberikan simbol yang tepat (checklist, repeat, delete)
      const todoElement = makeTodo(todoItem);

      // kembali ke todoItem dari todos
      // * memisahkan tipe to-do
      if (!todoItem.isCompleted) {
        // * !isCompleted = append ke dalam id 'todos'
        uncompletedTODOList.append(todoElement);
      } else {
        // * isCompleted = append ke dalam id 'completed-todos'
        completedTODOList.append(todoElement);
      }
    }
  });

  // > format HTML dari object
  // * todoObject -> todoitem (todoItem of todos) [object]
  // ? dipanggil saat loop di RENDER_EVENT
  function makeTodo(todoObject) {
    // textTitle = <h2></h2>
    const textTitle = document.createElement("h2");
    // <h2>{todoItem.task}</h2>
    textTitle.innerText = todoObject.task;

    // textTimestamp = <p></p>
    const textTimestamp = document.createElement("p");
    // <p>{todoItem.timestamp}</p>
    textTimestamp.innerText = todoObject.timestamp;

    // textContainer = <div></div>
    const textContainer = document.createElement("div");
    // <div class="inner"></div>
    textContainer.classList.add("inner");

    // * append ke dalam div
    /*
     * <div class="inner">
     * <h2>{todoItem.task}</h2> -> textTitle
     * <p>{todoItem.timestamp}</p> -> textTimestamp
     * </div>
     */
    textContainer.append(textTitle, textTimestamp);

    // container = <div></div>
    const container = document.createElement("div");
    // <div class="item shadow"></div>
    container.classList.add("item", "shadow");

    // > membungkus textContainer
    /*
    * <div class="item shadow">
    = {seluruh isi div textContainer}
    * </div>
    */
    container.append(textContainer);
    // <div class="item shadow" id="todo-x"></div>
    container.setAttribute("id", `todo-${todoObject.id}`);

    // > percabangan nilai isCompleted
    // ? true (sudah selesai)
    // = add undoButton dan trashButton
    if (todoObject.isCompleted) {
      // create element
      const undoButton = document.createElement("button");
      // <button class="undo-button"></button>
      undoButton.classList.add("undo-button");
      // = menambah event undo
      undoButton.addEventListener("click", function () {
        undoTaskFromCompleted(todoObject.id);
      });

      // create element
      const trashButton = document.createElement("button");
      // <button class="trash-button"></button>
      trashButton.classList.add("trash-button");
      // = menambah event trash
      trashButton.addEventListener("click", function () {
        removeTaskFromCompleted(todoObject.id);
      });

      // > jika true = container append [udon dan trash]
      container.append(undoButton, trashButton);
    } else {
      // ? else (baru ditambah)
      // = add checkButton

      // create element
      const checkButton = document.createElement("button");
      // <button class="check-button"></button>
      checkButton.classList.add("check-button");
      // = menambah event checklist
      checkButton.addEventListener("click", function () {
        addTaskToCompleted(todoObject.id);
      });

      // > jika baru ditambah = container append [check]
      container.append(checkButton);
    }

    // > mengembalikan container
    return container;
  }

  // ^ fungsi check index
  function findTodoIndex(todoId) {
    for (const index in todos) {
      // * mencari index yang sesuai dengan todoId
      // ? untuk melakukan splice
      if (todos[index].id === todoId) {
        return index;
      }
    }

    return -1;
  }

  // dipanggil dalam makeToDo
  function removeTaskFromCompleted(todoId) {
    // * menyimpan index dari todoId
    const todoTarget = findTodoIndex(todoId);

    if (todoTarget === -1) return;

    // * menghapus indexnya
    // ? 1 adalah 1 elemen saja yaitu target
    todos.splice(todoTarget, 1);

    // > render ulang
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  // ^ fungsi mengambil object
  // mengambil object yang sesuai dengai id
  function findTodo(todoId) {
    for (const todoItem of todos) {
      if (todoItem.id === todoId) {
        return todoItem;
      }
    }
    return null;
  }

  // dipanggil dalam makeToDo
  function undoTaskFromCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  // dipanggil dalam makeToDo
  function addTaskToCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  // ! contoh hasil return-nya
  /*
   * <div id="todo-<todo_id>" class="item shadow">
   *     <div class="inner">
   *         <h2>Tugas Android</h2>
   *         <p>2021-05-01</p>
   *     </div>
   * </div>
   */
});
