var $img = $('.sun');
var $win = $(window);

$win.on('scroll', function () {
    var top = $win.scrollTop() / 3;
    $img.css('transform', 'rotate(' + top + 'deg)');
    $img.css('opacity', top/100);
});
