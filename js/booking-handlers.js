$(document).ready(function() {

    //////////////////////////////////
    //Container/LCL details accordians
    //////////////////////////////////

    <!-- open container details accordian / replaces css functionality on invisible checkbox click -->	
    $('.action_open-container-details').click(function(e) {
        $(this).parent().toggleClass('open-container-details');
        <!-- set focus on content details textarea when container details expanded. only works on first one but needs to work per container -->	
        $('#contentsTextarea').focus();
        e.preventDefault();
    });

    <!-- commodity lookup modal  -->	
    $('.commodityCode').click(function(e) {
        $('.bclever-modal-bg').addClass('bclever-modal-open');
        $('#custom_modal').addClass('bclever-modal-open');
        document.getElementById('demo_newCommodityName').innerHTML = 'Leather Bags and other things to make this a label a bit longer';
        e.preventDefault();
    });
	
    <!-- Copy details modal  -->	
    $('.btn-copy-details').click(function(e) {
        $('.bclever-modal-bg').addClass('bclever-modal-open');
        $('.copy-details-modal ').addClass('bclever-modal-open');
        e.preventDefault();
    });
	
    <!-- Customs documents modal  -->	
    $('.action_addCustDocs').click(function(e) {
        $('.bclever-modal-bg').addClass('bclever-modal-open');
        $('.docs-modal').addClass('bclever-modal-open');
        e.preventDefault();
    });
	
	
	 <!-- Copy details error  -->	
    $('.action-showCopyError').click(function(e) {
        $('.k-notify').addClass('show');
        document.getElementById('k-notify-holder').innerHTML = '<p class="centered">Details from <strong>Container 1</strong> copied to <strong>Container 2,3</strong> &amp; <strong>4</strong></p>';
        //hide notification
        t = function() {
            $('.k-notify').removeClass('show')
        }, setTimeout(t, 2888)
    });
	
	<!-- liquid select reveal  -->	
	$('#confirmLiquid').click(function(e) {
		$('.liquid-type').toggleClass('displayNone');
	});

    <!-- has code lookup modal  -->	
    $('#hasCode').click(function(e) {
        $('.bclever-modal-bg').addClass('bclever-modal-open');
        $('#has_modal').addClass('bclever-modal-open');
        document.getElementById('demo_newMaterialName').innerHTML = 'Accumulators pressurized pneumatic or hydraulic containing nonflammable gas see Articles pressurized pneumatic or hydraulic containing non-flammable gas';
        e.preventDefault();
    });



    <!--------------------------->	
    <!--------- Edit order ------>	
    <!--------------------------->	
    $('#invoice-refrence').focus(function(e) {

        <!-- add class to booking page -->
        $('.booking_holder').addClass('edit-mode');

        <!-- change booking header to edit booking and add class	-->	
        document.getElementById('booking-heading').innerHTML = 'Edit Order<span>(REF:C7EC8EWCJCE8CEW)</span>';
        $('.booking-heading').addClass('edit-heading');

        <!-- open the container accordians -->
        $('.container-particulars').addClass('open-container-details');

        <!-- open expanding elements usually opened by confirm checkboxes -->
        $('.expander').removeClass('expand-hidden');


        <!-- move to booking page -->
        if ($('.dash_holder').hasClass('animate-in')) {
            $('.dash_holder').removeClass('animate-in');
            $('.dash_holder').addClass('animate-out');
        }
        if ($('.confirmation_holder').hasClass('animate-in')) {
            $('.confirmation_holder').removeClass('animate-in');
            $('.confirmation_holder').addClass('animate-out');
        }
        $('.booking_holder').addClass('animate-in');
        t = function() {
            $('.dash_holder').removeClass('animate-out');
            $('.confirmation_holder').removeClass('animate-out');
            e.preventDefault();
        }, setTimeout(t, 3488)
    });


    <!--------------------------------------------->	
    <!--- show message when order not editable ---->	
    <!--------------------------------------------->	
    $('#invoice-refrence').blur(function(e) {

        <!-- add class to booking page -->
        $('.page-overlay.message-order-non-editable').removeClass('displayNone');


    });
		
		




});