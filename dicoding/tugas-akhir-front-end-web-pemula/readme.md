# Tugas Akhir/Proyek Akhir
## Kelas: Belajar Membuat Front-End Web untuk Pemula

Tugas karya R-02 Rafi Syihab

Pembuatan _bookshelf-app_ yang dapat mencatat/menambah buku dan akan disimpan pada localStorage, status buku dapat diubah.

Fitur:
- Menambah buku
- Memindahkan buku antar rak
- Menghapus buku di kedua rak
- Memanfaatkan localStorage untuk penyimpanan data object buku
- Meminta konfirmasi ketika menghapus buku (menggunakan method confirm)

Kesalahan:
1. properti year tidak di-parseInt (createBookObject() dan addBook())(solved)
2. id harus berupa string | number