$(document).ready(function() {
  $('.menu_button').click(function() {
    $('nav, #back').toggleClass('open');
  });
    
    var owl = $('#owl');
    owl.owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 400,
      pagination: true,
      singleItem:true,
      autoPlay: 8000,
      navigationText : false,
      navigation: true
  });
    $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});
