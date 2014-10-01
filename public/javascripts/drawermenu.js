var main = function() {


var open = false;
    

    $('.icon-menu').click( function() {

        if(!open) {
            $('.drawer').animate({
                right: '0px'
            }, 200);
            $('body').animate({
                right: '300px'
            }, 200);    

            open = true;

        }else{
            $('.drawer').animate({
              right: '-300px'
            }, 200);

            $('body').animate({
              right: '0px'
            }, 200);

            open = false;
        }
    });
    

  
    
    $('.icon-close').click(function() {
        $('.drawer').animate({
          right: '-285px'
        }, 200);

        $('body').animate({
          right: '0px'
        }, 200);
  });


    
  
}; 

$(document).ready(main);