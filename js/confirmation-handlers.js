$(document).ready(function() {

    <!-- apply disocunt -->	
    $('.action_applyDiscount').click(function(e) {
        $('.original-price').removeClass('displayNone');
        $('.original-price').addClass('mimic-click');
    });

});