function startParallax(){$(".current > #scene").parallax({calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:3,scalarY:3,originX:.5,originY:.5})}function fadeInStart(){currentCheck(),startParallax();var e=new TimelineLite;e.to(currentSlide.foreground.el,currentSlide.foreground.fadeSpeed,{opacity:1}).to(currentSlide.middleforeground.el,currentSlide.middleforeground.fadeSpeed,{opacity:1},"-=1").to(currentSlide.middleground.el,currentSlide.middleground.fadeSpeed,{opacity:1},"-=0.75").to(currentSlide.middlebackground.el,currentSlide.middlebackground.fadeSpeed,{opacity:1},"-=0.5").to(currentSlide.background.el,currentSlide.background.fadeSpeed,{opacity:1},"-=0.25").to(currentSlide.text.el,currentSlide.text.fadeSpeed,{opacity:1,scale:1,ease:Back.easeOut},"-=0")}function currentCheck(){currentSlide={el:$(".current"),renderPrevious:function(){console.log("previous rendered")},renderNext:function(){console.log("next rendered")},foreground:{el:$(".current > ul > li.foreground"),"class":"layer foreground",dataDepth:"1.00",fadeSpeed:1.5},middleforeground:{el:$(".current > ul > li.middleforeground"),"class":"layer middleforeground",dataDepth:"0.80",fadeSpeed:1.25},middleground:{el:$(".current > ul > li.middleground"),"class":"layer middleground",dataDepth:"0.60",fadeSpeed:1},middlebackground:{el:$(".current > ul > li.middlebackground"),"class":"layer middlebackground",dataDepth:"0.30",fadeSpeed:.75},background:{el:$(".current > ul > li.background"),"class":"layer background",dataDepth:"0.00",fadeSpeed:.5},text:{el:$(".current .text"),fadeSpeed:1}}}function fadeOut(e){var d=new TimelineLite;d.to(currentSlide.foreground.el,currentSlide.foreground.fadeSpeed,{opacity:0}).to(currentSlide.text.el,currentSlide.text.fadeSpeed,{opacity:0},"-=1.25").to(currentSlide.middleforeground.el,currentSlide.middleforeground.fadeSpeed,{opacity:0},"-=1").to(currentSlide.middleground.el,currentSlide.middleground.fadeSpeed,{opacity:0},"-=0.75").to(currentSlide.middlebackground.el,currentSlide.middlebackground.fadeSpeed,{opacity:0},"-=0.5").to(currentSlide.background.el,currentSlide.background.fadeSpeed,{opacity:0},"-=0.25").to(currentSlide.el,.1,{className:"-=current"}).to(e,.1,{className:"+=current"}),TweenMax.delayedCall(3,fadeInNext)}function fadeInNext(){currentCheck();var e=new TimelineLite;e.to(currentSlide.foreground.el,currentSlide.foreground.fadeSpeed,{opacity:1}).to(currentSlide.middleforeground.el,currentSlide.middleforeground.fadeSpeed,{opacity:1},"-=1").to(currentSlide.middleground.el,currentSlide.middleground.fadeSpeed,{opacity:1},"-=0.75").to(currentSlide.middlebackground.el,currentSlide.middlebackground.fadeSpeed,{opacity:1},"-=0.5").to(currentSlide.background.el,currentSlide.background.fadeSpeed,{opacity:1},"-=0.25").to(currentSlide.text.el,currentSlide.text.fadeSpeed,{opacity:1,scale:1,ease:Back.easeOut},"-=0"),TweenMax.delayedCall(.1,startParallax)}var currentSlide={},nextSlide,background=$(".background"),middlebg=$(".middlebackground"),middleground=$(".middleground"),middlefg=$(".middleforeground"),foreground=$(".foreground");$(document).ready(function(){fadeInStart()}),$(".next-slide").on("click",function(){nextSlide=$(".current").next(),fadeOut(nextSlide)}),$(".previous-slide").on("click",function(){nextSlide=$(".current").prev(),fadeOut(nextSlide)});


var clicked = 0;

$('.dog-ear').on('click', function() {
    $(this).toggleClass('flipped');
});

$('a.push').on('click', function() {
    
    if (clicked < 9) {
        TweenLite.to('.witch, .gretel', 1, {
            left: '+=40'
        })
        clicked = clicked + 1;
    } else if (clicked >= 9) {
//        $('.witch.shown').removeClass('shown');
//        $('.witch.burning').addClass('visible');
		return false;
    } else {
        return false;
    }
    
    
        console.log(clicked);
});