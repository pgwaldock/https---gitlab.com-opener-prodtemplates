$(document).ready(function() {


    ///////////
    //VARIABLES
    ///////////
    var lcl = 0;
    var quotesReached = 0;
    var previousStep = 1;
    var targetStep = 1;
    var currentStep = 1;
    var moveSection;
    var manyLCL = 0; //multiple lcl loads added
    var t; //time function
    var e; //Cancel the default action




    ////////////
    //MODULE NAV
    ////////////

    // scroll to newly added li on desktop 
    function scrollToLatest() {
        t = function() {
            var scrolledElement = (".module-steps");
            var scrollToStep = (".module-step-" + (targetStep - 1));
            $(scrolledElement).animate({
                scrollTop: $(scrollToStep).offset().top
            }, 1000);
        }, setTimeout(t, 88)
    }

    // scroll to newly added li	on mobile
    function scrollToLatestMobile() {
        var scrolledElementMobile = (".module-steps");
        var scrollToStepMobile = (".module-step-" + (targetStep - 1));
        $(scrolledElementMobile).animate({
            scrollLeft: $(scrollToStepMobile).offset().left + 100
        }, 1000);
    }

    // scroll to newly added li on if CURRRENT desktop 
    function scrollToCurrent() {
        t = function() {
            var scrolledElementCurrent = (".module-steps");
            var scrollToStepCurrent = (".module-step-" + (targetStep));
            $(scrolledElementCurrent).animate({
                scrollTop: $(scrollToStepCurrent).offset().top
            }, 1000);
        }, setTimeout(t, 88)
    }

    // scroll to newly added li	on if CURRRENT mobile
    function scrollToCurrentMobile() {
        var scrolledElementCurrentMobile = (".module-steps");
        var scrollToStepCurrentMobile = (".module-step-" + (targetStep));
        $(scrolledElementCurrentMobile).animate({
            scrollLeft: $(scrollToStepCurrentMobile).offset().left + 100
        }, 1000);
    }


    ///////////////////////////////
    <!--  module-nav links -->	
    ///////////////////////////////

    // FUNCTION - When you click a module-nav item or or a section button this badboy moves the sections and keeps them moving in the right way
    function moveSection() {

        // where we are going is higher than where we are
        if (targetStep > previousStep) {

            //change current step value
            currentStep = previousStep;

            // HANDLE SKIPPED STEPS - START
            //find the difference between target and current step
            var stepDifference = (targetStep - currentStep);
            // find first of inbetween steps going forward
            var firstTweenStep = currentStep + 1;
            // find /ast of inbetween steps going forward
            var lastTweenStep = targetStep - 1;

            // IF there are steps to skip
            if (stepDifference >= 1) {

                // Create array of skipped steps and do stuff with them
                function findInbetweenSteps(currentStep, targetStep, stepArray) {
                    firstTweenStep = lastTweenStep - firstTweenStep + 1;
                    var stepArray = [];
                    while (firstTweenStep--) stepArray[firstTweenStep] = lastTweenStep--;
                    return stepArray;
                }

                // all skipped steps in the array
                var allBetweenSteps = (findInbetweenSteps(firstTweenStep, lastTweenStep));
                //make sure all between steps that have been skipped moving forward are set to done
                allBetweenSteps.forEach(function(entry) {
                    $('.step-' + (entry) + '-section').removeClass('to-do');
                    //just in case done is already applied
                    $('.step-' + (entry) + '-section').removeClass('done');
                    $('.step-' + (entry) + '-section').addClass('done shunt');
                    //remove the shunt class which stop tha nimation
                    t = function() {
                        $('.step-' + (entry) + '-section').removeClass('shunt');
                    }, setTimeout(t, 88)
                });

            } // END IF
            // HANDLE SKIPPED STEPS - END

            //change class of where we are
            $('.step-' + currentStep + '-section').removeClass('current');
            $('.step-' + currentStep + '-section').addClass('done');

            //change class of where we are going to
            $('.step-' + targetStep + '-section').removeClass('to-do');
            $('.step-' + targetStep + '-section').removeClass('done');
            $('.step-' + targetStep + '-section').addClass('current');

            //remove current class from all mudule nav steps
            $('.module-steps li').removeClass('current');

            //change module nav class of target step
            $('.module-step-' + targetStep).addClass('current');
            //reset previousStep
            previousStep = targetStep;

            //change highlight state of module nav item. Not needed for going other way as there are no back buttons as module nav is enough.
            $('.module-step-' + targetStep).addClass('current');
            $('.module-step-' + currentStep).removeClass('current');

        }

        // HANDLE SKIPPED STEPS - START
        // where we are going is lower than where we are
        if (targetStep < previousStep) {

            //change previous step value
            currentStep = previousStep;

            //find the difference between target and current step
            var stepRevDifference = Math.abs(targetStep - currentStep);

            // find first of inbetween steps going back
            var firstRevTweenStep = previousStep - 1;

            // find /ast of inbetween steps going back
            var lastRevTweenStep = targetStep + 1;

            // IF there are steps to skip
            if (stepRevDifference > 1) {

                // Create array of skipped steps and do stuff with them
                function findRevInbetweenSteps(previousStep, targetStep, stepRevArray) { // from, to, placeholder
                    previousStep = targetStep - previousStep + 1;
                    stepRevArray = [];
                    while (previousStep--) stepRevArray[previousStep] = targetStep--;
                    return stepRevArray
                }

                // all skipped steps in the array
                var allRevBetweenSteps = (findRevInbetweenSteps(lastRevTweenStep, firstRevTweenStep));

                //make sure all between steps that have been skipped moving forward are set to done
                allRevBetweenSteps.forEach(function(entryRev) {
                    $('.step-' + (entryRev) + '-section').removeClass('done');
                    // just in case done is already applied
                    $('.step-' + (entryRev) + '-section').removeClass('to-do');
                    $('.step-' + (entryRev) + '-section').addClass('to-do shunt');
                    //remove the shunt class which stop tha nimation
                    t = function() {
                        $('.step-' + (entryRev) + '-section').removeClass('shunt');
                    }, setTimeout(t, 88)
                });

            } // END IF
            // HANDLE SKIPPED STEPS - END 

            //change class of where we are
            $('.step-' + currentStep + '-section').removeClass('current');
            $('.step-' + currentStep + '-section').addClass('to-do');

            //change class of where we are going to
            $('.step-' + targetStep + '-section').removeClass('to-do');
            $('.step-' + targetStep + '-section').removeClass('done');
            $('.step-' + targetStep + '-section').addClass('current');

            //remove current class from all mudule nav steps
            $('.module-steps li').removeClass('current');

            //change module nav class of target step
            $('.module-step-' + targetStep).addClass('current');

            //reset previousStep
            previousStep = targetStep;
        }

        // If the quotes stage has been reached and you go to a previous stepshow the quotes button shows
        if ($('.quotes-button').hasClass('current')) {
            $('.quotes-button').addClass('active');

            // set var to hook the subsequent actions so that they always go to quotes once this stage has been reached
            quotesReached = 1;

            // show view quotes button on options screen
            $('.k-button.cta.centered').removeClass('displayNone');

            // show quote tools
            $('.quote-tools').addClass('show');

            // show make offer tour
            $('.offer-tour').addClass('show');

        } else {
            // hide quote tools
            $('.quote-tools').removeClass('show');

            // hide make offer tour
            $('.offer-tour').removeClass('show');

        }

        // If multiple lcl loads control when grand totals show

        if (manyLCL == 1 && targetStep == 6) {

            if ($('.lcl-totals').hasClass('show')) {
                //do nothing
            } else {

                $('.lcl-totals').addClass('show');
            }

        } else {

            $('.lcl-totals').removeClass('show');

        }

    } //moveSection - END




    ////////////////////////////////////////////////////////////////
    //                        miscs                    ////
    ////////////////////////////////////////////////////////////////


    // Save bookmark
    $('.action-add-bookmark').click(function(e) {
        //show action-callout
        $('.callout').addClass('show');
        //put focus on field
        $('#bookmark-name').focus();
    });

    //  Save bookmark success notification
    $('.action-save-bookmark').click(function(e) {
        //show action-callout
        $('.callout').removeClass('show');
        //show save notification
        $('.k-notify').addClass('show');
        document.getElementById('k-notify-holder').innerHTML = '<p class="centered">Your bookmark has been saved to your <a href="dash.html">Dashboard</a>.</p>';
        //hide notification
        t = function() {
            $('.k-notify').removeClass('show')
        }, setTimeout(t, 2888)
    });

    // Close action step
    $('.action-close-action-callout').click(function(e) {
        //show action-callout
        $('.action-callout').removeClass('show');
    });

    // Close offer tour
    $('.action_closeTour').click(function(e) {
        //hide action-callout
        $('.offer-tour').removeClass('show');
    });

    ////////////
    //MODALS
    ////////////


    //restart quote - close are-you-sure modal	
    $('.action-restart-quote').click(function(e) {

        // close are you sure modal
        $('.k-modal-bg').removeClass('k-modal-open');
        $('.k-modal.are-you-sure').removeClass('k-modal-open');

        // show no quote result state
        $('.no-results').removeClass('displayNone');
        $('.results-holder').addClass('displayNone');

        e.preventDefault();

        // show no quote results message in module nav item
        document.getElementById('results-button').innerHTML = '<h2 class="icon icon_quotes">Quotes<strong>(0)</strong></h2><span class="no-results-message">Try selecting a different <strong>From</strong>, <strong>To</strong> or <strong>Pick Up</strong> date.</span>';

    });

    // open alternate locations modal  
    $('.action-showAlternateLocations').click(function(e) {
        $('.k-modal-bg').removeClass('dark');
        $('.k-modal-bg').addClass('k-modal-open');
        $('.k-modal.alternate-location').addClass('k-modal-open');

        //show map
        $('.map-holder').addClass('show-map');

    });

    // close alternate locations modal	
    $('.action-closeAlternateLocations').click(function(e) {
        $('.k-modal-bg').removeClass('k-modal-open');
        $('.k-modal.alternate-location').removeClass('k-modal-open');

        //close map
        $('.map-holder').removeClass('show-map');

        t = function() {
            // put focus on input	
            $('#from').focus();
        }, setTimeout(t, 388)
    });

    <!-- choose alternate locations modal  -->	
    $('.map-locations li a').click(function(e) {
        $('.k-modal-bg').removeClass('k-modal-open');
        $('.k-modal.alternate-location').removeClass('k-modal-open');

        //close map
        $('.map-holder').removeClass('show-map');

        //go to from section - duplicate of action-gotToQuoteSection-3 with delay
        t = function() {
            // put focus on input	
            $('#to').focus();
            //show module-nav step
            $('.module-step-2').addClass('active');
            targetStep = 3;
            moveSection();
            // scroll to active if overflowing
            if ($(window).width() > 945) {
                scrollToLatest();
            } else {
                scrollToLatestMobile();
            }
            $('.focus-quote .search-holder ').removeClass('show-results');
        }, setTimeout(t, 988)

    });

    ////////////////////////////////////////////////////////////////
    //                         QUOTES result                    ////
    ////////////////////////////////////////////////////////////////

    // Show slected buttons
    $('.big-button').click(function(e) {
        $(this).closest('div').children('.big-button').removeClass('selected');
        $(this).addClass('selected');
    });

    // Show quote breakdown
    $('.action-showBreakdown').click(function(e) {
        $(this).closest('.quote-module').addClass('show-breakdown');
    });

    // Show quote breakdown
    $('.action-closeBreakdown').click(function(e) {
        $(this).closest('.quote-module').removeClass('show-breakdown');
    });

    //  Make offer
    $('.action-make-offer').click(function(e) {
        $('.btn-make-offer').toggleClass('selected');
        $('.offer-panel').toggleClass('show');
		  //hide action-callout
        $('.offer-tour').removeClass('show');
    });

    //  Offer made
    $('.action-offer-made').click(function(e) {
        $('.btn-make-offer').removeClass('selected');
        $('.offer-panel').removeClass('show');

        //show save notification
        $('.k-notify').addClass('show');
        document.getElementById('k-notify-holder').innerHTML = '<p class="centered">Thank you. We will be in touch shortly.</p>';
        //hide notification
        t = function() {
            $('.k-notify').removeClass('show')
        }, setTimeout(t, 2888)
    });

    //  Add lcl load
    $('.action-add-load').click(function(e) {
        $('.load-2').addClass('show');
        $('.lcl-totals').addClass('show');
        $('.lcl-module').addClass('multiple');
        manyLCL = 1;
    });

    //  Add lcl load
    $('.action-remove-load').click(function(e) {
        $('.load-2').removeClass('show');
        $('.lcl-totals').removeClass('show');
        $('.lcl-module').removeClass('multiple');
    });

    //  book
    $('.action-book').click(function(e) {
        $('.module-nav').addClass('expand');
        $('.quote-tools').removeClass(' show');
        t = function() {
            window.location.href = 'booking.html';

        }, setTimeout(t, 1000)
    });




    ////////////////////////////
    // module nav actions -->	
    ////////////////////////////

    // NEED TO MAKE A FUNCTION FOR THIS
    //  When module-step is clicked co to the corresponding section

    // Step 1 clicked
    $('.module-step-1').click(function(e) {
        targetStep = 1;
        moveSection();

        // put focus on input	
        //$('#from').focus();
    });

    // Step 2 clicked
    $('.module-step-2').click(function(e) {
        targetStep = 2;
        moveSection();
    });

    // Step 3 clicked
    $('.module-step-3').click(function(e) {
        targetStep = 3;
        moveSection();
    });

    // Step 4 clicked
    $('.module-step-4').click(function(e) {
        targetStep = 4;
        moveSection();
    });

    // Step 5 clicked
    $('.module-step-5').click(function(e) {
        targetStep = 5;
        moveSection();

    });

    // Step 6 clicked
    $('.module-step-6').click(function(e) {
        targetStep = 6;
        moveSection();

    });


    // Step 7 clicked
    $('.module-step-7').click(function(e) {
        targetStep = 7;
        moveSection();
    });

    // Step 8 clicked
    $('.module-step-8').click(function(e) {
        targetStep = 8;
        moveSection();
    });

    // Step 9 clicked
    $('.module-step-9').click(function(e) {
        targetStep = 9;
        moveSection();
    });

    // Step 10 clicked
    $('.module-step-10').click(function(e) {
        targetStep = 10;
        moveSection();
    });

    // Step 11 clicked
    $('.module-step-11').click(function(e) {
        targetStep = 11;
        moveSection();
    });

    // Step 12 clicked
    $('.module-step-12').click(function(e) {
        targetStep = 12;
        moveSection();
    });


    //////////////////////
    // section nav actions 
    //////////////////////

    $('.action-retrieve-quote').click(function(e) {

        //  make shipping type the first step

        $('.import-export').removeClass('current');
        $('.import-export').addClass('to-do');

        //$('.which-country').removeClass('current');
        //$('.which-country').addClass('to-do');

        $('.step-1-section').removeClass('current');
        $('.step-1-section').addClass('to-do');


        $('.retrieve-quote').removeClass('done');
        $('.retrieve-quote').addClass('current');

        $('.focus-panel-bg').addClass('panel-open');
        $('.focus-quote').addClass('panel-open');

        targetStep = 1;

        // put focus on input	
        $('#quote-code').focus();

    });


    // retireve-quote step - not in main sequence
    $('.action-set-retireve-quote').click(function(e) {

        // remove this step
        $('.retrieve-quote').removeClass('current');
        $('.retrieve-quote').addClass('done');

        //show module-nav - ONLY for start of journey
        $('.module-nav').addClass('show-module-nav');

        $('.module-nav').addClass('enabled');
        e.preventDefault();


        //show module-nav step and lock steps that cannot be edited
        $('.module-step-1').addClass('active') <!--.addClass('locked')-->;
        $('.module-step-2').addClass('active').addClass('locked');
        $('.module-step-3').addClass('active').addClass('locked');
        $('.module-step-4').addClass('active');
        $('.module-step-5').addClass('active'); <!--.addClass('locked')-->;
        $('.module-step-6').addClass('active');
        $('.module-step-7').addClass('active');
        $('.module-step-8').addClass('active');

        $('.module-step-8').addClass('current');




        //show module-nav step - DELAY ONLY for start of journey so it appears after module nav slides in
        t = function() {

            // as menu is in all steps must have restricted width
            $('.step-section.full-width').removeClass('full-width');

        }, setTimeout(t, 188)


        quotesReached = 1;
        targetStep = 4;

        moveSection();

        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
    });


    // import-export step - not in main sequence
    $('.action-set-import-export').click(function(e) {

        // remove this step
        $('.import-export').removeClass('current');
        $('.import-export').addClass('done');

        // show the chipping type step
        $('.step-1-section').removeClass('to-do');
        $('.step-1-section').addClass('current');
    });


    // country selector step - not in main sequence
    $('.action-set-uk').click(function(e) {

        // remove this step
        $('.which-country').removeClass('current');
        $('.which-country').addClass('done');

        // show the chipping type step
        $('.step-1-section').removeClass('to-do');
        $('.step-1-section').addClass('current');
    });

    // country selector step - not in main sequence
    $('.action-set-usa').click(function(e) {

        // remove this step
        $('.which-country').removeClass('current');
        $('.which-country').addClass('done');

        // show the chipping type step
        $('.step-1-section').removeClass('to-do');
        $('.step-1-section').addClass('current');

        // show the chipping type step
        $('.btn-pallets').addClass('disabled');

    });


    $('.action-setFCL').click(function(e) {
        //show module-nav - ONLY for start of journey
        $('.module-nav').addClass('show-module-nav');

        //delay overflow check
        t = function() {
            $('.module-nav').addClass('enabled');
            e.preventDefault();
        }, setTimeout(t, 3000)

        //show module-nav step - DELAY ONLY for start of journey so it appears after module nav slides in
        t = function() {
            $('.module-step-1').addClass('active');
            // as menu is in all steps must have restricted width
            $('.step-section.full-width').removeClass('full-width');
            $('#from').focus();
        }, setTimeout(t, 288)

        targetStep = 2;
        moveSection();

        lcl = 0;

        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
    });


    $('.action-setLCL').click(function(e) {
        //show module-nav - ONLY for start of journey
        $('.module-nav').addClass('show-module-nav');

        //delay overflow check
        t = function() {
            $('.module-nav').addClass('enabled');
            e.preventDefault();
        }, setTimeout(t, 3000)


        //show module-nav step - DELAY ONLY for start of journey so it appears after module nav slides in
        t = function() {
            $('.module-step-1').addClass('active');
            // as menu is in all steps must have restricted width
            $('.step-section.full-width').removeClass('full-width');
            $('#from').focus();
        }, setTimeout(t, 188)

        // If the quotes stage has been reached and you switch to LCL from FCL
        if (quotesReached == 1) {
            <!-- are-you-sure modal-->	
            $('.k-modal-bg').addClass('k-modal-open');
            $('.k-modal.are-you-sure').addClass('k-modal-open');

        } else {
            targetStep = 2;
            moveSection();

            lcl = 1;
        }

        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
    });


    $('.action-gotToQuoteSection-3').click(function(e) {
        //show module-nav step
        $('.module-step-2').addClass('active');

        // If the quotes stage has been reached go to quotes
        if (quotesReached == 1) {
            //change class of where we are
            $('.step-' + targetStep + '-section').removeClass('current');
            $('.step-' + targetStep + '-section').addClass('done');
            targetStep = 10;
            moveSection();
        } else {
            targetStep = 3;
            moveSection();
        }
        t = function() {
            // put focus on input	
            $('#to').focus();
        }, setTimeout(t, 188)

        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
        $('.focus-quote .search-holder ').removeClass('show-results');

    });


    $('.action-gotToQuoteSection-4').click(function(e) {
        //show module-nav step
        $('.module-step-3').addClass('active');

        // If the quotes stage has been reached go to quotes
        if (quotesReached == 1) {
            //change class of where we are
            $('.step-' + targetStep + '-section').removeClass('current');
            $('.step-' + targetStep + '-section').addClass('done');
            targetStep = 10;
            moveSection();
        } else {
            targetStep = 4;
            moveSection();
        }
        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
    });


    $('.ui-datepicker-calendar a').click(function(e) {
        //show module-nav step
        $('.module-step-4').addClass('active');

        // If the quotes stage has been reached go to quotes
        if (quotesReached == 1) {
            //change class of where we are
            $('.step-' + targetStep + '-section').removeClass('current');
            $('.step-' + targetStep + '-section').addClass('done');
            targetStep = 8;
            moveSection();
        } else {
            targetStep = 5;
            moveSection();
        }
        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
    });


    $('.action-gotToQuoteSection-loads').click(function(e) {
        $('.module-step-5').addClass('active')

        if (lcl == 1) {

            targetStep = 6;
            moveSection();
        } else {

            if (lcl == 0) {

                targetStep = 7;
                moveSection();
            }
        }

        // If the quotes stage has been reached go to quotes
        if (quotesReached == 1) {
            //change class of where we are
            $('.step-' + targetStep + '-section').removeClass('current');
            $('.step-' + targetStep + '-section').addClass('done');
            targetStep = 10;
            moveSection();
        } else {
            targetStep = 7;
            moveSection();
        }
        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
    });


    $('.action-gotToQuoteSection-7').click(function(e) {
        //show module-nav step - show step 5 coz 6 is for lcl details so we skip for FCL route
        $('.module-step-5').addClass('active');


        // If the quotes stage has been reached go to quotes
        if (quotesReached == 1) {
            //change class of where we are
            $('.step-' + targetStep + '-section').removeClass('current');
            $('.step-' + targetStep + '-section').addClass('done');
            targetStep = 10;
            moveSection();
        } else if (lcl == 1) {
            //change class of where we are
            $('.step-' + targetStep + '-section').removeClass('current');
            $('.step-' + targetStep + '-section').addClass('done');
            targetStep = 6;
            moveSection();

            $('.module-step-6').addClass('active');
        } else {
            targetStep = 7;
            moveSection();
        }

        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
    });


    $('.action-gotToQuoteSection-8').click(function(e) {
        //show module-nav step
        $('.module-step-7').addClass('active');


        // If the quotes stage has been reached go to quotes
        if (quotesReached == 1) {
            //change class of where we are
            $('.step-' + targetStep + '-section').removeClass('current');
            $('.step-' + targetStep + '-section').addClass('done');
            targetStep = 10;
            moveSection();
        } else {
            targetStep = 8;
            moveSection();
        }

        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
    });


    $('.action-gotToQuoteSection-9').click(function(e) {
        //show module-nav step
        $('.module-step-8').addClass('active');

        // If the quotes stage has been reached go to quotes
        if (quotesReached == 1) {
            //change class of where we are
            $('.step-' + targetStep + '-section').removeClass('current');
            $('.step-' + targetStep + '-section').addClass('done');
            targetStep = 10;
            moveSection();
        } else {
            targetStep = 9;
            moveSection();
        }

        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
    });


    $('.action-gotToQuoteSection-quotes').click(function(e) {
        //show module-nav step
        if (lcl == 0) {
            $('.module-step-8').addClass('active');
        }
        //show quotes step. Need to put this in a function that says if tsrgetStep7 has been reached show this
        // $('.module-step-7').addClass('active');

        // If the quotes stage has been reached go to quotes
        if (quotesReached == 1) {
            //change class of where we are
            $('.step-' + targetStep + '-section').removeClass('current');
            $('.step-' + targetStep + '-section').addClass('done');
            targetStep = 8;
            moveSection();
        } else {
            targetStep = 8;
            moveSection();
        }

        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
        // remove quote results loading animation after a delay
        $('.quote-results .results-holder').addClass('k-loading');
        t = function() {
            $('.quote-results .results-holder.k-loading').removeClass('k-loading');
        }, setTimeout(t, 1088)
    });


    $('.action-gotToQuoteSection-11').click(function(e) {
        //show module-nav step
        $('.module-step-11').addClass('active');
        //show quotes step. Need to put this in a function that says if tsrgetStep7 has been reached show this
        // $('.module-step-7').addClass('active');
        targetStep = 10;
        moveSection();
        // scroll to active if overflowing
        if ($(window).width() > 945) {
            scrollToLatest();
        } else {
            scrollToLatestMobile();
        }
    });


    ////////////////////////////////////////////////////////////////
    // morphing - set size and postions of panel start states  ////
    ////////////////////////////////////////////////////////////////


    // Function for finding size of button and setting that size and position to the opening focus panel
    function fromMorph() {
        var focusPositionFrom = $("#btn-quotes").offset();
        var focusHeightFrom = $("#btn-quotes").height();
        var focusWidthFrom = $("#btn-quotes").width();
        $('.focus-panel-bg').css(focusPositionFrom);
        $('.focus-panel-bg').height(focusHeightFrom + 23);
        $('.focus-panel-bg').width(focusWidthFrom + 44);
    }
    fromMorph();

    // window resizing
    $(window).resize(function() {
        fromMorph();
    });


    ////////////////////////
    // Other Handlers  ////
    //////////////////////
    $('.action-start-quote').click(function(e) {
        //  show main-nav-bar 

        $('.focus-panel-bg').addClass('panel-open');
        $('.focus-quote').addClass('panel-open');

        targetStep = 1;
    });


    $('.action-open-dash').click(function(e) {
        //  show main-nav-bar 
        $('.focus-quote').removeClass('panel-open');
        t = function() {
            $('.focus-panel-bg').removeClass('panel-open');
            e.preventDefault();
        }, setTimeout(t, 588)

        $('.step-1-section').addClass('to-do');
        $('.step-1-section').removeClass('current');

    });



    // Search - show results when more than 3 chars typed in from field
    function showFromResults() {
        var Fromvalue = $('#from').val();
        if (Fromvalue.length == 0) {
            $('.from-search').removeClass('show-results');
            $('.k-loading').addClass('hidden');
            $('.no-search-results').addClass('hidden');
        }
        if (Fromvalue.length == 1) {
            $('.from-search').removeClass('show-results');
            $('.k-loading').removeClass('hidden');
            $('.no-search-results').addClass('hidden');
        }
        if (Fromvalue.length == 2) {
            $('.from-search').addClass('show-results');
            $('.k-loading').addClass('hidden');
            $('.no-search-results').addClass('hidden');

            //} else {
            //  $('.from-search').removeClass('show-results');
        }
        if (Fromvalue.length >= 3) {
            $('.from-search').removeClass('show-results');
            $('.k-loading').addClass('hidden');
            $('.no-search-results').removeClass('hidden');
        }


    }
    $(function() {
        $('#from').keyup(showFromResults);
        showFromResults();
    });

    // Search - show results when more than 3 chars typed in to field
    function showToResults() {
        var Tovalue = $('#to').val();
        if (Tovalue.length >= 3) {
            $('.to-search').addClass('show-results');
        } else {
            $('.to-search').removeClass('show-results');
        }
    }
    $(function() {
        $('#to').keyup(showToResults);
        showToResults();
    });




    // Quote container selector
    $('.action_tab20').click(function(e) {
        //  show properties
        $('.container-selector').addClass('open');
        $('.container-selector .big-button ').removeClass('active-tab');
        $('.c-20').addClass('active-tab');

        //remove added contaers message
        $('.container-complete').removeClass('show');
    });



    $('.action_tab40').click(function(e) {
        //  show properties
        $('.container-selector').addClass('open');
        $('.container-selector .big-button ').removeClass('active-tab');
        $('.c-40').addClass('active-tab');

        //remove added contaers message
        $('.container-complete').removeClass('show');
    });


    $('.action_tab40hc').click(function(e) {
        //  show properties
        $('.container-selector').addClass('open');
        $('.container-selector .big-button ').removeClass('active-tab');
        $('.c-40hc').addClass('active-tab');

        //remove added contaers message
        $('.container-complete').removeClass('show');

    });

    // container selector quantity adder	
    $('.action_addContainerNumber').click(function(e) {
        e.preventDefault();
        var input = document.getElementById('numberInput');
        input.value = parseInt(input.value) + 1;

    });

    $('.action_removeContainerNumber').click(function(e) {
        e.preventDefault();
        var input = document.getElementById('numberInput');
        if (input.value >= 1) {
            input.value = parseInt(input.value) - 1;
        }
    });

    // Add first container
    $('.action-addContainer').click(function(e) {

        $('#hook-c1').addClass('show');

        $('.action-gotToQuoteSection-quotes').removeClass('disabled');
        // show added containers
        $('.module-step-7').addClass('active');


    });

    // remove more container 
    $('.action-removeContainer').click(function(e) {
        $('#hook-c1').removeClass('show');
        $('.action-gotToQuoteSection-quotes').addClass('disabled');

    });


});