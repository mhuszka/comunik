
/* portfolio  JS*/

$( document ).ready(function() {
    console.log( "ready!" );
    
    $(function() {
		var selectedClass = "";
        
		$(".fil-cat").click(function(){ 
            selectedClass = $(this).attr("data-rel"); 
            console.log(selectedClass)
            $(".portfolio").fadeTo(100, 0.1);
            $(".portfolio div").not("."+selectedClass).not(".redsquare").not(".textport").fadeOut().removeClass('scale-anm');

            setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('scale-anm');
                $(".portfolio").fadeTo(300, 1);
            }, 300); 
	   });
    });
}); 


$(document).ready(function() {
    var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});