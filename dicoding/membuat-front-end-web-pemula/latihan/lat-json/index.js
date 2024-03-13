const storageKey = "STORAGE_KEY";
const submitAction = document.getElementById("form-data-user");

// > check apakah support storage
function checkForStorage() {
  return typeof Storage !== "undefined";
}

// > input data user
function putUserList(data) {
  // jika support maka
  if (checkForStorage()) {
    // membuat array kosong
    let userData = [];

    // jika value dari key storageKey ada
    if (localStorage.getItem(storageKey) !== null) {
      // menjadikan JSON dari value storageKey
      // memasukkan ke var userData
      // karena localStorage itu menyimpan string
      userData = JSON.parse(localStorage.getItem(storageKey));
    }

    // mengisi argumen ke userData
    userData.unshift(data);
    // jika lebih dari 5 maka hapus terakhir
    if (userData.length > 5) {
      userData.pop();
    }

    // simpan ke localStorage
    // menjadikan JSON sebagai string
    localStorage.setItem(storageKey, JSON.stringify(userData));
  }
}

// > mengambil data dari localStorage
function getUserList() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } else {
    return [];
  }
}

// > render list
function renderUserList() {
  const userData = getUserList();
  const userList = document.querySelector("#user-list-detail");
  userList.innerHTML = "";
  for (let user of userData) {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + user.nama + "</td>";
    row.innerHTML += "<td>" + user.umur + "</td>";
    row.innerHTML += "<td>" + user.domisili + "</td>";
    userList.appendChild(row);
  }
}

// > event: submit
submitAction.addEventListener("submit", function (event) {
  const inputNama = document.getElementById("nama").value;
  const inputUmur = document.getElementById("umur").value;
  const inputDomisili = document.getElementById("domisili").value;
  const newUserData = {
    nama: inputNama,
    umur: inputUmur,
    domisili: inputDomisili,
  };
  
  putUserList(newUserData);
  renderUserList();
  // tidak menggunakan default karena event "load" juga digunakan
});

// > event: load
window.addEventListener("load", function () {
  if (checkForStorage) {
    if (localStorage.getItem(storageKey) !== null) {
      renderUserList();
    }
  } else {
    alert("Browser yang Anda gunakan tidak mendukung Web Storage");
  }
});
