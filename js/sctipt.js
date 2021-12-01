"use strict";
window.addEventListener('load', () => {

  function ibg(){

  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){

      // ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';

      ibg[i].style.backgroundImage = `url(${ibg[i].querySelector('img').getAttribute('src')})`;
    }
  }
}

ibg();

let iconMenu = document.querySelector('.icon-menu');
let menuBody = document.querySelector('.menu__body');
let body = document.querySelector('body');
iconMenu.addEventListener('click', open);

function open() {
  iconMenu.classList.toggle("active");
  menuBody.classList.toggle("active");
  body.classList.toggle("lock");
}


// glide.on('build.after', function() {
//   var slideHeight = $('.glide__slide--active').outerHeight();
//   var glideTrack = $('.glide__track').outerHeight();
//   if (slideHeight != glideTrack) {
//     var newHeight = slideHeight;
//     $('.glide__track').css('height', newHeight);
//   }
// });
//
// glide.on('run.after', function() {
//   var slideHeight = $('.glide__slide--active').outerHeight();
//   var glideTrack = $('.glide__track').outerHeight();
//   if (slideHeight != glideTrack) {
//     var newHeight = slideHeight;
//     $('.glide__track').css('height', newHeight);
//   }
// });


const config = {
  // animationDuration: 300
  rewindDuration: 500
};
// new Glide('.glide', config).mount();


const carousel = document.querySelector('.glide');

if (carousel) {
  const glideCarousel = new Glide('.glide', config);

  // Automated height on Carousel build
  glideCarousel.on('build.after', function () {
    glideHandleHeight();
  });

  // Automated height on Carousel change
  glideCarousel.on('run.after', function () {
    glideHandleHeight();
  });

  // Mount!
  glideCarousel.mount({
    type: 'carousel',
  });

  // Resize height
  function glideHandleHeight() {
    const activeSlide = document.querySelector('.glide__slide--active');
    const activeSlideHeight = activeSlide ? activeSlide.offsetHeight : 0;

    const glideTrack = document.querySelector('.glide__track');
    const glideTrackHeight = glideTrack ? glideTrack.offsetHeight : 0;

    if (activeSlideHeight !== glideTrackHeight) {
      glideTrack.style.height = `${activeSlideHeight}px`;
    }
  }
}



});
