$(window).on("scroll",function(){
var scrolltop=$(window).scrollTop();
if(scrolltop >= 80){
    $('body').addClass('fixed-header')
}
else {
    $('body').removeClass('fixed-header')
  
}
});
$(document).ready(function(){
    new Typed('#type-it', {
        strings: ['ALWALAA ACADMY','ALWALAA ACADMY'],
        typeSpeed: 100,
        loop:true
    });
});