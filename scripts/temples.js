
/* === Responsive menu for mobile navigator === */

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const mobileNav = document.getElementById("mobileNav");
  
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  
    closeMenu.addEventListener("click", () => {
      mobileNav.classList.remove("show");
      document.body.style.overflow = "";
    });
});