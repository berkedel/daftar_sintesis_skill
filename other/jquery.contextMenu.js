/*
 * ContextMenu - jQuery plugin for right-click context menus
 * Author: Chris Domigan
 * Contributors: Dan G. Switzer, II
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){var f,trigger,hash;var g={eventPosX:'pageX',eventPosY:'pageY'};$.fn.contextMenu=function(a){if(!f){f=$('<div id="jqContextMenu"></div>').appendTo('body').bind('click',function(e){e.stopPropagation()})}hash=hash||[];hash.push({eventPosX:a.eventPosX||g.eventPosX,eventPosY:a.eventPosY||g.eventPosY});$(this).bind('contextmenu',function(e){display(hash.length-1,this,e,a);return false});return this};function display(a,b,e,c){var d=hash[a];f.html(c.funcMenuHtml(b));f.find('ul > li').one('click',hide);f.css({'left':e[d.eventPosX],'top':e[d.eventPosY]}).show();$(document).one('click',hide)}function hide(){f.hide()}})(jQuery);
