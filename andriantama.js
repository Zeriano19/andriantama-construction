const images = document.querySelectorAll(".project-image img");

images.forEach(img => {
    img.addEventListener("click", function () {
        const overlay = document.createElement("div");
        overlay.classList.add("image-popup");

        const popupImage = document.createElement("img");
        popupImage.src = this.src;

        overlay.appendChild(popupImage);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", function () {
            overlay.remove();
        });
    });
});