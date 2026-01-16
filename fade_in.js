const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
        } else {
            entry.target.style.opacity = '0'
        }
    });
});

function imgFade() {
    const imgs = document.querySelectorAll('img:not(#modalImg)');
    imgs.forEach((el) => observer.observe(el));
}