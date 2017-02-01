$(document).ready(function() {

    <!-- open BOL -->	
    $('.action_openBOL').click(function(e) {
        $('.ladding_holder').addClass('animate-in');
        $('.ladding_holder').removeClass('animate-out');
    });

    <!-- approve BOL -->	
    $('.action_approveBOL').click(function(e) {
        $('.ladding_holder').removeClass('animate-in');
        $('.ladding_holder').addClass('animate-out');
        $(this).closest('.bol-container').addClass('bol-approved');
    });

    <!-- approve BOL if it there a more to approve for this order -->	
    $('.action_approveBOLmoreLeft').click(function(e) {
        $(this).closest('.bol-container').addClass('bol-approved');

    });


    $('.bol-editable.add-text').blur(function(e) {
        if ($(this).text() == '') {
            $(this).removeClass('bol-edited');
        }
        //show save notification
        $('.k-notify').addClass('show');
        document.getElementById('k-notify-holder').innerHTML = '<p class="centered">The bill of Ladding has been saved.</p>';
        //hide notification
        t = function() {
            $('.k-notify').removeClass('show')
        }, setTimeout(t, 2888)
    });

    $('.action_copiedMessage').click(function(e) {
        //show save notification
        $('.k-notify').addClass('show');
        document.getElementById('k-notify-holder').innerHTML = '<p class="centered">The link has been copied to your clipboard.</p>';
        //hide notification
        t = function() {
            $('.k-notify').removeClass('show');
        }, setTimeout(t, 2888)
    });

    $('.action_sharedMessage').click(function(e) {
        //show save notification
        $('.k-notify').addClass('show');
        document.getElementById('k-notify-holder').innerHTML = '<p class="centered">The link has been emailed.</p>';
        //hide notification
        t = function() {
            $('.k-notify').removeClass('show');
        }, setTimeout(t, 2888)
    });




    <!-- open share modal  -->	
    $('.btn-share').click(function(e) {
        $('.bclever-modal-bg').addClass('bclever-modal-open');
        $('.share_modal').addClass('bclever-modal-open');

    });

    <!-- demo signed in/ signed up demo - close modal	-->	
    $('.action_login').click(function(e) {
        $('.bclever-modal-bg').removeClass('bclever-modal-open');
        $('.bclever-modal').removeClass('bclever-modal-open');


    });

});