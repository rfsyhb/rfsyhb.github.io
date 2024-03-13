const sessionStorageKey = 'PRESS_FREQUENCY';

if (typeof Storage !== 'undefined') {
  // * jika masih kosong maka berikan nilai 0 terlebih dahulu
  if (sessionStorage.getItem(sessionStorageKey) === null) {
    sessionStorage.setItem(sessionStorageKey, 0);
  }

  // = deklarasi elemen dalam variable
  const incrementButton = document.querySelector('#incrementButton');
  const clearButton = document.querySelector('#clear');
  const countDisplay = document.querySelector('#count');

  // * memberikan nilai sekarang
  countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);

  // > increment event
  incrementButton.addEventListener('click', function () {
    // ambil count sekarang dari session
    let count = sessionStorage.getItem(sessionStorageKey);
    // iterasikan
    count++

    // set nilai terbaru
    sessionStorage.setItem(sessionStorageKey, count);
    // display
    countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
  });

  // > clear event
  clearButton.addEventListener('click', function () {
    // hapus
    sessionStorage.removeItem(sessionStorageKey);
    // jadikan angka jangan gunakan .getItem karena sedang di-remove
    countDisplay.innerText = 0;
  });
  
} else {
  alert('browser tidak mendukung web storage');
}