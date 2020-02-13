
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      // loop: true,
      // freeMode: true,
      // loopedSlides: 3, //looped slides should be the same
      // watchSlidesVisibility: true,
      // watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 0,
      effect: 'fade',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // loop:true,
      // loopedSlides: 5, //looped slides should be the same
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    var swiper = new Swiper('.swiper-wraper', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });