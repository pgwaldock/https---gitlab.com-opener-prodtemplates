

$(document).ready(function() {


   <!-- expand order status panel on dash when ticking 'more details' -->	
   // $('.action_expandStatus').click(function(e) {
      //  $('.expandingContainer.expandingStatus').addClass('expanded');
      //  $('.bc_button.action_expandStatus').addClass('displayNone');
      //  $('.bc_button.action_closeStatus').removeClass('displayNone');
    //});

    <!-- close order status panel on dash when ticking 'less details' -->	
   //$('.action_closeStatus').click(function(e) {
      //  $('.expandingContainer.expandingStatus').removeClass('expanded');
      //  $('.bc_button.action_expandStatus').removeClass('displayNone');
       // $('.bc_button.action_closeStatus').addClass('displayNone');
    //});
	
	
	 <!-- handle tab selected states-->	
    $('.tabs a').click(function(e) {
        $('.tabs a').removeClass('selected');
        $(this).addClass('selected');
    });
	
	<!-- go to saved orders tab -->	
    $('.action_goToSavedOrdersTab ').click(function(e) {
        $('.tab-content.current-tab').removeClass('current-tab');
        $('.tab-content.content-saved-orders').addClass('current-tab');
    });
	<!-- go to open orders tab -->	
	   $('.action_goToOpenOrdersTab ').click(function(e) {
        $('.tab-content.current-tab').removeClass('current-tab');
        $('.tab-content.content-open-orders').addClass('current-tab');
    });
	<!-- go to completed orders tab -->	
	   $('.action_goToCompletedOrdersTab ').click(function(e) {
        $('.tab-content.current-tab').removeClass('current-tab');
        $('.tab-content.content-completed-orders').addClass('current-tab');
    });	
	<!-- go to completed orders tab -->	
	   $('.action_goToBookmarksTab ').click(function(e) {
        $('.tab-content.current-tab').removeClass('current-tab');
        $('.tab-content.content-bookmarks').addClass('current-tab');
    });	
	
	 // Show quote breakdown
    $('.action-showBreakdown').click(function(e) {
        $(this).closest('.quote-module').addClass('show-breakdown');
    });

    // Close quote breakdown
    $('.action-closeBreakdown').click(function(e) {
        $(this).closest('.quote-module').removeClass('show-breakdown');
    });
	
	<!-- Book trucking modal  -->	
    $('.action-openTruckBooking').click(function(e) {
        $('.bclever-modal-bg').addClass('bclever-modal-open');
        $('.trucking-modal ').addClass('bclever-modal-open');
        e.preventDefault();
    });
	
	// Save bookmark name change
    $('.action-save-bookmark-name').click(function(e) {
		$(this).removeClass('show');
		//grow as no save button to be overlapped by
        $('#demo-name-field').removeClass('change-detected');
			//show save notification
        $('.k-notify').addClass('show');
        document.getElementById('k-notify-holder').innerHTML = '<p class="centered">Your bookmark name change has been saved.</p>';
		//hide notification
			t = function() {
				$('.k-notify').removeClass('show')
			}, setTimeout(t, 2888)
    });
	
	// Show save bookmark name button
    $('#demo-name-field').focus(function(e) {
			//show save notification
        $('.q-name .btn-save').addClass('show');
			//shrink and not be overlapped by save button
        $(this).addClass('change-detected');
     
    });
	
	
	
	// Change maps
	$('.map-1').click(function(e) {
        document.getElementById('map-switcher').innerHTML = '<iframe class="map" src="http://chaosdigital.co.uk/kontainers-2016/map.html" ></iframe>';
		document.getElementById('order-name').innerHTML = 'Tyres-order-3';
		$('.map-list li').removeClass('current');
		$('.map-1').addClass('current');
	e.preventDefault();
    });
    $('.map-2').click(function(e) {
        document.getElementById('map-switcher').innerHTML = '<iframe class="map" src="http://chaosdigital.co.uk/kontainers-2016/map-2.html" ></iframe>';
		document.getElementById('order-name').innerHTML = 'Tyres-order-4';		
		$('.map-list li').removeClass('current');
		$('.map-2').addClass('current');
	e.preventDefault();
    });
    $('.map-3').click(function(e) {
        document.getElementById('map-switcher').innerHTML = '<iframe class="map" src="http://chaosdigital.co.uk/kontainers-2016/map-3.html" ></iframe>';
		document.getElementById('order-name').innerHTML = 'Tyres-order-5';
		$('.map-list li').removeClass('current');
		$('.map-3').addClass('current');
	e.preventDefault();
    });
	
	
});