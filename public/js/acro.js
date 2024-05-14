(function( $ ) {
    $('.ot-accordions').each( function () {
    var allPanels = $(this).find('.acc-content');
    $(this).find('.acc-toggle').on( 'click', function(){

        var $this = $(this),
            $target = $this.next();

        if(!$target.hasClass('active')){
            allPanels.removeClass('active').slideUp(300);
            allPanels.parent().removeClass('current');
            $target.addClass('active').slideDown(300);
            $target.parent().addClass('current');
        }

        return false;
    });
    $(this).find('.acc-toggle:first').trigger('click');
});
})( jQuery );