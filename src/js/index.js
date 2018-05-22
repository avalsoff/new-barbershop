// new Glide('.glide').mount();
// var width = 0;
// var glide = new Glide('.glide').mount();
// setTimeout(function() {  
//   // glide.destroy();
//   flkty.destroy();
// }, 5000);

var elem = document.querySelector('.glide__slides');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,  
  wrapAround: true,
  contain: true
});


// element argument can be a selector string
//   for an individual element
// var flkty = new Flickity( '.glide__slides', {
//   // options
// });

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

window.onresize = function(event) {
  updateWindowSize();
}