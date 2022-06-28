const header11 = document.querySelector('.header11');
const sec3 = document.querySelector('.container-sec3')

header11.addEventListener("click", function () {
    header11.classList.add('header11-active');
    sec3.classList.add('container-sec3-active');

    
const sec3disimg = document.querySelector('.sec3-dis-img');
const sec3header = document.querySelector('.sec3-header');
const sec3divs  = document.querySelector('.sec3-divs');

     const timeline = new TimelineMax();

     timeline.fromTo(sec3disimg,
                     1,
                     {y: "-100%", opacity: 0},
                     {y: "0%", opacity: 1}
                     )
            .fromTo(
                sec3header,
                1,
                {x: "-100%", opacity: 0},
                {x: "0%", opacity: 1}
            )
            .fromTo(
                sec3divs,
                1,
                {y: "100%", opacity: 0},
                {y: "0%", opacity: 1},'-=1'
            )


})

