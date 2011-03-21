$('div.body').append('<div id="foot"><ul></ul></div>');
var link = $('div.body a');
$.each(link, function(index,value){
    $(this).attr('name',index);
    var a = '<a href="'+ value +'">' + value.innerHTML + '</a>';
    var ancor = '<a href="#'+ index +'">' + index + '</a>';
    var span_a = '<span>' + a  + '</span>';
    var span_ancor = '<span>' + ancor  + '</span>';
    $('#foot ul').append('<li>'+ span_a + '&nbsp;&nbsp' + span_ancor  +'</li>');
});