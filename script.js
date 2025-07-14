// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form submission (for demonstration)
document.querySelector('.contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('詳細情報をお送りします！');
    this.reset();
});