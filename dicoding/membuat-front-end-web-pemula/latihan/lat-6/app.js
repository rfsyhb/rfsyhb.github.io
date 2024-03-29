function increment() {
    document.getElementById('count').innerText++;

    if (document.getElementById('count').innerText == 7) {
        const hiddenMessage = document.createElement('h4');
        hiddenMessage.innerText = 'Selamat! Anda menemukan hadiah tersembunyi...';

        const image = document.createElement('img');
        image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg');

        const contents = document.querySelector('.contents');
        contents.appendChild(hiddenMessage).appendChild(image);
    }
}

function welcome() {
    alert('Sim salabim muncullah elemen-elemen HTML!');
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
}

window.addEventListener('load', welcome);
document.getElementById('incrementButton').addEventListener('click', increment);

// ! manfaat EventListener
// * dapat menjalankan dua atau lebih fungsi
// tidak seperti event handler yang akan ter-overwrite
{
    // contoh penerapan event handler
    element.onclick = fungsiA;
    // ! fungsiA akan overwrited
    element.onclick = fungsiB;
}

// * solusinya menggunakan EventListener
{
    // contoh penerapan event listener
    element.addEventListener('click', fungsiA);
    element.addEventListener('click', fungsiB);
}