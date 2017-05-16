// smooth scrolling //

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 3000, 'swing', function () {
            window.location.hash = target;
        });
    });
});


// onload fade in //
$(document).ready(function() {
    function checkPosition() {
        if ($(this).scrollTop() > 200) {
            $('.return').fadeIn(500);
        } else {
            $('.return').fadeOut(300);
        }
    }
    // Show or hide the sticky footer button
    $(window).scroll(checkPosition);

    // Animate the scroll to top
    $('.return').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    })

    checkPosition();
});

$(".kicker").delay(700).animate({opacity: 1}, 1000);


$(window).scroll(function(){
    parallax();
})

function parallax() {

    var wScroll = $(window).scrollTop();

    $('.banner').css('background-position',
        'center '+(wScroll*0.65)+'px')

    $('.work').css('background-position',
        'center '+(wScroll*0.48)+'px')

    $('.clients').css('background-position',
    'center '+(wScroll*0.34)+'px')  
}


$(function(){
    clientStuff();


function clientStuff(){

    $('.client-control-next, .client-control-prev').click(function() {

        var $this = $(this),
            curActiveClient = $('.clients-belt').find('.active-client'),
            position = $('.clients-belt').children().index(curActiveClient),
            clientNum = $('.client-unit').length;

        if($this.hasClass('client-control-next')) {
            if(position < clientNum -1) {
               $('.active-client').removeClass('active-client').next().addClass('active-client')
            } else {
                $('.client-unit').removeClass('active-client').first().addClass('active-client')
                $('.client-logo').removeClass('active-client').first().addClass('active-client')
            }

        } else {

            if(position == 0) {
                $('.client-unit').removeClass('active-client').last().addClass('active-client')
                $('.client-logo').removeClass('active-client').last().addClass('active-client')
            } else {

                $('.active-client').removeClass('active-client').prev().addClass('active-client')
            }
        }
    

    });
}

});


var pContainerHeight = $('.banner').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.overlay1').css({
      'transform' : 'translate(0px, '+ wScroll /40 +'%)'
    });

    $('.overlay2').css({
      'transform' : 'translate(0px, '+ wScroll /100 +'%)'
    });

    $('.overlay3').css({
      'transform' : 'translate(0px, -'+ wScroll /30 +'%)'
    });
    
    $('.title').css({
      'transform' : 'translate(0px, '+ wScroll /20 +'%)'
    });

  }

});