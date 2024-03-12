// TODO 1: Deklarasi Variabel untuk Nilai Awal dan Key
// Deklarasikan array todos untuk menyimpan daftar tugas.
// Tentukan STORAGE_KEY sebagai kunci untuk menyimpan data ke localStorage.
// Deklarasikan RENDER_EVENT dan SAVED_EVENT untuk event yang akan digunakan.

// TODO 2: Fungsi untuk Generate ID
// Buat fungsi generateId yang mengembalikan timestamp saat ini sebagai ID unik.

// TODO 3: Fungsi untuk Membuat Objek Todo
// Buat fungsi generateTodoObject yang menerima id, task, timestamp, dan isCompleted
// sebagai argumen dan mengembalikan objek todo.

// TODO 4: Fungsi untuk Menemukan Todo Berdasarkan ID
// Buat fungsi findTodo yang mencari todo dalam array todos berdasarkan todoId
// dan mengembalikan objek todo yang ditemukan.
// Buat fungsi findTodoIndex yang mirip dengan findTodo tetapi mengembalikan indeks
// dari todo yang dicari.

// TODO 5: Fungsi untuk Menyimpan dan Memuat Data dari Local Storage
// Buat fungsi isStorageExist untuk memeriksa dukungan localStorage.
// Buat fungsi saveData untuk menyimpan array todos ke localStorage.
// Buat fungsi loadDataFromStorage untuk memuat data dari localStorage dan
// memasukkannya ke dalam array todos.

// TODO 6: Membuat Todo dalam HTML
// Buat fungsi makeTodo yang menerima todoObject sebagai argumen dan mengembalikan
// elemen HTML yang merepresentasikan todo tersebut.

// TODO 7: Menambah Todo ke Array dan Menampilkan ke UI
// Buat fungsi addTodo untuk menambahkan todo baru ke dalam array todos dan menyimpannya
// ke localStorage.
// Tambahkan event listener untuk form submission yang memanggil fungsi addTodo.

// TODO 8: Fungsi untuk Mengubah Status Todo
// Buat fungsi addTaskToCompleted untuk menandai todo sebagai selesai.
// Buat fungsi removeTaskFromCompleted untuk menghapus todo.
// Buat fungsi undoTaskFromCompleted untuk mengembalikan todo ke status belum selesai.

// TODO 9: Menangani Event Render dan Saved
// Tambahkan event listener untuk DOMContentLoaded untuk memuat data dari localStorage
// saat aplikasi dimuat.
// Tambahkan event listener untuk RENDER_EVENT untuk mengatur ulang tampilan todo setiap kali
// ada perubahan data.
// Tambahkan event listener untuk SAVED_EVENT untuk memberikan feedback ketika data berhasil disimpan.

// TODO 10: Menyusun UI Berdasarkan Data Todo
// Dalam penangan RENDER_EVENT, bersihkan konten container todo dan isi ulang berdasarkan
// array todos.