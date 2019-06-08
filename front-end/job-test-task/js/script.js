$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
		  $('.navbar-nav.items-top').css('background-color', 'orange');
		  $('.navbar-nav.items-top').css('border-radius', '5px');
		  $('.navbar-toggler-icon').css('background-color', 'orange');
		  
       } else {
          $('.navbar-nav.items-top').css('background-color', 'transparent');
		   $('.navbar-toggler-icon').css('background-color', 'transparent');
       }
   });
});