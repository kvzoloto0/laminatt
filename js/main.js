/*navBurger*/
$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ¡ prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.overlay').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});
/*navBurger*/

/*start scrooll burger*/
function lockScroll() {
    if ($('body').hasClass('lock-scroll')) {
        $('body').removeClass('lock-scroll');
    }
    else {
        $('body').addClass('lock-scroll');
    }
}
/* end scrooll burger*/
 


var element = document.getElementById('phone');

var maskOptions = {
    mask: '+38(000)000-00-00',
    lazy: false,
} 

var mask = new IMask(element, maskOptions);

//var element2 = document.getElementById('email');
//var maskOptions2 = {    
//    mask:function (value) {
//                if(/^[a-z0-9_\.-]+$/.test(value))
//                    return true;
//                if(/^[a-z0-9_\.-]+@$/.test(value))
//                    return true;
//                if(/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
//                    return true;
//                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
//                    return true;
//                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
//                    return true;
//                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
//                    return true;
//                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
//                    return true;
//                return false;
//                    },
//    lazy: false
//} 
//var mask2 = new IMask(element2, maskOptions2);




$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});










