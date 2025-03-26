document.addEventListener("DOMContentLoaded", () => {
    const flashcards = document.querySelectorAll(".flashcard");
    
    flashcards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

// Back to top button functionality
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
