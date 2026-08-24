// ================================
// IMAGE POPUP
// ================================

const images = document.querySelectorAll(".project-image img");

images.forEach(img => {

    img.addEventListener("click", function () {

        const overlay = document.createElement("div");
        overlay.classList.add("image-popup");

        const popupImage = document.createElement("img");
        popupImage.src = this.src;

        overlay.appendChild(popupImage);
        document.body.appendChild(overlay);


        // CLOSE POPUP
        overlay.addEventListener("click", function () {

            overlay.classList.add("closing");

            setTimeout(function () {
                overlay.remove();
            }, 300);

        });

    });

});


// ================================
// LOADING SCREEN
// ================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("hidden");
    }, 2000);

});


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .skill-card, .project, .workflow-item, .material-list div, .contact-content"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Tambahkan class awal
revealElements.forEach(function (element) {

    element.classList.add("scroll-reveal");

    revealObserver.observe(element);

});