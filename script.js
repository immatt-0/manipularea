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
