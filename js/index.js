var slideIndex = 1;  
function indexPage() {
  var defaultTabBtn = document.getElementById("defaultOpen");
  if (defaultTabBtn !== null) defaultTabBtn.click();
  var writeUsBtn = document.getElementsByClassName("contacts__button")[0];
  var writeUsModal = document.getElementsByClassName("write-us")[0].parentElement;
  var writeUsClose = document.getElementsByClassName("js-write-us__close-btn")[0];
  var mapBtn = document.getElementsByClassName("map__static-map")[0];
  var mapModal = document.getElementsByClassName("modal-map")[0].parentElement;
  var mapClose = document.getElementsByClassName("js-modal-map__close-btn")[0];
  addListeners(mapBtn, mapClose, mapModal);
  addListeners(writeUsBtn, writeUsClose, writeUsModal);
  showSlides(slideIndex);
}

function catalogPage() {
  var buyBtns = document.getElementsByClassName("product-card__button--buy");
  var cartMsgClose = document.getElementsByClassName("cart-message__close-btn")[0];
  var cartMsgContinue = document.getElementsByClassName("cart-message__continue-btn")[0];
  var cartMsgModal = document.getElementsByClassName("cart-message")[0].parentElement;
  
  
  for (var i = 0; i < buyBtns.length; ++i) {
    addListeners(buyBtns[i], cartMsgClose, cartMsgModal);
  }
  addListeners(buyBtns[0], cartMsgContinue, cartMsgModal);
  
}



function addListeners(showBtn, closeBtn, modal) {
  showBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("js-modal-show");
  });
  
  closeBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("js-modal-hide");
    setTimeout(function() {    
      modal.classList.remove("js-modal-hide");
      modal.classList.remove("js-modal-show");
    }, 200);
  });
}


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("promo-slideshow__slide");
  var dots = document.getElementsByClassName("promo-slideshow__dot");
  
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" promo-slideshow__dot--active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " promo-slideshow__dot--active";
  
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("vertical-tabs__content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("vertical-tabs__button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" vertical-tabs__button--active", "");
  }
  document.getElementsByClassName("vertical-tabs__content--" + tabName)[0].style.display = "block";
  evt.currentTarget.className += " vertical-tabs__button--active";
}