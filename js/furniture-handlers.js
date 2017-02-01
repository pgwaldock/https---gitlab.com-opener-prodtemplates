window.onload = function() {
    <!--  preloader --> 
    $('html').removeClass('k-page-loading');
}


$(document).ready(function() {


    ////////////
    //  MODALS
    ////////////
	
	
	 <!-- accept cookies-->	
	 $('.action_acceptCookies').click(function(e) {
            // open country selector modal
            $('.cookie-message ').removeClass('show');
     
	});
	
    <!-- select a country-->	
	 $('.country-selected').click(function(e) {
            // open country selector modal
            $('.k-modal-bg').addClass('k-modal-open');
		
            $('.k-modal.country-selector').addClass('k-modal-open');
     
	});
	
	 <!--set to UK version -->	
	 $('.action_select-uk').click(function(e) {
		    //set country selected to the UK
			$('.country-selected').removeClass('usa');
		    $('.country-selected').addClass('uk');
            // close country selector modal
            $('.k-modal-bg').removeClass('k-modal-open');
            $('.k-modal.country-selector').removeClass('k-modal-open');
     
	});
	
	 <!--set to USA version -->	
	 $('.action_select-usa').click(function(e) {
		    //set country selected to the UK
			$('.country-selected').removeClass('uk');
		    $('.country-selected').addClass('usa');
            // close country selector modal
            $('.k-modal-bg').removeClass('k-modal-open');
            $('.k-modal.country-selector').removeClass('k-modal-open');
     
	});


    <!-- open new login modal -->	
    $('.action_openLogin').click(function(e) {
        $('.bclever-modal-bg').addClass('bclever-modal-open');
        $('.bc-access-modal').addClass('bclever-modal-open');
        e.preventDefault();
    });

    <!-- are you sure modal -->	
    $('.action_sureModal').click(function(e) {
        $('.bclever-modal-bg').addClass('bclever-modal-open');
        $('#bc_sure_modal').addClass('bclever-modal-open');
        e.preventDefault();
    });

    <!-- modals general - close 	-->	
    $('.close-bclever-modal').click(function(e) {
        $('.bclever-modal-bg').removeClass('bclever-modal-open');
        $('.bclever-modal').removeClass('bclever-modal-open');
    });

    <!-- new Login - swap to forget password-->	
    $('.action_swapToReset').click(function(e) {
        $('.access-container.reset-password').removeClass('hide');
        $('.access-container.sign-in').addClass('hide');
    });

    <!-- new reset password - swap to login-->	
    $('.action_swapToLogin').click(function(e) {
        $('.access-container.reset-password').addClass('hide');
        $('.access-container.sign-in').removeClass('hide');
    });

    <!-- new reset password - show alert-->	
    $('.action_emailReset').click(function(e) {
        $('.access-container.reset-password .alert-box.success').removeClass('displayNone');
    });

    <!-- new reset password - show alert-->	
    $('.reset-password #email').focus(function(e) {
        $('.access-container.reset-password .alert-box.success').addClass('displayNone');
    });



    ////////////
    //  ERRORS
    ////////////

    <!-- show errors 	-->	
    $('.logo').click(function(e) {
        $('.alert-box.alert').toggleClass('hide-alert');
        $('.alert-box.general-error').toggleClass('hide-alert');
    });

    //v1 pages
    $('.bclever_logo').click(function(e) {
        $('.alert-box.alert').toggleClass('hide-alert');
        $('.alert-box.general-error').toggleClass('hide-alert');
    });



    ////////////
    //  COOKIES
    ////////////

    <!-- hide cookie message -->	
    $('.action_acceptCookies').click(function(e) {
        $('.cookie-message').addClass('hide-cookies');
    });


    ////////////////////////////////////////////////////////////
    //  UI EXPANDERS - Clicking confirmChk opens parent expander 
    ////////////////////////////////////////////////////////////

    // Expanders
    $('.expandingContainer .confirmChk').click(function(e) {
        $(this).closest('.expandingContainer').children('.expander').toggleClass('expand-hidden');
    });
	
	  <!-- expand order status panel on dash when ticking 'more details' -->	
    $('.action_expandStatus').click(function(e) {
		$(this).closest('.six').children('.action_closeStatus.displayNone').removeClass('displayNone');
        $(this).closest('.expandingContainer').addClass('expanded');
		$(this).toggleClass('displayNone');
		
    });
	
	 <!-- close order status panel on dash when ticking 'less details' -->	
    $('.action_closeStatus').click(function(e) {
		$(this).closest('.six').children('.action_expandStatus.displayNone').removeClass('displayNone');
        $(this).closest('.expandingContainer').removeClass('expanded');
		$(this).toggleClass('displayNone');
    });
	



    ////////////
    //MOBILE
    ////////////

    // hamburger button animate to close
    $('.k-nav-toggle').click(function(e) {
        $('.k-nav-toggle').toggleClass('close-icon');
        $('.k-nav-bar').toggleClass('open-nav');
    });

    $('.k-nav-bar .k-button').click(function(e) {
        $('.k-nav-toggle').removeClass('close-icon');
        $('.k-nav-bar').removeClass('open-nav');
    });

   ////////////
    //HELP
    ////////////
    <!-- 0pen -->	
    $('.action_open-help').click(function(e) {
        $('.help').addClass('show');
    });

    <!-- when "use my addres" button shows at bottom -->
    $('.action_closeHelp').click(function(e) {
       $('.help').removeClass('show');
    });
  

    ////////////
    //CONTACTS
    ////////////
    <!-- 0pen -->	
    $('.action_open-contacts').click(function(e) {
        $('.contacts').addClass('open-contacts');
    });

    <!-- when "use my addres" button shows at bottom -->
    $('.action_showButton').click(function(e) {
        $('.contacts').removeClass('no-button');
    });
    <!-- hide "use my addres" button  at bottom -->
    $('.action_hideButton').click(function(e) {
        $('.contacts').addClass('no-button');
    });


    <!-- close 	-->	
    $('.contacts .close-contacts').click(function(e) {
        $('.contacts').removeClass('open-contacts');

    });
    <!-- trash 	-->	
    $('.trash-contact').click(function(e) {
        $('.contacts').removeClass('open-contacts');
        $('.contactPrompt').removeClass('hide-prompt');

    });
    $('.action_confirmTrash').click(function(e) {
        $('.contact_new').removeClass('open-contacts');
        $('.contactPrompt').addClass('hide-prompt');

    });
    <!-- NEW CONTACTS -->	
    <!-- 0pen -->	
    $('.action_openNewContact').click(function(e) {
        $('.contact_new').addClass('open-contacts');
    });

    <!-- show save button -->	
    $('.contact_info input').focus(function(e) {
        $('.contact_new').removeClass('no-button');
        $('.warning').addClass('hide-alert');
    });

    <!-- close 	-->	
    $('.contact_new .close-contacts').click(function(e) {
        $('.contact_new').removeClass('open-contacts');

    });
	
	
	<!--TYPEAHEAD replacement-->
    function showTypeaheadResults() {
		
		
        var Typeaheadvalue = $('.typeahead').val();
        //if (Typeaheadvalue.length >= 3) {
         //   $('.typeahead-search').addClass('show-results');
        //} else {
         //   $('.typeahead-search').removeClass('show-results');
        //}
		
		if (Typeaheadvalue.length == 0) {
			   $('.typeahead-search').removeClass('show-results');
               $('.k-loading').addClass('hidden');
			    $('.no-search-results').addClass('hidden');
        }
      	   if (Typeaheadvalue.length == 1) {
			   $('.typeahead-search').removeClass('show-results');
               $('.typeahead-search .k-loading').removeClass('hidden');
			    $('.typeahead-search .no-search-results').addClass('hidden');
        }
			  if (Typeaheadvalue.length == 2) {
            $('.typeahead-search').addClass('show-results');
			 $('.typeahead-search .k-loading').addClass('hidden');
			 $('.typeahead-search .no-search-results').addClass('hidden');
        }
		   if (Typeaheadvalue.length >= 3) {
			 $('.typeahead-search').removeClass('show-results');
			    $('.typeahead-search .k-loading').addClass('hidden');
              $('.typeahead-search .no-search-results').removeClass('hidden');
        }
		
		
    }
    //$(function() {
      //  $('.typeahead').keyup(showTypeaheadResults);
      //  showTypeaheadResults();
    //});
	
	 $('.typeahead').keyup(function(e) {
         showTypeaheadResults();
    });
	
    <!--/TYPEAHEAD replacement-->


});