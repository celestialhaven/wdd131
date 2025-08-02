const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let scale = 1;

document.querySelectorAll(".preview").forEach(img => {
img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    scale = 1;
    lightboxImg.style.transform = `scale(${scale})`;
});
});

document.querySelector(".close").addEventListener("click", () => {
lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
if (e.target === lightbox) {
    lightbox.style.display = "none";
}
});

// Mouse wheel zoom
lightboxImg.addEventListener("wheel", (e) => {
e.preventDefault();
if (e.deltaY < 0) {
    scale += 0.1;
} else {
    scale = Math.max(1, scale - 0.1); // prevent zoom out below 1
}
lightboxImg.style.transform = `scale(${scale})`;
});