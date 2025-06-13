// Toggle mobile menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Sticky Header & Active Nav Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(sec => navObserver.observe(sec));

window.onscroll = () => {
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close mobile menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: unobserve the element after it's visible to animate only once
            // observer.unobserve(entry.target);
        } else {
            // Optional: remove the class to re-animate on scroll up/down
            entry.target.classList.remove('is-visible');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});