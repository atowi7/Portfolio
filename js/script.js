/*Change language*/

// var lang = {
//     ar: {
//         title: "عربي"
//     },
//     en: {
//         title: "english"
//     }
// };

// function changeLang(lang) {
//     location.hash = lang;
//     location.reload();
// }

// if (window.location.hash) {
//     if (window.location.hash == "#ar") {
//         document.getElementById('ar').title = lang.ar.title;
//     } else {
//         document.getElementById('ar').title = lang.en.title;
//     }

// }

//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // active sections for animation on scroll
            sec.classList.add('show-animate');
        } else {
            // repeat animation while scrolling
            sec.classList.remove('show-animate');
        }
    });
    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove menuIcon and vav bar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //add animation to footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

/*  type animation */

// var type = new Typed(".n-typing",
//     {
//         strings: ["Abdulrahman Alatowi"],
//         typeSpeed: 150,
//         BackSpeed: 50,
//         loop: true
//     }
// );

// var type = new Typed(".p-typing",
//     {
//         strings: ["Mobile App Developer", "Android App Developer", "IOS App Developer"],
//         typeSpeed: 150,
//         BackSpeed: 50,
//         loop: true
//     }
// );

