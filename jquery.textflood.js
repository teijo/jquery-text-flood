/**
 * jQuery Text Flood
 *
 * Copyright (c) 2013 Teijo Laine
 *
 * Licenced under the MIT licence
 */
;(function($) {
  $.fn.textFlood = function() {
    var THRESHOLD = 4
    return this.each(function() {
      var $container = $(this)
      var height = $container.height()
      var width = $container.width()
      var content = $container.contents()
      var $wrap = $('<span>').append(content)
      $container.append($wrap)
      ;(function f(size, scan) {
        $wrap.css('font-size', size)
        if ($wrap.height() > height || $wrap.width() > width)
          size -= scan
        else
          size += scan
        if (size > 5 && Math.abs(scan) > THRESHOLD)
          f(size, ~~(scan/2))
        else {
          $wrap.replaceWith(content)
          $container.css('font-size', size)
        }
      })(height, height/2)
    })
  }
})(jQuery);
