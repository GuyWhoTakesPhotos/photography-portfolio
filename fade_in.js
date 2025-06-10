const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
        } else {
            entry.target.style.opacity = '0'
        }
    });
});

const hiddenElements = document.querySelectorAll('img:not(#modalImg)')
hiddenElements.forEach((el) => observer.observe(el))