(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img-2').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/image-1008.png' : 'images/image-672.png') : 'images/image-336.png');
var a='data-lazy'; if($('.gallery-2 .slide0').hasAttr('src')) { a='src'; } $('.gallery-2 .slide0').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/new-1500-2.png' : 'images/new-1000-2.png') : 'images/new-500-2.png');
var a='data-lazy'; if($('.gallery-2 .slide1').hasAttr('src')) { a='src'; } $('.gallery-2 .slide1').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/zhan-wei-fu-1500-2.jpg' : 'images/zhan-wei-fu-1000-2.jpg') : 'images/zhan-wei-fu-500-2.jpg');};
$(window).resize(r);
r();
$('.gallery-2 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});
});