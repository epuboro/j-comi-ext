// ==UserScript==
// @name           j-comi-ext
// @namespace      j-comi-ext
// @include        http://vw.j-comi.jp/murasame/*
// @licenses	   MIT and GPL
// ==/UserScript==


/* Copyright (c) 2009 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 *
 * Version: 3.0.2
 * 
 * Requires: 1.2.2+
 */
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(f){var d=[].slice.call(arguments,1),g=0,e=true;f=c.event.fix(f||window.event);f.type="mousewheel";if(f.wheelDelta){g=f.wheelDelta/120}if(f.detail){g=-f.detail/3}d.unshift(f,g);return c.event.handle.apply(this,d)}})(unsafeWindow.jQuery);

$ = unsafeWindow.jQuery;
$(function(){
	var comic = unsafeWindow.JCOMI.comic;
	var toolbar = unsafeWindow.JCOMI.toolBar;

	$('#left_page').click( function() {
		comic.nextPage();
		toolbar.update();
	});

	$('#right_page').click( function() {
		comic.prevPage();
		toolbar.update();
	});

	$('#left_page,#right_page').mousewheel( function(event, delta) {
		if (delta < 0) {
			comic.nextPage();
			toolbar.update();
		}
		else if (delta > 0) {
			comic.prevPage();
			toolbar.update();
		}
		return false;
	});
});
