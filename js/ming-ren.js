(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
var a='data-lazy'; if($('.img-2').hasAttr('src')) { a='src'; } $('.img-2').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/ming-ren-2880.jpg' : 'images/ming-ren-1920.jpg') : 'images/ming-ren-960.jpg');
$('.img-3').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/image-819.png' : 'images/image-546.png') : 'images/image-273.png');};
$(window).resize(r);
r();
$('.anchor-2').mouseenter(function() { $.loadImages((window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/ming-ren-2400.jpg' : 'images/ming-ren-1600.jpg') : 'images/ming-ren-800.jpg', function() { }) });
$('.anchor-2').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/ming-ren-2400.jpg' : 'images/ming-ren-1600.jpg') : 'images/ming-ren-800.jpg'; } } });
$('.img-2').unveil(50);

});