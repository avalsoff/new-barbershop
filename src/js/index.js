var currentWidth;
var tabletWidth  = 680;

var hamburgerBtn = document.querySelector('.main-nav__hamburger');
var mainNavMenu  = document.querySelector('.main-nav__menu');

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


mainNavMenu.classList.toggle('main-nav__menu--closed');

hamburgerBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainNavMenu.classList.toggle('main-nav__menu--closed');
  mainNavMenu.classList.toggle('js-main-nav__menu--show'); 
});

updateWindowSize();
updateAdvantagesState();

window.onresize = function(event) {
  updateWindowSize();
  updateAdvantagesState();
}

/*
 *  Crossbrowser viewport width obtaining 
 */
function updateWindowSize() {
  if (document.body && document.body.offsetWidth) {
    currentWidth = document.body.offsetWidth;
  }
  if (document.compatMode == 'CSS1Compat' &&
  document.documentElement &&
  document.documentElement.offsetWidth ) {
    currentWidth = document.documentElement.offsetWidth;
  }
  if (window.innerWidth) {
    currentWidth = window.innerWidth;
  }
}

/*
 *  Destroys the carousel of the advantages section
 *  when the current width is greater than the tablet width
 *  and initializes new carousel when on the contrary.
 */
function updateAdvantagesState() {
  if (currentWidth >= tabletWidth && isFlktyAdvantages) {
    flktyAdvantages.destroy();
    isFlktyAdvantages = !isFlktyAdvantages;
  } else if (currentWidth < tabletWidth && !isFlktyAdvantages) {
    flktyAdvantages = new Flickity(advantagesCarousel, advOptions);
    isFlktyAdvantages = !isFlktyAdvantages;
  }
}
