$('.pure-g .js-image-colmn').each(function() {
        $(this).parent().prepend($(this));
    });

$('.leftarrow').click(function() {
	var e = $("div.insider .slideme:nth-child(3)");
	var firstme = $("div.insider .slideme:nth-child(1)");
	// move up:
	firstme.insertAfter(e);
	
	console.log("shift left");
});
$('.rightarrow').click(function() {
	var e = $("div.insider .slideme:nth-child(1)");
	var firstme = $("div.insider .slideme:nth-child(3)");
	// move up:
	firstme.insertBefore(e);
	
	console.log("shift left");
});