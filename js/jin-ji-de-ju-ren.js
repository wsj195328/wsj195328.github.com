(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
var a='data-lazy'; if($('.gallery .slide0').hasAttr('src')) { a='src'; } $('.gallery .slide0').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/20131227142727_chshi-2880.jpg' : 'images/20131227142727_chshi-1920.jpg') : 'images/20131227142727_chshi-960.jpg');
var a='data-lazy'; if($('.gallery .slide1').hasAttr('src')) { a='src'; } $('.gallery .slide1').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/abof3npucme2o-2880.jpg' : 'images/abof3npucme2o-1920.jpg') : 'images/abof3npucme2o-960.jpg');};
$(window).resize(r);
r();
$('.gallery .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});
});