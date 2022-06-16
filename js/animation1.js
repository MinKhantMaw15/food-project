const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.logo');
const btn = document.querySelector('.btn')
const slider = document.querySelector('.slider');
const header1 = document.querySelector('.header1');
const slideshowcontainer = document.querySelector('.slideshow-container');
const dot = document.querySelector('.dots')

const tl = new TimelineMax();

tl.fromTo(navigation,
          1,
          {y: '-100%', opacity: 0},
          {y:"0%", opacity: 1}
)
.fromTo(logo,
        0.5,
        {x: "100%", opacity: -1},
        {x: "0%", opacity: 1}
)
.fromTo(btn,
        0.5,
        {y: "-100%", opacity: 0},
        {y: "30%", opacity: 1}, "-=0.5"
)
.fromTo(slider,
        2,
        {width: "0%", opacity: 0},
        {width: "100%", opacity: 1}
)
.fromTo(header1,
        1,
        {x: "100%", opacity: 0},
        {x: "0%", opacity: 1}
)
.fromTo(slideshowcontainer,
        2,
        {opacity: 0},
        {opacity: 1}
)
.fromTo(dot,
        1,
        {opacity: 0},
        {opacity: 1}
);

