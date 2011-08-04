$(document).ready(function(){
  
  $('body').append('<div id="foot"><ul></ul></div>');
  
  var link = $('body a')/*.find('selector')*/;
  
  $.each(link, function(index,value,number_class, link_class){
    
      /**######### Definition class #####*/
      
      var number_class = 'number';
      var link_class   = 'link';
      var li_class     = 'li'
      var ul_class     = 'ul'
      
      /**##############################*/
      
      $(this).attr('name',index);
      $a_sup = $('<a>');
      $sup = $('<sup>').text(index);
      $a_sup.append($sup).attr('href','#'+'note_' + index);
      $(this).after($a_sup);
      
      var $a = $('<a>').attr('href', value.href).attr('name','note_' + index).text(value.href);      
      var $ancor = $('<a>').attr('href', '#'+index).text(index);
      
      var $span_a = $('<span>').addClass(number_class).append($a);
      var $span_ancor = $('<span>').addClass(link_class).append($ancor);
      
      $('#foot ul').addClass(ul_class).append($('<li>').addClass(li_class).append($span_ancor).append($span_a));
  });  
});
