// ! button untuk pergi ke github
// document.getElementById('githubButton').addEventListener('click', function () {
//     window.open('https://rfsyhb.github.io/dicoding/index.html', '_blank');
// });

// ! button untuk pergi ke id journey
document.getElementById('portoButton').addEventListener('click', function () {
    document.querySelector('#journey').scrollIntoView({
        behavior: 'smooth' // Opsi untuk animasi scroll yang halus
    });
});

// ! animasi scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.getElementById('portoButton').addEventListener('click', function () {
    var journeyElements = document.querySelectorAll('.journey');
    journeyElements.forEach(function (element) {
        // Menambahkan box shadow
        element.classList.add('box-shadow-temporary');

        // Menghapus box shadow setelah 5 detik (5000 milidetik)
        setTimeout(function () {
            element.classList.remove('box-shadow-temporary');
        }, 2000); // Anda bisa mengubah durasi sesuai kebutuhan
    });
});
