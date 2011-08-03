$(document).ready(function(){
	$('body').append('<div id="foot"><ul></ul></div>');
	var link = $('body a');
	$.each(link, function(index,value){
	    $(this).attr('name',index);
	    $a_sup = $('<a>');
	    $sup = $('<sup>');
	    $sup.text(index);
	    $a_sup.append($sup);
	    $a_sup.attr('href','#'+'note_' + index);
	    $(this).after($a_sup);
	    var a = '<a href="'+ value +'" name="note_'+index+'">' + value.href + '</a>';
	    var ancor = '<a href="#'+ index +'">' + index + '</a>';
	    var span_a = '<span>' + a  + '</span>';
	    var span_ancor = '<span>' + ancor  + '</span>';
	    $('#foot ul').append('<li>'+ span_ancor + '&nbsp;&nbsp<i>' + span_a  +'</i></li>');
	});	
});
