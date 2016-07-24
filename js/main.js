var main = function() {

	$('#msg-btn').click(function() {
  		var re = /\S+@\S+\.\S+/;
    	
  		if ($('#name').val().length === 0) {
	      	alert('Please enter your name');
	      	return false;
	    }

    	if (re.test($('#email').val()) === false) {
    		alert('wrong type of mail');
    		return false;
    	}
    
	    if ($('#subject').val().length === 0) {
	      	alert('Please fill the subject');
	      	return false;
	    }

	    if ($('#message').val().length === 0) {
	      	alert('Please fill the message');
	    }

	    return false;
  	});
};

$(document).ready(main);