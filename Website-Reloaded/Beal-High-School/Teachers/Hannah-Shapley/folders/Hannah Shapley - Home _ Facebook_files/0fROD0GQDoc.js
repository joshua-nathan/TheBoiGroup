if (self.CavalryLogger) { CavalryLogger.start_js(["XXqauOV"]); }

__d("PercentVisible",[],(function(a,b,c,d,e,f){a=-1;f.NO_VISIBLE=a;b=0;f.VISIBLE_0_PCT=b;c=50;f.VISIBLE_50_PCT=c;d=100;f.VISIBLE_100_PCT=d}),null);
__d("CometMetricsChannel2ViewabilityFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1960868");c=b("FalcoLoggerInternal").create("comet_metrics_channel2_viewability",a);e.exports=c}),null);
__d("getCentralImpressionScrollSpeed",["Event"],(function(a,b,c,d,e,f){"use strict";var g=0,h=Date.now(),i=null,j=null;function a(a){b("Event").listen(window,"scroll",function(){j&&clearTimeout(j),j=setTimeout(function(){return a()},100)},b("Event").Priority.NORMAL,{passive:!0})}function k(){var a=window.scrollY,b=Date.now();if(i!=null&&b!==h){var c=a-i;g=c/(b-h)*1e3}i=a;h=b}a(function(){g=0,i=null});b("Event").listen(window,"scroll",function(){return k()},b("Event").Priority.NORMAL,{passive:!0});e.exports=function(){return g}}),null);
__d("getCentralImpressionTimeAfterRefresh",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=null;window.addEventListener("load",function(){g=Date.now()},{passive:!0});function a(){return g!=null?Date.now()-g:0}}),null);
__d("isImpressionTargetOccluded",["containsNode","getViewportDimensions"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d){d===void 0&&(d={bottom:0,left:0,right:0,top:0});try{if(!a||!c||!document.elementFromPoint)return!1;var e=b("getViewportDimensions")();if(e.height===0||e.width===0)return!1;var f=c.x,g=c.y,h=c.width;c=c.height;h=Math.min(f+h,e.width-1);c=Math.min(g+c,e.height-1);e=[{x:f,y:g},{x:f,y:c},{x:h,y:g},{x:h,y:c},{x:(f+h)/2,y:(g+c)/2}];d.top!==0&&d.top>g&&d.top<c&&e.push({x:(f+h)/2,y:(d.top+c)/2});return e.every(function(c){c=document.elementFromPoint(c.x,c.y);c=!!c&&!b("containsNode")(c,a)&&!b("containsNode")(a,c);return c})}catch(a){return!1}}}),null);