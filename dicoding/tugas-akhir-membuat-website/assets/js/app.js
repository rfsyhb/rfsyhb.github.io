// ! button untuk pergi ke github
document.getElementById('portoButton').addEventListener('click', function () {
    window.open('https://rfsyhb.github.io/', '_blank');
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