var sandboxName = $('.multiforce .pageMsg .subMsg').eq(1).text();

if (typeof sandboxName === 'string' && sandboxName != '') {
	var originalTitle = $('title').text();
	var newTitle = '[' + sandboxName + '] ' + originalTitle;
	$('title').text(newTitle);
}