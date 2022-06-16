function scroll () {
    var ic = document.querySelector('.intro-content');
    var icposition = ic.getBoundingClientRect().top;

    //screen position
    var screenposition = window.innerHeight;


    if(icposition < screenposition){
        ic.classList.add('intro-content-active');
    }

}

window.addEventListener("scroll", scroll);