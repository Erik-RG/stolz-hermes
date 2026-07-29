// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Fade-in animation observer

const sections = document.querySelectorAll(
    ".section, .closing-content"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {

    observer.observe(section);

});


// Navigation background change on scroll

const nav = document.querySelector("nav");


window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        nav.style.background =
        "rgba(0,0,0,0.85)";

    } else {

        nav.style.background =
        "rgba(0,0,0,0.35)";

    }

});


// Hero parallax effect

const heroImage = document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

    const offset = window.scrollY * 0.25;

    if (heroImage) {

        heroImage.style.transform =
        `translateY(${offset}px) scale(1.05)`;

    }

});


// Driver card hover effect

const drivers = document.querySelectorAll(
    ".driver-card"
);


drivers.forEach(driver => {

    driver.addEventListener("mouseenter", () => {

        driver.style.transform =
        "translateY(-15px)";

        driver.style.transition =
        "0.3s";

    });


    driver.addEventListener("mouseleave", () => {

        driver.style.transform =
        "translateY(0)";

    });

});
