function parallaxeffect (element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

    window.addEventListener("scroll", function() {
        parallaxeffect('.sec2-container', window.scrollY, 0.3);
    })