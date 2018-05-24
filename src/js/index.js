var width;

var advantagesCarousel = document.querySelector('.advantages__items');
var advOptions = {
  cellAlign: 'left',
  prevNextButtons: false,  
  wrapAround: true,
  contain: true,
  // adaptiveHeight: true
};
var isFlktyAdvantages = false;
var flktyAdvantages;

var reviewsCarousel = document.querySelector('.reviews__items');
var reviewOptions = {  
  cellAlign: 'left',
  // prevNextButtons: false,
  // pageDots: false,
  wrapAround: true,
  contain: true
}
flktyReviews = new Flickity(reviewsCarousel, reviewOptions);

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
    flktyAdvantages = new Flickity(advantagesCarousel, advOptions);
    isFlktyAdvantages = !isFlktyAdvantages;
  }
}
