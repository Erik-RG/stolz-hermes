const header = document.querySelector("header");
const heroImage = document.querySelector(".hero img");


// Navigation background change

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background =
        "rgba(0,0,0,0.85)";

        header.style.backdropFilter =
        "blur(12px)";

    } else {

        header.style.background =
        "linear-gradient(rgba(0,0,0,0.7), transparent)";

        header.style.backdropFilter =
        "none";

    }

});




// Smooth scrolling

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target =
        document.querySelector(
            link.getAttribute("href")
        );


        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});





// Hero parallax effect

window.addEventListener("scroll", () => {

    if (heroImage) {

        const movement =
        window.scrollY * 0.15;


        heroImage.style.transform =
        `scale(1.08) translateY(${movement}px)`;

    }

});





// Reveal animations

const revealElements =
document.querySelectorAll(
    ".story-content, .story-image, .spec-grid div, .driver, .full-section div, .performance div, .closing div"
);



const observer =
new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

},
{
    threshold: 0.2
});



revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});





// Driver image interaction

const drivers =
document.querySelectorAll(".driver");


drivers.forEach(driver => {


    driver.addEventListener(
        "mouseenter",
        () => {

            driver.style.transform =
            "translateY(-15px)";

        }
    );


    driver.addEventListener(
        "mouseleave",
        () => {

            driver.style.transform =
            "translateY(0)";

        }
    );


});
