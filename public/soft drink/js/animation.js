const navbar = document.querySelector('.navbar');
const amount = document.querySelector('.amount');
const table = document.querySelector('.table');

const tl = new TimelineMax();

tl.fromTo(
    navbar,
    1,
    {y: '-100%', opacity: 0},
    {y: '0%', opacity:0.6}
)
.fromTo(
    table,
    1,
    {x: "100%", opacity: 0},
    {x: "0%", opacity: 1}
)
.fromTo(
    amount,
    1,
    {x: "-100%", opacity: 1},
    {x: "0%", opacity: 0.5}
)