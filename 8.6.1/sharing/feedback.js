$('#form').submit(function () {
	if (document.form.name.value == '' || document.form.msg.value == '') {
		valid = false;
		return valid;
	}
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function () {
		//alert("Сообщене успешно отправлено")
		$("#success").modal('show')
		$(this).find('input').val('');
		$('#form').trigger('reset')
	});
	return false;
});
