// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    // Toggle mobile menu
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Smooth scrolling
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    }

    // Typing animation for profession
    const professions = ["Designer", "Developer", "Prompt Engineer", "Analyst"];
    let professionIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const professionElement = document.getElementById("profession");

    function typeProfession() {
        if (charIndex < professions[professionIndex].length) {
            professionElement.textContent += professions[professionIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeProfession, typingSpeed);
        } else {
            setTimeout(() => {
                charIndex = 0;
                professionElement.textContent = '';
                professionIndex = (professionIndex + 1) % professions.length;
                typeProfession();
            }, 2000);
        }
    }

    typeProfession();
});
