jQuery(document).ready( function($){
    $('.carousel').carousel();
    $('.collapsed-image .fa').on('click', function(){
        $(this).parent().parent().parent().removeClass("in");
    });
});

