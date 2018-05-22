var advantagesCarousel = document.querySelector('.glide__slides');
var flktyOptions = {
  cellAlign: 'left',
  prevNextButtons: false,  
  wrapAround: true,
  contain: true,
  // adaptiveHeight: true
};
var isFlktyAdvantages = false;
var width;
var flktyAdvantages;
updateWindowSize();
updateAdvantagesState();

window.onresize = function(event) {
  updateWindowSize();
  updateAdvantagesState();
}

function updateWindowSize() {
  if (document.body && document.body.offsetWidth) {
    width = document.body.offsetWidth;
  }
  if (document.compatMode == 'CSS1Compat' &&
  document.documentElement &&
  document.documentElement.offsetWidth ) {
    width = document.documentElement.offsetWidth;
  }
  if (window.innerWidth) {
    width = window.innerWidth;
  }
}

function updateAdvantagesState() {
  if (width >= 640 && isFlktyAdvantages) {
    flktyAdvantages.destroy();
    isFlktyAdvantages = !isFlktyAdvantages;
  } else if (width < 640 && !isFlktyAdvantages) {
    flktyAdvantages = new Flickity(advantagesCarousel, flktyOptions);
    isFlktyAdvantages = !isFlktyAdvantages;
  }
}
