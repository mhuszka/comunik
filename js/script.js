
;(function($){ 
   $(document).ready(function() {
    $('.information_menu').find('li').hover(function(e) {
         $('.information_menu').find('li').removeClass('active');
        $(this).addClass('active');
        $(".overlay-item").removeClass("active");
        $(".overlay-item").removeClass("inactive");
        $(".overlay-id"+$(this).data("id")).addClass("active").removeClass("inactive");
        
         $(".overlay-id"+$(this).data("id")).prev().addClass("inactive")
    });     
    
    $('.slideshow').children().on('mouseleave',function(e) {
        $(this).removeClass("active");
    });    
    
    $('.carousel').carousel();
   });
})(jQuery);

 

/* portfolio  JS*/

$( document ).ready(function() {
    
    $(function() {
        var selectedClass = "";
        
        $(".fil-cat").click(function(){ 
            selectedClass = $(this).attr("data-rel"); 
            console.log(selectedClass)
            $(".portfolio").fadeTo(100, 0.1);
            $(".portfolio div").not("."+selectedClass).not(".redsquare").not(".textport").not("#lightbox").not(".modal-dialog").not(".modal-content").not(".modal-body").not("#myCarousel").not(".carousel-indicator").not(".item").fadeOut().removeClass('scale-anm');

            setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('scale-anm');
                $(".portfolio").fadeTo(300, 1);
            }, 300); 
       });
    });
}); 


$(document).ready(function() {
    var $lightbox = $('#lightbox');
    var $carousel = $('#carousel-inner');
    
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
        $lightbox.find('.close').removeClass('hidden');
        
    });
});




 $(document).ready(function() {
                // Lorsque je soumets le formulaire
                $('#formu').on('submit', function(e) {
                    e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire

                    var name = $("#nom").val();
                    var mail = $("#mail").val();
                    var message = $("#message").val();
                    var categorie = $("#categorie").val();


                    var url="contact.php?categorie=" + categorie + "&nom=" + name + "&mail=" + mail + "&message=" + message;
                    // Envoi de la requête HTTP en mode asynchrone
                    $.ajax({
                        url: url, 
                        type: 'GET', // La méthode indiquée dans le formulaire (get ou post)
                        success: function(data) { // Je récupère la réponse du fichier PHP
                            data = JSON.parse(data);
                            console.log(data);
                            
                            if (data.nom == true) {
                                $("#nom").css('border', '1px dotted red');
                            }
                            else{
                                $("#nom").css('border', '1px dotted black');
                            }
                            
                            
                            if (data.mail == true) {
                                $("#mail").css('border', '1px dotted red');
                            }
                            else{
                                $("#mail").css('border', '1px dotted black');
                            }
                            
                            
                            if (data.message == true) {
                                $("#message").css('border', '1px dotted red');
                            }
                            else{
                                $("#message").css('border', '1px dotted black');
                            }
                        }
                    });
                });
            });