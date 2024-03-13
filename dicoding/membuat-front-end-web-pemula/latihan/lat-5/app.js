function welcome() {
    alert('Sim salabim muncullah elemen-elemen HTML!');
    // mengambil div class "contents"
    const contents = document.querySelector('.contents');
    // * menghilangkan attribute
    contents.removeAttribute('hidden');
}
// ketika body selesai di-load
document.body.onload = welcome;

function increment() {
    // JS akan otomatis membaca number, jika bukan number hasilnya NaN
    document.getElementById('count').innerText++;

    if (document.getElementById('count').innerText == 7) {
        // membuat <h4> baru
        const hiddenMessage = document.createElement('h4');
        // mengisi text dalam tag <h4>
        hiddenMessage.innerText = 'Selamat! Anda menemukan hadiah tersembunyi...';

        // membuat <img>
        const image = document.createElement('img');
        // set src dari tag <img>
        image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg');
        
        const contents = document.querySelector('.contents');
        /* 
        *   <h4>
        *   "{innerText}""
        *   <img src="">
        *   </h4>
        */
        contents.appendChild(hiddenMessage).appendChild(image);
    }
}
document.getElementById('incrementButton').onclick = increment;

// ! jika menggunakan ByTagName itu memanggil semuanya
// var buttons = document.getElementsByTagName('button');
// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', increment);
// }