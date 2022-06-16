const menuSlide = () => {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const alllink = document.querySelectorAll(".menu li");

  menuIcon.addEventListener("click", function () {
    //Toggle
    menu.classList.toggle("menu-active");

    //Animation
    alllink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `menuFade 0.5s ease forwards ${index / 9 + 1}s`;
      }
    });
    //MenuIcon animation
    menuIcon.classList.toggle("toggle");
  });
};
menuSlide();
