
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

// Media Query
    // zgoda1 tooltip
    var zgodaWiecej = document.getElementById('zgodaWiecej');
    var zgodaWiecejDisplay = document.getElementById('zgodaWiecejDisplay');
    // zgoda2 tooltip
    var zgodaWiecej2 = document.getElementById('zgodaWiecej2');
    var zgodaWiecejDisplay2 = document.getElementById('zgodaWiecejDisplay2');
    function myFunction(x) {
      if (!x.matches) { // If media query matches
        var swiper = new Swiper('.swiper-wraper', {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          mousewheel: true,
        });
    
        window.onload = function() {
          document.querySelector("input").focus();
        }; 
        // zgodaWiecej.addEventListener('mouseover', function(){
        //   zgodaWiecejDisplay.style.display = 'block';
        // });
        // zgodaWiecej.addEventListener('mouseout', function(){
        //   zgodaWiecejDisplay.style.display = 'none';
        // });
        
        // zgodaWiecej2.addEventListener('mouseover', function(){
        //   zgodaWiecejDisplay2.style.display = 'block';
        // });
        // zgodaWiecej2.addEventListener('mouseout', function(){
        //   zgodaWiecejDisplay2.style.display = 'none';
        // });
      } else {
        // zgodaWiecej.addEventListener('touchstart', function(){
        //   zgodaWiecejDisplay.style.display = 'block';
        // });
        // zgodaWiecej.addEventListener('mouseout', function(){
        //   zgodaWiecejDisplay.style.display = 'none';
        // });
        
        // zgodaWiecej2.addEventListener('touchstart', function(){
        //   zgodaWiecejDisplay2.style.display = 'block';
        // });
        // zgodaWiecej2.addEventListener('mouseout', function(){
        //   zgodaWiecejDisplay2.style.display = 'none';
        // });
      }
    }

    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) 
    x.addListener(myFunction) 

// Form Validation
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
  // Retrieving the values of form elements 
  var name = document.contactForm.fName;
  var email = document.contactForm.fEmail;
  var phone = document.contactForm.fPhone;
  var zgoda = document.contactForm.zgodaDane;
  var zgoda2 = document.contactForm.zgodaTel;

    var oferta = [];
    var checkboxes = document.getElementsByName("oferta[]");
    var nameErr = emailErr = phoneErr = zgodaDaneErr = zgodaTelErr = ofertaErr = true;
    for(var i=0; i < checkboxes.length; i++) {
        if(!checkboxes[i].checked ) {
            // Populate oferta array with selected values
           if (!checkboxes[0].checked ) {
            printError("ofertaErr", "Zaznacz chociaż jedną opcję");
           } 
        } else {
          oferta.push(checkboxes[i].value);
          printError("ofertaErr", "");
          ofertaErr = false;
          console.log(oferta)
        }
    }
  

// Defining error variables with a default value
  // Validate imie i nazwisko
  if(name.value == "") {
      printError("nameErr", "Wprowadź swóje imię i nazwisko.");
      name.style.border = "1px solid red";
  } else {
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(name.value) === false) {
          printError("nameErr", "Wprowadź poprawne imienie i nazwisko.");
      } else {
          printError("nameErr", "");
          nameErr = false;
      }
  }
  // Validate email address
  if(email.value == "") {
      printError("emailErr", "Wprowadź swój adres email.");
      email.style.border = "1px solid red";
  } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email.value) === false) {
          printError("emailErr", "Wprowdź poprawny adres email");
      } else{
          printError("emailErr", "");
          emailErr = false;
      }
  }
  // Validate phone number
  if(phone.value == "") {
      printError("phoneErr", "Wprowadź swój nr telefonu.");
      phone.style.border = "1px solid red";
  } else {
      var regex = /^[1-9]\d{8}$/;
      if(regex.test(phone.value) === false) {
          printError("phoneErr", "Wprowadź poprawny nr telefonu.");
      } else{
          printError("phoneErr", "");
          phoneErr = false;
      }
  }
  // Validate zgoda o przetwarzanie danych osobowych
  if(!zgoda.checked) {
    printError("zgodaDaneErr", "Pole wymagane.");
    zgoda.style.border = "1px solid red";
    zgodaDaneErr = true;
  } else {
    printError("zgodaDaneErr", "");
    zgodaDaneErr = false;
  }
   // Validate zgoda o otrzymywanie droga tel informacji handlowych 
  if(!zgoda2.checked) {
    printError("zgodaTelErr", "Pole wymagane.");
    zgodaTelErr = true;
  } else {
    printError("zgodaTelErr", "");
    zgodaTelErr = false;
  }
  // Prevent the form from being submitted if there are any errors
  if(( nameErr || emailErr || phoneErr || zgodaDaneErr || zgodaTelErr || ofertaErr ) == true) {
     return false;
  } else {
    var dataPreview = "Dane: \n" +
    "Imię i nazwisko: " + name.value + "\n" +
    "Email: " + email.value + "\n" +
    "Telefon: " + phone.value + "\n" +
    "Zgoda: " + zgoda.value + "\n" +
    "Zgoda2: " + zgoda2.value + "\n";
    if(oferta.length) {
    dataPreview += "Oferta: " + oferta.join(", ");
    } alert(dataPreview);
  }
};



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
      '<img src="img/logo.jpg">'+
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