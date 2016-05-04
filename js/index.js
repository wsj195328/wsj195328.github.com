(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/bgirl-1053.jpg' : 'images/bgirl-702.jpg') : 'images/bgirl-351.jpg');};
$(window).resize(r);
r();
var mapOptions = {zoom: 11,center: new google.maps.LatLng(40.6700, -73.9400),mapTypeId: google.maps.MapTypeId.ROADMAP,};var map = new google.maps.Map($('.map').get(0), mapOptions);
});