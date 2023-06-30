if (obj.hasOwnProperty('s2_name')) {
	console.log("s2_name")
	$('#stock_cards').append($('<div class="col"><div class="card"><div class="card-body"><span id="stock2"><h3>' + obj.s2_name + '</h3>'));
	$('#stock2').append($('<p>Stock Catagory: ' + obj.s2_catagory + '</p>'));
	$('#stock2').append($('<p>4 Color Match: ' + obj.s2_4c_pantone_match + '</p>'));
	$('#stock2').append($('<p>Needed Colors: ' + obj.s2_extra_colors + '</p>'));
	$('#stock2').append($('<p>Delta: ' + obj.s2_delta + '</p></div></div></div>'));

}