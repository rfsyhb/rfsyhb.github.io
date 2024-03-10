// TODO 1: menggunakan appenChild() untuk menyisipkan elemen baru ke ujung
const newElement = document.createElement('li') // <li></li> baru
newElement.innerText = 'Selamat menikmati!'; // <li>Selamat menikmati!</li>

// mengambil elemen id 'daftar' yaitu <ol> yang childsnya <li>
const daftar = document.getElementById('daftar');

// menyisipkan li baru ke akhir children
// * menggunakan method appendChild
daftar.appendChild(newElement)

// membuat li baru lagi
const elementAwal = document.createElement('li');
elementAwal.innerText = 'Hidupkan kompor.'; // terbuat li baru ber-value

// dari html terdapat li yang id-nya 'awal'
// ambil elemen tersebut
const itemAwal = document.getElementById('awal');
// * menggunakan method insertBefore
// * dipanggil melalui parent dan menerima dua buah parameter
// ! (elemenBaru, childElement patokan)
daftar.insertBefore(elementAwal, itemAwal);
