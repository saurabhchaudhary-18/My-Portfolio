/*javascript*/
/* =========================================================
   SAURABH SINGH PORTFOLIO
   script.js
   Works with the provided index.html + style.css
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. MOBILE MENU
       ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const navMenu = document.querySelector(".nav-menu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {

            navMenu.classList.toggle("show");

            const icon = menuButton.querySelector("i");

            if (navMenu.classList.contains("show")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }


    /* =====================================================
       2. CLOSE MOBILE MENU WHEN LINK IS CLICKED
       ===================================================== */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navMenu) {
                navMenu.classList.remove("show");
            }

            if (menuButton) {

                const icon = menuButton.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });

    });


    /* =====================================================
       3. SMOOTH SCROLL
       ===================================================== */

    const allAnchorLinks =
        document.querySelectorAll('a[href^="#"]');

    allAnchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       4. ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");


    function updateActiveNav() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 250;


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                currentSection = sectionId;

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");


            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();


    /* =====================================================
       5. NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", function () {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5, 5, 5, 0.95)";

            navbar.style.borderBottom =
                "1px solid rgba(255, 255, 255, 0.10)";

        } else {

            navbar.style.background =
                "rgba(5, 5, 5, 0.72)";

            navbar.style.borderBottom =
                "1px solid rgba(255, 255, 255, 0.05)";

        }

    });


    /* =====================================================
       6. SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-text, " +
            ".stat-card, " +
            ".skill-card, " +
            ".project-card, " +
            ".timeline-item, " +
            ".certification-card, " +
            ".contact-content, " +
            ".contact-socials"
        );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    });


    const observer =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });


    /* =====================================================
       7. STAGGER CARD ANIMATION
       ===================================================== */

    const skillCards =
        document.querySelectorAll(".skill-card");

    skillCards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });


    const statCards =
        document.querySelectorAll(".stat-card");

    statCards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });


    const certificationCards =
        document.querySelectorAll(
            ".certification-card"
        );

    certificationCards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });


    /* =====================================================
       8. HERO MOUSE EFFECT
       ===================================================== */

    const hero =
        document.querySelector(".hero");

    const heroVisual =
        document.querySelector(".hero-visual");

    const codeCard =
        document.querySelector(".code-card");


    if (
        hero &&
        heroVisual &&
        codeCard &&
        window.innerWidth > 768
    ) {

        hero.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    hero.getBoundingClientRect();


                const mouseX =
                    event.clientX - rect.left;

                const mouseY =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateY =
                    (mouseX - centerX) / 100;

                const rotateX =
                    (centerY - mouseY) / 100;


                codeCard.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY - 5}deg)
                     translateY(-5px)`;

            }
        );


        hero.addEventListener(
            "mouseleave",
            function () {

                codeCard.style.transform =
                    "perspective(1000px) rotateY(-5deg)";

            }
        );

    }


    /* =====================================================
       9. PROJECT CARD MOUSE EFFECT
       ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                card.style.setProperty(
                    "--mouse-x",
                    x + "px"
                );

                card.style.setProperty(
                    "--mouse-y",
                    y + "px"
                );

            }
        );

    });


    /* =====================================================
       10. BUTTON HOVER EFFECT
       ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".primary-button, .secondary-button"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "mouseenter",
            function () {

                button.style.transform =
                    "translateY(-3px)";

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                button.style.transform =
                    "translateY(0)";

            }
        );

    });


    /* =====================================================
       11. TYPING EFFECT
       ===================================================== */

    const typingElement =
        document.querySelector(".hero-small-text");


    if (typingElement) {

        const statusDot =
            typingElement.querySelector(".status-dot");


        let textElement =
            typingElement.querySelector(".typing-text");


        /*
         * If .typing-text doesn't exist in HTML,
         * create it automatically.
         */

        if (!textElement) {

            textElement =
                document.createElement("span");

            textElement.className =
                "typing-text";


            typingElement.appendChild(
                textElement
            );

        }


        const words = [
            "JAVA DEVELOPER",
            "SPRING BOOT DEVELOPER",
            "BACKEND DEVELOPER",
            "PROBLEM SOLVER"
        ];


        let wordIndex = 0;

        let characterIndex = 0;

        let deleting = false;


        function typingAnimation() {

            const currentWord =
                words[wordIndex];


            if (!deleting) {

                textElement.textContent =
                    currentWord.substring(
                        0,
                        characterIndex + 1
                    );


                characterIndex++;


                if (
                    characterIndex ===
                    currentWord.length
                ) {

                    deleting = true;

                    setTimeout(
                        typingAnimation,
                        1500
                    );

                    return;

                }

            } else {

                textElement.textContent =
                    currentWord.substring(
                        0,
                        characterIndex - 1
                    );


                characterIndex--;


                if (characterIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) %
                        words.length;

                }

            }


            setTimeout(
                typingAnimation,
                deleting ? 40 : 80
            );

        }


        setTimeout(
            typingAnimation,
            1000
        );

    }


    /* =====================================================
       12. CURSOR GLOW
       ===================================================== */

    const cursorGlow =
        document.createElement("div");


    cursorGlow.style.position =
        "fixed";

    cursorGlow.style.width =
        "250px";

    cursorGlow.style.height =
        "250px";

    cursorGlow.style.borderRadius =
        "50%";

    cursorGlow.style.pointerEvents =
        "none";

    cursorGlow.style.background =
        "rgba(0, 245, 212, 0.035)";

    cursorGlow.style.filter =
        "blur(60px)";

    cursorGlow.style.transform =
        "translate(-50%, -50%)";

    cursorGlow.style.zIndex =
        "0";

    cursorGlow.style.display =
        window.innerWidth > 768
            ? "block"
            : "none";


    document.body.appendChild(
        cursorGlow
    );


    document.addEventListener(
        "mousemove",
        function (event) {

            if (window.innerWidth <= 768) {
                return;
            }


            cursorGlow.style.left =
                event.clientX + "px";

            cursorGlow.style.top =
                event.clientY + "px";

        }
    );


    /* =====================================================
       13. FOOTER YEAR
       ===================================================== */

    const footer =
        document.querySelector(".footer");


    if (footer) {

        const footerParagraph =
            footer.querySelector("p");


        if (footerParagraph) {

            const year =
                new Date().getFullYear();


            footerParagraph.innerHTML =
                footerParagraph.innerHTML
                    .replace(
                        "2026",
                        year
                    );

        }

    }


    /* =====================================================
       14. PAGE LOADED
       ===================================================== */

    document.body.classList.add(
        "loaded"
    );


    /* =====================================================
       15. CONSOLE
       ===================================================== */

    console.log(
        "🚀 Saurabh Singh Portfolio Loaded"
    );

    console.log(
        "Java • Spring Boot • REST API • SQL"
    );

});
