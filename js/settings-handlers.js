$(document).ready(function() {
    $('.action_openBillingAddress').click(function(e) {

        $('.paymentPanel.billing-address').addClass('active');
        $('.paymentPanel.card-payment').removeClass('active');
        $('.paymentPanel.saved-card').removeClass('active');
        $('.paymentPanel.gc-payment').removeClass('active');

        // remove active class from all setting menu items and add class to clicked a tags holding li
        $('.settings-payment-types li a').removeClass('active');
        $(this).closest('li a').addClass('active');
        e.preventDefault();
    });


    $('.action_openSavedcard').click(function(e) {
        $('.paymentPanel.card-payment').addClass('active');
        $('.paymentPanel.saved-card').removeClass('active');
        $('.paymentPanel.gc-payment').removeClass('active');
        $('.paymentPanel.billing-address').removeClass('active');
        e.preventDefault();
    });

    $('.action_internationalPayment').click(function(e) {
        $('.paymentPanel.international-payment').addClass('active');
        $('.paymentPanel.card-payment').removeClass('active');
        $('.paymentPanel.saved-card').removeClass('active');
        $('.paymentPanel.gc-payment').removeClass('active');
        $('.paymentPanel.billing-address').removeClass('active');
        $('.paymentPanel.confirm-DD').removeClass('active');
        e.preventDefault();
    });

    $('.action_cardPayment').click(function(e) {
        $('.paymentPanel.saved-card').addClass('active');
        $('.paymentPanel.international-payment').removeClass('active');
        $('.paymentPanel.card-payment').removeClass('active');
        $('.paymentPanel.gc-payment').removeClass('active');
        $('.paymentPanel.billing-address').removeClass('active');
        $('.paymentPanel.confirm-DD').removeClass('active')

        // remove active class from all setting menu items and add class to clicked a tags holding li
        $('.settings-payment-types li a').removeClass('active');
        $(this).closest('li a').addClass('active');
        e.preventDefault();
    });

    $('.action_goCardless').click(function(e) {

        $('.paymentPanel.saved-card').removeClass('active');
        $('.paymentPanel.international-payment').removeClass('active');
        $('.paymentPanel.card-payment').removeClass('active');
        $('.paymentPanel.billing-address').removeClass('active');

        // If customer cannot edit DD becuase they have cancelled
        if ($('.gc-dd-details').hasClass('active')) {

            $('.paymentPanel.gc-payment').addClass('active');

        } else {
            $('.paymentPanel.confirm-DD').addClass('active');
        }

        // remove active class from all setting menu items and add class to clicked a tags holding li
        $('.settings-payment-types li a').removeClass('active');
        $(this).closest('li a').addClass('active');
        e.preventDefault();
    });
    <!-- saved notification  -->	
    $('.action_showSavedMessage').click(function(e) {
        $('.k-notify').addClass('show-notification');
        document.getElementById('k-notify-holder').innerHTML = '<p class="centered">The details have been saved</p>';

        //hide notification
        t = function() {
            $('.k-notify').removeClass('show-notification')
        }, setTimeout(t, 2488)

    });

    $('.action_confrimDD').click(function(e) {
        $('.paymentPanel.confirm-DD').addClass('active');
        $('.paymentPanel.gc-payment').removeClass('active');
        $('.gc-dd-details').addClass('active');
        $('.gc-payment-on-hold').removeClass('active');
        e.preventDefault();
    });

    $('.action_editDD').click(function(e) {
        $('.paymentPanel.gc-payment').addClass('active');
        $('.paymentPanel.confirm-DD').removeClass('active');
        e.preventDefault();
    });

    // cancel DD
    $('.action_cancelDD').click(function(e) {
        $('.gc-payment-on-hold').addClass('active');
        $('.gc-dd-details').removeClass('active');
        e.preventDefault();
    });
	


});