$('#form').submit(function () {
	$.ajax({
		type: "POST",
		url: "../php/feedback.php",
		data: $(this).serialize()
	}).done(function () {
		//alert("Сообщене успешно отправлено")
		$("#success").modal('show')
		$(this).find('input').val('');
		$('#form').trigger('reset')
	});
	return false;
});
