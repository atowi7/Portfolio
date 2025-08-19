document.addEventListener("DOMContentLoaded", function () {

    // =========================================================================
    // ======================= START: NEW LOCALIZATION CODE ====================
    // =========================================================================

    const langSwitcher = document.getElementById('lang-switcher');
    let currentLang = localStorage.getItem('lang') || 'en'; // Get saved language or default to 'en'

    // 1. All translations are stored here
    const translations = {
        // Page Title
        'page_title': { en: 'Abdulrahman Alatowi | Mobile App Developer', ar: 'عبدالرحمن العطوي | مطور تطبيقات جوال' },
        // Navbar
        'nav_home': { en: 'Home', ar: 'الرئيسية' },
        'nav_education': { en: 'Education', ar: 'التعليم' },
        'nav_experience': { en: 'Experience', ar: 'الخبرات' }, // Changed to plural "الخبرات" - more common for a section title
        'nav_projects': { en: 'Projects', ar: 'المشاريع' },
        'nav_skills': { en: 'Skills', ar: 'المهارات' },
        'nav_certifications': { en: 'Certifications', ar: 'الشهادات' },
        // Home Section
        'home_name': { en: 'Abdulrahman Kamal Alatowi', ar: 'عبدالرحمن كمال العطوي' },
        'home_bio': {
            en: 'Motivated Computer Science graduate with practical experience in building cross-platform mobile applications. Demonstrates strong understanding of software development principles, and responsive UI/UX. Eager to grow in collaborative and fast-paced environments while delivering impactful mobile solutions.',
            // This is the improved version you selected. It's excellent.
            ar: 'مطور تطبيقات جوال بخبرة في بناء حلول برمجية متعددة المنصات. أحرص على تطبيق أفضل الممارسات في تصميم واجهات وتجارب المستخدم لضمان أداء سلس وتجاوب فوري. أسعى للانضمام إلى فريق عمل طموح وبيئة سريعة التطور، حيث يمكنني المساهمة في إنشاء تطبيقات مؤثرة ومبتكرة.'
        },
        'view_projects': { en: 'View Projects', ar: 'تصفح المشاريع' }, // "تصفح" (Browse) sounds more engaging
        'download_cv': { en: 'Download CV', ar: 'تحميل السيرة الذاتية' },
        // Typing text for home title
        'typing_text_1': { en: 'Mobile App Developer', ar: 'مطور تطبيقات جوال' },
        'typing_text_2': { en: 'Flutter Developer', ar: 'مطور فلاتر' },
        'typing_text_3': { en: 'Android & IOS Apps', ar: 'تطبيقات أندرويد و iOS' },
        'typing_text_4': { en: 'Web Developer', ar: 'مطور ويب' },

        // Section Headings
        'education_heading': { en: '// Education_', ar: '// التعليم_' },
        'experience_heading': { en: '// Experience_', ar: '// الخبرات_' },
        'projects_heading': { en: '// Projects_', ar: '// المشاريع_' },
        'skills_heading': { en: '// Skills & Languages_', ar: '// المهارات واللغات_' },
        'certs_heading': { en: '// Certifications_', ar: '// الشهادات_' },
        // Education Section
        'edu_uni_name': { en: 'Islamic University of Madinah', ar: 'الجامعة الإسلامية بالمدينة المنورة' },
        'edu_uni_degree': { en: 'Bachelor of Computer Science', ar: 'بكالوريوس في علوم الحاسب' },
        'edu_school_name': { en: 'King Fahd Secondary School', ar: 'مدرسة الملك فهد الثانوية' },
        'edu_school_degree': { en: 'High School Diploma', ar: 'شهادة الثانوية العامة' },

        // =================================================================
        // Experience Section - REVISED FOR MORE IMPACT
        // =================================================================
        'exp1_title': { en: 'Flutter Development Intern', ar: 'مطور فلاتر (متدرب)' }, // More professional title
        'exp1_meta': { en: 'Instakit | 2024', ar: 'Instakit | ٢٠٢٤' },
        'exp1_p1': { en: 'Developed Flutter applications using Provider state management and Firebase, improving user interaction and functionality.', ar: 'تطوير تطبيقات فلاتر باستخدام Provider لإدارة حالة التطبيق و Firebase، مما ساهم في تحسين تفاعل المستخدم وقدرات التطبيق الوظيفية.' },
        'exp1_p2': { en: 'Integrated RESTful APIs and handled data exchange between the app and backend services.', ar: 'دمج واجهات API (RESTful) وتنظيم تبادل البيانات بين التطبيق والخدمات الخلفية.' },
        'exp1_p3': { en: 'Tested and debugged API endpoints using Postman to ensure reliability and performance.', ar: 'فحص وتصحيح أخطاء نقاط النهاية (API Endpoints) باستخدام Postman لضمان موثوقية وأداء النظام.' },
        'exp1_p4': { en: 'Gained hands-on experience in real-world application development and collaborative workflows.', ar: 'اكتساب خبرة عملية في بيئة تطوير حقيقية وضمن آليات العمل الجماعي.' },

        'exp2_title': { en: 'Software Development Intern', ar: 'مطور برمجيات (متدرب)' },
        'exp2_meta': { en: 'Islamic University of Madinah | 2021', ar: 'الجامعة الإسلامية بالمدينة المنورة | ٢٠٢١' },
        'exp2_p1': { en: 'Contributed to the development of an Android application and a website using Firebase, enhancing user interaction and functionality.', ar: 'المساهمة في تطوير تطبيق أندرويد وموقع ويب باستخدام Firebase، بهدف تعزيز تجربة المستخدم وإمكانيات النظام.' },
        'exp2_p2': { en: 'Worked on both front-end and back-end tasks, gaining hands-on experience in real-world application development.', ar: 'العمل على مهام الواجهة الأمامية والخلفية، مما أتاح اكتساب خبرة عملية في تطوير التطبيقات بشكل متكامل.' },

        // Projects Section
        'proj1_title': { en: 'E-commerce Admin App', ar: 'تطبيق لوحة تحكم للمتجر' },
        'proj1_desc': { en: 'Admin panel for e-commerce application', ar: 'لوحة تحكم لإدارة تطبيقات التجارة الإلكترونية.' },
        'proj2_title': { en: 'E-commerce Delivery App', ar: 'تطبيق التوصيل للمتجر' },
        'proj2_desc': { en: 'Delivery app for e-commerce application', ar: 'تطبيق مخصص لمندوبي التوصيل.' },
        'proj3_title': { en: 'E-commerce User App', ar: 'تطبيق المتجر للمستخدم' },
        'proj3_desc': { en: 'User app for e-commerce application', ar: 'تطبيق للمستخدمين للتسوق والطلب.' },
        'proj4_title': { en: 'Ordering System Admin App', ar: 'لوحة تحكم نظام الطلبات' },
        'proj4_desc': { en: 'Admin panel for ordering system application', ar: 'لوحة تحكم لإدارة نظام الطلبات.' },
        'proj5_title': { en: 'Todo App', ar: 'تطبيق المهام اليومية' },
        'proj5_desc': { en: 'Task management application for users', ar: 'تطبيق بسيط لإدارة المهام الشخصية.' },
        // Skills Section
        'skills_tech': { en: 'Technical Skills', ar: 'المهارات التقنية' },
        'skills_soft': { en: 'Soft Skills', ar: 'المهارات الشخصية' },
        'skills_lang': { en: 'Languages', ar: 'اللغات' },
        'soft_skill1': { en: 'Attention to Details', ar: 'الدقة والاهتمام بالتفاصيل' }, // More descriptive
        'soft_skill2': { en: 'Communication Skills', ar: 'مهارات التواصل' },
        'soft_skill3': { en: 'Time Management', ar: 'إدارة الوقت' },
        'soft_skill4': { en: 'Team Collaboration', ar: 'العمل بروح الفريق' }, // More common phrase
        'lang_ar': { en: 'Arabic', ar: 'العربية' },
        'lang_en': { en: 'English', ar: 'الإنجليزية' },
        // Certifications Section
        'cert1_title': { en: 'Flutter & Dart - The Complete Guide', ar: 'الدليل الكامل لتطوير التطبيقات بـ Flutter و Dart' }, // Slightly better title
        'cert1_desc': { en: 'Completed a comprehensive course covering Flutter and Dart from basics to advanced topics, including building native apps with features like Google Maps, camera, and authentication.', ar: 'إتمام دورة تدريبية شاملة تغطي أساسيات ومفاهيم Flutter و Dart المتقدمة، بما في ذلك بناء تطبيقات حقيقية تتضمن خرائط جوجل، الكاميرا، ونظام المصادقة.' },
        'cert2_title': { en: 'Software Development Internship', ar: 'شهادة إتمام تدريب في تطوير البرمجيات' }, // More formal
        'cert2_desc': { en: 'Received certification for completing an internship focused on Android app and website development using Firebase, gaining practical front-end and back-end experience.', ar: 'شهادة تقديرية لإكمال فترة تدريب عملي تركز على تطوير تطبيقات أندرويد ومواقع الويب باستخدام Firebase، واكتساب خبرة عملية في الواجهات الأمامية والخلفية.' },
        'view_credential': { en: 'View Credential', ar: 'عرض الشهادة' },
        // Footer
        'footer_text': { en: '© 2025 atowi7. All rights reserved.', ar: '© ٢٠٢٥ atowi7. جميع الحقوق محفوظة.' },
    };


    // 2. The function to switch the language
    const switchLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang); // Save preference
        document.documentElement.lang = lang;
        document.body.classList.toggle('rtl', lang === 'ar');

        // Translate all elements with a data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[key] && translations[key][lang]) {
                if (element.classList.contains('section-heading')) {
                    element.dataset.text = translations[key][lang]; // Update data-text for animation
                } else {
                    // Handle elements with child nodes like the "View Credential" link
                    const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                    if (textNode) {
                        textNode.textContent = translations[key][lang] + ' ';
                    } else {
                        element.textContent = translations[key][lang];
                    }
                }
            }
        });

        // --- UPDATE ANIMATIONS AND SPECIAL ELEMENTS ---

        // Update the home page typing animation words
        homeWords = [
            translations.typing_text_1[lang],
            translations.typing_text_2[lang],
            translations.typing_text_3[lang],
            translations.typing_text_4[lang]
        ];
        // Reset typing animation to show new words immediately
        homeWordIndex = 0;
        homeCharIndex = 0;
        homeIsDeleting = false;
        typingText.textContent = ''; // Clear current text

        // Update language switcher button text
        if (lang === 'en') {
            langSwitcher.innerHTML = "<i class='bx bx-world'></i> عربي";
        } else {
            langSwitcher.innerHTML = "<i class='bx bx-world'></i> EN";
        }
    };

    // 3. Event listener for the language switcher button
    langSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        switchLanguage(newLang);
    });

    // =========================================================================
    // ======================== END: NEW LOCALIZATION CODE =====================
    // =========================================================================


    // --- ORIGINAL SCRIPT.JS CODE (WITH MODIFICATIONS FOR LOCALIZATION) ---

    // Mobile menu toggle
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 100);
        // Close mobile menu on scroll
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (document.querySelector(`header nav a[href*=${entry.target.id}]`)) {
                        document.querySelector(`header nav a[href*=${entry.target.id}]`).classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-40% 0px -60% 0px' });
    sections.forEach(sec => navObserver.observe(sec));


    // Typing animation for Home section title
    const typingText = document.querySelector(".home-title .typing-text");
    const homeCursor = document.querySelector(".home-title .cursor");
    // MODIFIED: homeWords is now declared with let to be updatable
    let homeWords = []; // This will be populated by the switchLanguage function
    let homeWordIndex = 0, homeCharIndex = 0, homeIsDeleting = false;

    function typeHomeTitle() {
        homeCursor.classList.add('typing');
        const currentWord = homeWords[homeWordIndex];
        // Add a check in case currentWord is not ready yet on first load
        if (!currentWord) {
            setTimeout(typeHomeTitle, 100);
            return;
        }
        const typeSpeed = homeIsDeleting ? 80 : 120;
        if (homeIsDeleting) {
            typingText.textContent = currentWord.substring(0, homeCharIndex - 1);
            homeCharIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, homeCharIndex + 1);
            homeCharIndex++;
        }
        if (!homeIsDeleting && homeCharIndex === currentWord.length) {
            setTimeout(() => {
                homeIsDeleting = true;
                homeCursor.classList.remove('typing');
            }, 2000);
        } else if (homeIsDeleting && homeCharIndex === 0) {
            homeIsDeleting = false;
            homeWordIndex = (homeWordIndex + 1) % homeWords.length;
        }
        setTimeout(typeHomeTitle, typeSpeed);
    }
    // MODIFIED: Start the typing animation only after initializing language
    // if (typingText) typeHomeTitle(); // OLD


    // Repeating typing animation for Section Headings
    const headingIntervals = new Map();

    function typeSectionHeading(element) {
        const text = element.dataset.text;
        element.innerHTML = ''; // Clear content
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);
    }

    const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const headingElement = entry.target;
            if (entry.isIntersecting) {
                if (!headingIntervals.has(headingElement)) {
                    typeSectionHeading(headingElement); // Initial typing
                    const intervalId = setInterval(() => typeSectionHeading(headingElement), 5000); // Repeat every 5 seconds
                    headingIntervals.set(headingElement, intervalId);
                }
            } else {
                if (headingIntervals.has(headingElement)) {
                    clearInterval(headingIntervals.get(headingElement));
                    headingIntervals.delete(headingElement);
                    headingElement.textContent = ''; // Clear text when out of view
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-heading').forEach(heading => headingObserver.observe(heading));


    // Page Transition Animation
    const transitionOverlay = document.getElementById('transition-overlay');
    const pageNavLinks = document.querySelectorAll('.nav-link');

    pageNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);

                transitionOverlay.classList.add('show');
                transitionOverlay.classList.remove('hide');

                // Close mobile nav if open
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');

                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'auto' // Use auto for instant jump after animation
                    });
                    transitionOverlay.classList.add('hide');
                }, 500); // Duration for panels to cover screen

                setTimeout(() => {
                    transitionOverlay.classList.remove('show');
                }, 1000); // Total duration before overlay is reset
            }
        });
    });

    // --- INITIALIZE LANGUAGE ON PAGE LOAD ---
    switchLanguage(currentLang);
    if (typingText) typeHomeTitle(); // Start the typing animation now
});