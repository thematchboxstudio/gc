/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}

// as the page loads, call these scripts
jQuery(document).ready(function($) {

    /*
    Responsive jQuery is a tricky thing.
    There's a bunch of different ways to handle
    it, so be sure to research and find the one
    that works for you best.
    */
    
    /* getting viewport width */
    var responsive_viewport = $(window).width();
    
    /* if is below 481px */
    if (responsive_viewport < 481) {

    } /* end smallest screen */
    
    /* if is larger than 481px */
    if (responsive_viewport > 481) {

    } /* end larger than 481px */
    
    /* if is above or equal to 768px */
    if (responsive_viewport >= 768) {
    
        /* load gravatars */
        $('.comment img[data-gravatar]').each(function(){
            $(this).attr('src',$(this).attr('data-gravatar'));
        });
        
    }
    
    /* off the bat large screen actions */
    if (responsive_viewport > 1030) {
        
    }
    
/*
 * Mobile Menu Button Functionality
 */

var showMenu = function() {
    $('body').toggleClass("active-nav");
    $('.nav').toggleClass("active");
    $('.menu-button').toggleClass("active-button");
    $('#container').toggleClass('close-nav');
    var body = document.body,
    html = document.documentElement;

    $('.container-wrap, .container-wrap a, .container-wrap span, .footer, .menu-item a').click(function(){
      if ( $('body').hasClass("active-nav") ) {
       showMenu();
       return false;
            }
});
};


$('.menu-button').click(function(e) {
        showMenu();
        e.preventDefault();

});

/*
 * Animate Logos in once scrolled to certain height
 */

 $(window).scroll(function(){
    var h = $('#content').height();
    var y = $(window).scrollTop();
    if( y > (730) ){
        $(".header-logos-desktop").removeClass("fadeOutUp").addClass("animated fadeInDown shown");
    } else {
        $('.header-logos-desktop').addClass("fadeOutUp").removeClass("fadeInDown shown");
    }
    //if( y > (10) ){
   //   $('.button.scroll-down').addClass("fadeOutUp").removeClass("fadeInDown shown");
   // } else {
   //     $(".button.scroll-down").removeClass("fadeOutUp").addClass("animated fadeInDown shown");
   // }
 });



/*
 * Parallax Scrolling
 * Change (scrolled*.8) to affect the speed of the scroll
 */

 $(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    height = $( window ).height();
    $('.main-logos').css('top',(0+(scrolled*.99))+'px');
    $('.main-logos').css('opacity', (1-(scrolled*.001)));
    $('.scroll-down').css('opacity', (1-(scrolled*.01)));
}

/*
 * Smooth Scroll - v1.4.11 - 2013-07-15
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function(l){function t(l){return l.replace(/(:|\.)/g,"\\$1")}var e="1.4.11",o={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2,preventDefault:!0},r=function(t){var e=[],o=!1,r=t.dir&&"left"==t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!=document&&this!=window){var t=l(this);t[r]()>0?e.push(this):(t[r](1),o=t[r]()>0,o&&e.push(this),t[r](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e};l.fn.extend({scrollable:function(l){var t=r.call(this,{dir:l});return this.pushStack(t)},firstScrollable:function(l){var t=r.call(this,{el:"first",dir:l});return this.pushStack(t)},smoothScroll:function(e){e=e||{};var o=l.extend({},l.fn.smoothScroll.defaults,e),r=l.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,s=l(this),c=o.exclude,i=o.excludeWithin,a=0,f=0,h=!0,u={},d=location.hostname===n.hostname||!n.hostname,m=o.scrollTarget||(l.smoothScroll.filterPath(n.pathname)||r)===r,p=t(n.hash);if(o.scrollTarget||d&&m&&p){for(;h&&c.length>a;)s.is(t(c[a++]))&&(h=!1);for(;h&&i.length>f;)s.closest(i[f++]).length&&(h=!1)}else h=!1;h&&(o.preventDefault&&e.preventDefault(),l.extend(u,o,{scrollTarget:o.scrollTarget||p,link:n}),l.smoothScroll(u))}),this}}),l.smoothScroll=function(t,e){var o,r,n,s,c=0,i="offset",a="scrollTop",f={},h={};"number"==typeof t?(o=l.fn.smoothScroll.defaults,n=t):(o=l.extend({},l.fn.smoothScroll.defaults,t||{}),o.scrollElement&&(i="position","static"==o.scrollElement.css("position")&&o.scrollElement.css("position","relative"))),o=l.extend({link:null},o),a="left"==o.direction?"scrollLeft":a,o.scrollElement?(r=o.scrollElement,c=r[a]()):r=l("html, body").firstScrollable(),o.beforeScroll.call(r,o),n="number"==typeof t?t:e||l(o.scrollTarget)[i]()&&l(o.scrollTarget)[i]()[o.direction]||0,f[a]=n+c+o.offset,s=o.speed,"auto"===s&&(s=f[a]||r.scrollTop(),s/=o.autoCoefficent),h={duration:s,easing:o.easing,complete:function(){o.afterScroll.call(o.link,o)}},o.step&&(h.step=o.step),r.length?r.stop().animate(f,h):o.afterScroll.call(o.link,o)},l.smoothScroll.version=e,l.smoothScroll.filterPath=function(l){return l.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},l.fn.smoothScroll.defaults=o})(jQuery);
$('.nav a').smoothScroll();
$('.header-logos-desktop a, .button-wrap a, .section-title a, .arrow-buttons a, .intro a').smoothScroll();

$('.header').scrollNav({
    sections: '.nav-target',
    subSections: false,
    sectionElem: 'section',
    showHeadline: true,
    headlineText: 'Scroll To',
    showTopLink: true,
    topLinkText: 'Top',
    fixedMargin: 40,
    scrollOffset: 40,
    animated: true,
    speed: 500,
    insertTarget: this.selector,
    insertLocation: 'insertBefore',
    arrowKeys: false
});

/*
Image Rotator Options
 */

    $(function () {
    $('.gallery-rotator').cycle({
        fx: 'scrollHorz',
        slideExpr: '.slide',
        containerResize: false,
        slideResize: false,
        fit:1,
        speed:  1000,
        timeout: 0,
        fastOnEvent: 400,
        prev:    ".gallery-previous",
        next:    ".gallery-next"
        });


    });

        $(function () {
    $('.facility-rotator').cycle({
        fx: 'scrollHorz',
        slideExpr: '.slide',
        containerResize: false,
        slideResize: false,
        fit:1,
        speed:  1000,
        timeout: 0,
        fastOnEvent: 400,
        prev:    ".facility-previous",
        next:    ".facility-next"
        });


    });

$('.product-gallery .gallery-back').click(function() {
  $('.gallery-rotator').cycle(0);
    return false;
});

 $('.facility .gallery-back').click(function() {
  $('.facility-rotator').cycle(0);
    return false;
});

$('.services .more-info').click(function(){
    $('.services-hover').addClass('services-hover-active');
  });

$('.info-hover .close').click(function(){
    $('.services-hover').removeClass('services-hover-active');
    $('.equipment-hover').removeClass('equipment-hover-active');
});

$('.product-gallery .more-info, .product-gallery .section-header').click(function(){
    $('.product-gallery-more-info').addClass('gallery-info-active');
});

$('.product-gallery .close').click(function(){
    $('.product-gallery-more-info').removeClass('gallery-info-active');
});

$('.facility .more-info, .facility .section-header').click(function(){
    $('.facility-more-info').addClass('facility-info-active');
});

$('.facility .close').click(function(){
    $('.facility-more-info').removeClass('facility-info-active');
});

$('.details-1, .title-1').addClass('active');

$('.title-1').click(function(){
    $('.more-info-detail, .more-info-title').removeClass('active');
    $('.details-1, .title-1').addClass('active');
  });

$('.title-2').click(function(){
    $('.more-info-detail, .more-info-title').removeClass('active');
    $('.details-2, .title-2').addClass('active');
  });

$('.title-3').click(function(){
    $('.more-info-detail, .more-info-title').removeClass('active');
    $('.details-3, .title-3').addClass('active');
  });

//activates galleries for Our Work and About Us sections

$('.product-gallery .gallery-activate').click(function(){
  $('.product-gallery').addClass('active');
  $('.product-gallery .section-title').removeClass('active');
  $('.product-gallery .gallery-back').addClass('active');
  $('.slide-info').each(function(){
    $(this).parent().css('top', 0);
  })
});

$('.product-gallery .gallery-back').click(function(){
  $('.product-gallery').removeClass('active');
  $('.product-gallery .section-title').addClass('active');
  $('.product-gallery .gallery-back').removeClass('active');
    $('.slide-info').each(function(){
    var height = $(this).height() + 30;
    $(this).parent().css('top', -(height));
  })
});

$('.facility .gallery-activate').click(function(){
  $('.facility').addClass('active');
  $('.facility .section-title').removeClass('active');
  $('.facility .gallery-back').addClass('active');
});

$('.facility .gallery-back').click(function(){
  $('.facility').removeClass('active');
  $('.facility .section-title').addClass('active');
  $('.facility .gallery-back').removeClass('active');
});

/***********************************************************************/

//makes rotator details dynamic so they are hidden correctily if they have more than one line of copy
function adjustRotatorDetailsHeight(){
    $('.slide-info').each(function(){
      if($('.product-gallery').hasClass('active')){
        $(this).parent().css('top', 0);
      } else{
         var height = $(this).height() + 30;
        $(this).parent().css('top', -(height));
      }
  });
}
  adjustRotatorDetailsHeight();
$( window ).resize(function() {
  adjustRotatorDetailsHeight();
});

function adjustSectionTitleHeight(){
    $('.recenter').each(function(){
        var height = $(this).children().height() + 30;
        $(this).css('margin-top', -height/2 + 'px');
  });
}

  adjustSectionTitleHeight();
$( window ).resize(function() {
  adjustSectionTitleHeight();
});
/***********************************************************************/

/* if window is too small for copy to look good, then adds class short-window to adjust copy into mulitiple columns*/

var win = $(window).height();
if(win < 1100 ){
  $('body').addClass('short-window');
}

$( window ).resize(function() {
  var win = $(window).height();
  if(win < 1100 ){
    $('body').addClass('short-window');
  }else{
    $('body').removeClass('short-window');
  }
});

var winWidth = $(window).width();
if(winWidth < 895){
    $('body').addClass('mobile');
}

/***********************************************************************/

/*
Google Maps Initialization
 */
function initialize()
{
/*
Define Styles. Made using http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
 */
var mapStyles=[
  {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
     "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      { "color": "#5bc4c2" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#a7e3ed" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      { "hue": "#ff0077" },
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "hue": "#0800ff" },
      { "visibility": "off" }
    ]
  },{
  }
]

/*
Map Options
 */


var mapProp = {
  center:new google.maps.LatLng(32.93736,-96.912365),
  zoom:14,
  disableDefaultUI: false,
  scrollwheel: false,
  draggable: false,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  };

var map=new google.maps.Map(document.getElementById("googleMap")
  ,mapProp);

map.setOptions({styles: mapStyles});

var image = 'http://admins-imac/~jsimpson/gc/wp-content/themes/gc/library/images/map-icon.png';

var myLatLng = new google.maps.LatLng(32.93736,-96.912365);

  var icon = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}

/*
Map Initialization
 */

google.maps.event.addDomListener(window, 'load', initialize);


/*
New Map Icon
 */
  $('.nav a').onePageNav();


$(function(){
    var sections = {},
        _height  = $(window).height(),
        i        = 0;
        sectionAdjust = true;
        console.log(_height);


    // Grab positions of our sections
    $('.nav-highlight-target').each(function(){
        sections[this.name] = $(this).offset().top;
    });

    $(document).scroll(function(){
        var $this = $(this),
            pos   = $this.scrollTop();

        for(i in sections){

          /*if(i=='section4' && sectionAdjust && _height > 880){
             sections[i] = sections[i] + 100;
              sectionAdjust = false;
          }
          if(i=='section4' && sectionAdjust && _height < 880){
              sections[i] = sections[i] - 300;
              sectionAdjust = false;
          }*/
            if(sections[i] > pos && sections[i] < pos + _height){
                $('.nav li').removeClass('active');
                $('.nav_' + i).addClass('active');
            } else if(pos < _height - _height/2){
              $('.nav li').removeClass('active');
            }
        }
    });
});

}); /* end of as page load scripts */

/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );

