 $(document).ready(function(){


$('button').on('click', function () {
	authEl = $('#a')
	var myAuth = authEl.val();
	var myQuote = $('#q').val();
	var fQuoteAuth = $("<h4>Author: </h4>");
	var fQuoteQ = $("<h4>Quote: </h4>");
	
	if ((myAuth.length > 0) && (myQuote.length > 0)) {
		fQuoteAuth.append(myAuth);
		fQuoteQ.append(myQuote);
		$('#afterHere').prepend(fQuoteAuth, fQuoteQ);
		$("#a").val("");
		$("#q").val("");
	} else {
		alert("Please enter information in both fields.")
	};


});


});

