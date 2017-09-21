import $ from 'jquery'

$.fn.header = function(options) {
  const defaults = {
    // TODO: add default values for options here
  }
  const settings = $.extend(defaults, options)

  // Either process each element in a loop
  return this.each(function() {
    const $this = $(this);
    $this.find('.header-title').css('background-color', 'red');

    const logoSrc = $this.attr('data-logo-src');
    console.log($this.find('.header-logo'));
    $this.find('.header-logo').css({
      backgroundImage: logoSrc
    });
  })
}
