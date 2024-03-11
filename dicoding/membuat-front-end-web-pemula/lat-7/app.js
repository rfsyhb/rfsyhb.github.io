// membuat event baru dari class Event
const changeCaption = new Event('changeCaption');

window.addEventListener('load', function () {
    const tombol = document.getElementById('tombol');
    tombol.addEventListener('changeCaption', customEventHandler);

    // * menggunakan function dispatchEvent untuk trigger custom event
    tombol.addEventListener('click', function () {
        // ! membuat agar changeCaption menjadi TRUE
        tombol.dispatchEvent(changeCaption);
    });
});

function customEventHandler(ev) {
    // * ev.type adalah isi dari "new Event('changeCaption');"
    console.log('Event ' + ev.type + ' telah dijalankan');
    const caption = document.getElementById('caption');
    caption.innerText = 'Anda telah membangkitkan custom event';
}