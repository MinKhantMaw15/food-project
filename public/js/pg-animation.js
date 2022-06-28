const int = document.querySelector('.int');
const sd = document.querySelector('.sd');
const mhk = document.querySelector('.mhk');
const navbar = document.querySelector('.navigation');

const tl = new TimelineMax();

tl.fromTo(navbar,
          1,
          {y: "-100%", opacity: 0},
          {y: '0%', opacity: 1}
)
.fromTo(int,
        1,
        {x: '-100px',opacity: 0},
        {x: '0%', opacity: 1}
)
.fromTo(mhk,
        1,
        {x: '100px',opacity: 0},
        {x: '0%', opacity: 1},'-=1'
)
.fromTo(sd,
        1,
        {width: '0%',opacity: 0},
        {width: '100%', opacity: 1}
)