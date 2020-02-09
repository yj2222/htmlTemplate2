$(function(){

  $('.hamburgerMenu__hide').click(function() {
    console.log($(this))
    if($(this).hasClass("hamburgerMenu__hide")){ 
      $(this).addClass('hamburgerMenu__active').removeClass('hamburgerMenu__hide');
      $('.headerBottom').show();
    }else{
      $(this).addClass('hamburgerMenu__hide').removeClass('hamburgerMenu__active');
      $('.headerBottom').hide();
    }
  })

});

