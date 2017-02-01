$(document).ready(function() {
   <!-- emphathize save button when there's something to save -->
	$('#file-description-1').focus(function(e) {
		$('.filesTable .btn-save').removeClass('btn_secondary');
	});
	
	<!-- File decrypting -->
	$('.secure-file').click(function(e) {
		<!-- show decrytping message -->
		$(this).closest('.file-decrypter').addClass('decrypting');
		t = function() {
			<!-- after delay + actual loading time show open file link -->
			$('.file-decrypter.decrypting').addClass('decrypted');
			$('.file-decrypter.decrypting').removeClass('decrypting');
			e.preventDefault();
		}, setTimeout(t, 1888)
	
		<!-- resets state of doc link -->
		$('.file-decrypter.decrypted').removeClass('decrypted');
	});
});