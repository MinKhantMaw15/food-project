    const menuicon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const menuli = document.querySelector('.menu li');

    const center = document.querySelector('.center');
    const svg = document.querySelector('.svg');
    const pickupcontainer = document.querySelector('.pickup-container');
    const tablelist = document.querySelector('.tablelist')

menuicon.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuicon.classList.toggle('toggle'); 
});

center.addEventListener("click", function() {
      pickupcontainer.classList.add('active');
      tablelist.classList.add('active2')
});
svg.addEventListener("click", function() {
    pickupcontainer.classList.remove('active');
    tablelist.classList.remove('active2')
})
