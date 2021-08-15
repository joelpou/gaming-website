$(window).resize(function() {
  if ($(window).width() < 576) {
     $('#background').removeClass('bg-size-md');
     $('#background').addClass('bg-size-xs');
  }
 else {
    $('#background').removeClass('bg-size-xs');
    $('#background').addClass('bg-size-md');
 }
});
