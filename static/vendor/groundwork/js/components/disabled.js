(function() {
  $(function() {
    $('.disabled').each(function() {
      $(this).attr('tabindex', '-1');
      $(this).find('a').attr('tabindex', '-1');
      return $(this).find('input, select, textarea').addClass('disabled').attr('tabindex', '-1').attr('readonly', 'readyonly');
    });
    $('body').on('click', '.disabled, .disabled *', function(e) {
      e.preventDefault();
      return false;
    });
  });

}).call(this);
