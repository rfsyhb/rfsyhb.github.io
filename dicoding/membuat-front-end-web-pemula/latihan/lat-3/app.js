// TODO 1: Manipulasi atribut dengan setAttribute()
// deklarasi variable
const gambar = document.getElementById('gambar');

/* 
* menggunakan method setAttribute untuk set width dan height
*  <img id="gambar" src="..." alt="Its a rubiks cube!" width="150" height="100">
* menjadi
*  <img id="gambar" src="..." alt="Its a rubiks cube!" width="300" height="215">
*/
gambar.setAttribute('width', 300);
// ! javascript automatic type conversion setAttribute()
gambar.setAttribute('height', '215');

// melakukan set attribute untuk button ke 4 (index 3)
const buttons = document.querySelectorAll('.button')

// menggunakan console browser didapat bahwa Play button itu index ke-3
const playButton = buttons[3];

// ! output
/* 
* <div class="button">
*    <button>Play (Coming Soon)</button>
* </div> 
*/

/*
* baru mendapatkan div, selanjutnya untuk mendapatkan <button> nya
* gunakan property children
*/
const playButtonElement = playButton.children[0];

playButtonElement.setAttribute('type', 'submit');

// TODO 2: Manipulasi konten melalui innerText, innerHTML, style.property
// mengambil elemen terlebih dahulu
const dicoding = document.getElementById('dicodingLink');

// merubah isinya
dicoding.innerText = 'Belajar Programming <strong>di Dicoding<strong>';

// coba untuk link google
const google = document.querySelector('#googleLink');
/*
* element
* .class
* #id
* [name="x"]
*/
google.innerHTML = 'Mencari sesuatu di <em><strong>Google<strong><em>';

// ! manipulasi style konten dengna style.property
// * melakukan perulangan untuk <div> class "button" dan mengambil child[0] yaitu <button>
for (const button of buttons) {
    console.log(button.children[0].style.borderRadius = '6px');
}
// kenapa borderRadius bukan border-radius seperti CSS? 
// ! mengikut standar penamaan khusus, menjadi camelCase tanpa '-'