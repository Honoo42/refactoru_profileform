$(document).on('ready', function() {
	$(".secrets").hide();
	$('.buttout').click('toggle',function () {
		console.log("Form Button clicked");
		$(".secrets").show();
		$(".buttout").hide();
		$(".buttin").show();

		});
	$(".buttin").hide()
	$('.buttin').click(function () {
		console.log("Form Button pressed");
		$('.secrets').hide();
		$('.buttout').show();
		$('.buttin').hide();
	});
	// $('.buttout').click(function () {
	// 	console.log("Form Button clicked");
	// 	$(".secrets").hide();
	// 	$(".inputfield").show();
		
	// });	 
	$(".subbut").click(function() {
		console.log("Submit Button clicked")
		$('div > h4').text($('inputfield1').val());
		return false;

	});


   $("fullName").focus(function(){
        var fullname = $("fName").val() + $("lName").val();
        $("fullName").val(fullname);
});


});	  