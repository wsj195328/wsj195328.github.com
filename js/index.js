(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/image-1008.png' : 'images/image-672.png') : 'images/image-336.png');
var a='data-lazy'; if($('.gallery .slide0').hasAttr('src')) { a='src'; } $('.gallery .slide0').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/1-1500.png' : 'images/1-1000.png') : 'images/1-500.png');
var a='data-lazy'; if($('.gallery .slide1').hasAttr('src')) { a='src'; } $('.gallery .slide1').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/2-1500.png' : 'images/2-1000.png') : 'images/2-500.png');
var a='data-lazy'; if($('.gallery .slide2').hasAttr('src')) { a='src'; } $('.gallery .slide2').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/3-1500.png' : 'images/3-1000.png') : 'images/3-500.png');
var a='data-lazy'; if($('.gallery .slide3').hasAttr('src')) { a='src'; } $('.gallery .slide3').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/4-1500.png' : 'images/4-1000.png') : 'images/4-500.png');
var a='data-lazy'; if($('.gallery .slide4').hasAttr('src')) { a='src'; } $('.gallery .slide4').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/5-1500.png' : 'images/5-1000.png') : 'images/5-500.png');};
$(window).resize(r);
r();
$('.gallery .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});
});