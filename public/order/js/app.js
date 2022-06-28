// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
//Animation
const content = document.querySelector('.content');
const contacttext = document.querySelector('.contact-text');
const contactform = document.querySelector('.contact-form');

const tl = new TimelineMax();

tl.fromTo(content,
           1,
           {x: '-100%', opacity: 0},
           {x: '0%', opacity: 0.5}
)
.fromTo(contacttext,
        1,
        {opacity: 0},
        {opacity: 1}
)
.fromTo(contactform,
        1,
        {x: '100%', opacity: 0},
        {x: '0%', opacity: 1})