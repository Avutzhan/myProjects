$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  $('.header-bg').css('top', -(scrollTop / 3) + 'px');
});

/* можно умножать и делить чтобы контролировать скорость прокрутки */