$(document).ready(function(){
  if($('.owl-logos').length > 0){
    $('.owl-logos').owlCarousel({
      items:4,
      loop:true,
      margin:0,
      nav:false,
      dots: false,
      center: true,
      autoplay:true,
      autoplayTimeout:1500,
      // autoplayHoverPause:false,
      // slideSpeed: 500,
      // autoplay: true,
      // autoplayTimeout: 0,
      autoplaySpeed: 1500,
      autoplayHoverPause: false,
      slideTransition: 'linear',
      responsive : {
        0 : {
          items:3
        },
        960 : {
          items:3
        },
        1024 : {
          items:4
        }
      }
    });
  }

  if($('.owl-slide').length > 0){
    $('.owl-slide').owlCarousel({
      items:1,
      margin:0,
      loop:true,
      nav:false,
      dots: false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:false
    });
  }

  if($('.owl-detail').length > 0){
    $('.owl-detail').owlCarousel({
      items:1,
      margin:0,
      loop:true,
      nav:true,
      dots: false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      navText: ['<span class="btn btn-circle-outline-gray btn-circle-outline-gray-lg p-0 d-inline-flex"><i class="fa-sharp m-auto fa-solid fa-arrow-left"></i></span>', '<span class="btn btn-circle-outline-gray btn-circle-outline-gray-lg p-0 d-inline-flex"><i class="fa-sharp m-auto fa-solid fa-arrow-right"></i></span>']
    });
  }

});


