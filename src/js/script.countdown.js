$('#clock').countdown('2015/08/16', function(event) {
   var $this = $(this).html(event.strftime(''
     + '<span>%d</span> дней '
     + '<span>%H</span> часов '
     + '<span>%M</span> мин '
     + '<span>%S</span> сек'));
 });