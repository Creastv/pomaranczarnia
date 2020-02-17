
   // Modals
/* This script supports IE9+ */
(function() {
  /* Opening modal window function */
  function openModal() {
      /* Get trigger element */
      var modalTrigger = document.getElementsByClassName('jsModalTrigger');

      /* Set onclick event handler for all trigger elements */
      for(var i = 0; i < modalTrigger.length; i++) {
          modalTrigger[i].onclick = function() {
            var target = this.getAttribute('href').substr(1);
            var modalWindow = document.getElementById(target);

            modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open'; 
          }
      }   
  }

  function closeModal(){
    /* Get close button */
    var closeButton = document.getElementsByClassName('jsModalClose');
    var closeOverlay = document.getElementsByClassName('jsOverlay');

    /* Set onclick event handler for close buttons */
      for(var i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
          var modalWindow = this.parentNode.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }   

    /* Set onclick event handler for modal overlay */
      for(var i = 0; i < closeOverlay.length; i++) {
        closeOverlay[i].onclick = function() {
          var modalWindow = this.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }  

  }

  /* Handling domready event IE9+ */
  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* Triggering modal window function after dom ready */
  ready(openModal);
  ready(closeModal);
}());

// Main Slider
   var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 0,
      effect: 'fade',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });



// Google map
function initMap() {
  var uluru = {lat: 52.2466629, lng: 20.9602282};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]}]
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img  style="width:100%; src="img/logo.jpg">'+
      '<div id="bodyContent">'+
      '<h3>Wawrzyszewska 11, 01-162 Warszawa </h3>'+
      '<a class="cta" href="https://www.google.pl/maps/place/Biuro+Sprzedaży+Mieszkań+Pomarańczarnia+Deweloper+Gemma/@52.2466629,20.9602282,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x0:0x3ec9a3a70588c25a!2sBiuro+Sprzedaży+Mieszkań+Pomarańczarnia+Deweloper+Gemma!8m2!3d52.2466596!4d20.9624169!3m4!1s0x471ecb7620cefbe7:0x3ec9a3a70588c25a!8m2!3d52.2466596!4d20.9624169" target="_blank">JAK DOJECHAĆ</a>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}