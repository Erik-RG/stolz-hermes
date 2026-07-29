const horizontal = document.querySelector(".horizontal");
const track = document.querySelector(".track");



function moveShowcase() {

    const sectionTop = horizontal.getBoundingClientRect().top;

    const sectionHeight =
        horizontal.offsetHeight - window.innerHeight;


    let progress =
        -sectionTop / sectionHeight;


    progress = Math.max(
        0,
        Math.min(1, progress)
    );


    const maxMove =
        track.scrollWidth - window.innerWidth;


    track.style.transform =
        `translateX(${-progress * maxMove}px)`;

}



window.addEventListener(
    "scroll",
    moveShowcase
);



window.addEventListener(
    "resize",
    moveShowcase
);


moveShowcase();





// Header background change

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background =
        "rgba(0,0,0,0.85)";

        header.style.backdropFilter =
        "blur(12px)";

    } else {

        header.style.background =
        "linear-gradient(rgba(0,0,0,0.5),transparent)";

        header.style.backdropFilter =
        "none";

    }

});





// Smooth scrolling for navigation


document.querySelectorAll(
    "a[href^='#']"
)
.forEach(link => {


    link.addEventListener(
        "click",
        function(event) {


            event.preventDefault();


            const target =
            document.querySelector(
                this.getAttribute("href")
            );


            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }


        }
    );


});





// Fade-in animations


const revealElements =
document.querySelectorAll(
    ".intro-text, .intro img, .team-grid div"
);



const observer =
new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "show"
            );


        }


    });


},
{
    threshold:0.2
});



revealElements.forEach(element=>{


    element.classList.add(
        "hidden"
    );


    observer.observe(element);


});
