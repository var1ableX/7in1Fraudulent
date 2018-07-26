if (self.CavalryLogger) { CavalryLogger.start_js(["NJtMs"]); }

__d("VideoStateDirectory",["EventEmitter","VideoPlayerExperiments"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(){"use strict";g.constructor.call(this),this.$VideoStateDirectory1=new Map()}a.prototype.setPlaybackState=function(a,c,d){"use strict";var e=this.$VideoStateDirectory1.get(a)||{};e.currentTimePosition=c;e.playbackDuration=d;e.watched=e.currentTimePosition/e.playbackDuration>=b("VideoPlayerExperiments").watchedPercentage/100||!!e.watched;this.$VideoStateDirectory1.set(a,e);this.emit(a,e)};a.prototype.setSaveState=function(a,b){"use strict";var c=this.$VideoStateDirectory1.get(a)||{};c.saved=b;this.emit(a,c)};a.prototype.setSubscriptionState=function(a,b){"use strict";var c=this.$VideoStateDirectory1.get(a)||{};c.subscribed=b;this.emit(a,c)};a.prototype.getState=function(a){"use strict";return this.$VideoStateDirectory1.get(a)};e.exports=new a()}),null);
__d("VideoUpdateStateDirectory",["VideoStateDirectory"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$2=function(){var a=this.$1,c=a.getVideoID(),d=a.getCurrentTimePosition();a=a.getPlaybackDuration();b("VideoStateDirectory").setPlaybackState(c,d,a)}.bind(this)}a.prototype.enable=function(a){this.$1=a,a.addListener("finishPlayback",this.$2),a.addListener("pausePlayback",this.$2)};a.prototype.disable=function(){};e.exports=a}),null);
__d("EmbeddedVideoFbLogoOverlay",["cx","CSS","EventListener","SubscriptionsHandler","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c,d){"use strict";this.$1=c,this.$2=a,this.$3=new(b("SubscriptionsHandler"))(),d?this.$3.addSubscriptions(a.addListener("beginPlayback",function(){c.parentNode.removeChild(c),this.$3.release()}.bind(this))):(this.$2.addListener("beginPlayback",this.$4.bind(this)),this.$2.addListener("pausePlayback",this.$5.bind(this)),this.$2.addListener("finishPlayback",this.$5.bind(this)),b("EventListener").listen(this.$2.getRootNode(),"mousemove",b("throttle")(this.$6.bind(this),200)),b("EventListener").listen(this.$2.getRootNode(),"mouseenter",function(){this.$7=!0}.bind(this)),b("EventListener").listen(this.$2.getRootNode(),"mouseleave",function(){this.$7=!1,this.$2.isState("playing")&&this.$8()}.bind(this)))}a.prototype.$4=function(){"use strict";b("CSS").addClass(this.$1,"_16d3"),this.$6()};a.prototype.$6=function(){"use strict";this.$2.isState("playing")&&this.$7&&(this.$5(),clearTimeout(this.$9),this.$9=setTimeout(function(){this.$2.isState("playing")&&this.$8()}.bind(this),3e3))};a.prototype.$5=function(){"use strict";b("CSS").removeClass(this.$1,"_16d4")};a.prototype.$8=function(){"use strict";b("CSS").addClass(this.$1,"_16d4")};e.exports=a}),null);
__d("EmbeddedVideoInitialInfoOverlay",["SubscriptionsHandler"],(function(a,b,c,d,e,f){function a(a,c){"use strict";this.$1=new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(a.addListener("beginPlayback",function(){c.parentNode.removeChild(c),this.$1.release()}.bind(this)))}e.exports=a}),null);
__d("EmbeddedVideoPauseOverlay",["cx","fbt","Arbiter","CSS","DOM","DOMDimensions","EventListener","VideoPlayerExperiments","throttle"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="_3bw";function a(a,c,d,e,f,g,i,j,k){"use strict";this.$1=c,this.$2=a,this.$3=d,this.$4=e,this.$5=f,this.$6=g,this.$7=i,this.$8=j,this.$9=0,k?(this.$10=k.showOnlyOnFullscreen,this.$11=k.showOnEndscreen):(this.$10=!1,this.$11=!0),this.$12=h._("Like"),this.$13=h._("Unlike"),this.$14=h._("Share"),this.$15(),this.$2.addListener("beginPlayback",this.$16.bind(this)),b("VideoPlayerExperiments").embeddedPlayerInlineChaining?(this.$2.addListener("pausePlayback",this.$17.bind(this)),this.$2.addListener("finishPlayback",this.$18.bind(this))):(this.$2.addListener("pausePlayback",this.$19.bind(this)),this.$2.addListener("finishPlayback",this.$19.bind(this))),this.$2.addListener("toggleFullscreen",this.$20.bind(this)),b("EventListener").listen(this.$2.getRootNode(),"mousemove",b("throttle")(this.$21.bind(this),200)),b("EventListener").listen(this.$2.getRootNode(),"mouseenter",function(){this.$22=!0}.bind(this)),b("EventListener").listen(this.$2.getRootNode(),"mouseleave",function(){this.$2.isState("playing")&&(this.$22=!1,this.$23())}.bind(this)),b("Arbiter").subscribe("embeddedUfiToggle",function(){this.$24(),this.$25()}.bind(this)),b("EventListener").listen(window,"resize",b("throttle")(function(){this.$25()}.bind(this),100))}a.prototype.$16=function(){"use strict";this.$24(),this.$25(),this.$21()};a.prototype.$24=function(){"use strict";var a;this.$2.isFullscreen()?a=64:a=32;this.$15();this.$9=b("DOMDimensions").getElementDimensions(this.$3).width+b("DOMDimensions").getElementDimensions(this.$4).width+a};a.prototype.$25=function(){"use strict";if(this.$2.isState("destroyed"))return;var a=b("DOMDimensions").getElementDimensions(this.$2.getRootNode()).width;a=a<this.$9;a?this.$26():this.$15()};a.prototype.$15=function(){"use strict";this.$6&&b("DOM").setContent(this.$6,this.$14),this.$7&&b("DOM").setContent(this.$7,this.$12),this.$8&&b("DOM").setContent(this.$8,this.$13),this.$5&&this.$5.showText()};a.prototype.$26=function(){"use strict";this.$6&&b("DOM").setContent(this.$6,null),this.$7&&b("DOM").setContent(this.$7,null),this.$8&&b("DOM").setContent(this.$8,null),this.$5&&this.$5.hideText()};a.prototype.$27=function(){"use strict";return this.$10&&!this.$2.isFullscreen()?!1:this.$2.isState("playing")&&this.$22||this.$2.isState("paused")||!b("VideoPlayerExperiments").embeddedPlayerInlineChaining&&this.$2.isState("finished")};a.prototype.$21=function(){"use strict";this.$27()&&(this.$28(),clearTimeout(this.$29),this.$29=setTimeout(function(){this.$2.isState("playing")&&this.$23()}.bind(this),3e3))};a.prototype.$20=function(){"use strict";this.$27()?this.$28():this.$23()};a.prototype.$19=function(){"use strict";this.$27()&&this.$28()};a.prototype.$17=function(){"use strict";this.$27()&&this.$28()};a.prototype.$18=function(){"use strict";this.$11?this.$28():this.$23()};a.prototype.$28=function(){"use strict";b("CSS").removeClass(this.$1,i)};a.prototype.$23=function(){"use strict";b("CSS").addClass(this.$1,i)};e.exports=a}),null);
__d("EmbeddedVideoSaveButton",["cx","fbt","Arbiter","AsyncFormRequestUtils","Banzai","CSS","DOM","Event","FormSubmit","guid"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="saved_for_later:imp",j="saved_for_later:click",k="overlay_toggle_button",l="embedded_video";function a(a,c,d,e,f,g,i,j,k,l){"use strict";__p&&__p();this.$1=a;this.$2=[];this.objectID=k;this.impressed=!1;this.$3=i;this.$4=j;l?(this.$5=h._("Watch Later"),this.$6=h._("Watch Later")):(this.$5=h._("Save"),this.$6=h._("Unsave"));b("DOM").setContent(this.$3,this.$5);b("DOM").setContent(this.$4,this.$6);var m=function(a){a?(b("CSS").hide(d),b("CSS").show(e)):(b("CSS").hide(e),b("CSS").show(d)),b("Arbiter").inform("embeddedUfiToggle"),this.$2.length===0&&(a?g.setAttribute("value",1):g.setAttribute("value",0),b("FormSubmit").send(f)),this.$2.push(a),this.$7()}.bind(this);a=function(a){a=g.getAttribute("value")==="1";if(this.$2.length>1){var c=this.$2[this.$2.length-1];(a&&!c||!a&&c)&&(c?g.setAttribute("value",1):g.setAttribute("value",0),b("FormSubmit").send(f))}this.$2=[]}.bind(this);b("Event").listen(d,"click",function(){return m(!0)});b("Event").listen(e,"click",function(){return m(!1)});c.addListener("beginPlayback",function(){this.$8(),b("CSS").removeClass(this.$1,"_4_me")}.bind(this));b("AsyncFormRequestUtils").subscribe(f,"response",a)}a.prototype.hideText=function(){"use strict";b("DOM").setContent(this.$3,null),b("DOM").setContent(this.$4,null)};a.prototype.showText=function(){"use strict";b("DOM").setContent(this.$3,this.$5),b("DOM").setContent(this.$4,this.$6)};a.prototype.$8=function(){"use strict";if(this.impressed)return;this.impressed=!0;var a={mechanism:k,surface:l,og_object_id:this.objectID,event_id:b("guid")()};b("Banzai").post(i,a,{delay:0,retry:!0})};a.prototype.$7=function(){"use strict";var a={mechanism:k,surface:l,og_object_id:this.objectID,event_id:b("guid")()};b("Banzai").post(j,a,{delay:0,retry:!0})};e.exports=a}),null);
__d("onViewportChanged",["EventListener","emptyFunction","getViewportDimensions","requestAnimationFrame"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h=!1,i=null,j,k;function l(){var a=b("getViewportDimensions").withoutScrollbars();return{top:0,bottom:a.height,left:0,right:a.width}}function a(a,c){c={transform:c||b("emptyFunction").thatReturnsArgument,callback:a,needsUpdate:!0};g.push(c);s();n();return{remove:m.bind(null,c),scheduleCheck:q.bind(null,c)}}function m(a){a=g.indexOf(a);a!==-1&&(g.splice(a,1),g.length===0&&(o(),i=null))}function n(){k||(k=b("EventListener").listen(window,"scroll",r),j=b("EventListener").listen(window,"resize",p))}function o(){k&&(k.remove(),j.remove(),k=j=null)}function p(){i=null,r()}function q(a){a.needsUpdate=!0,s()}function r(){g.map(function(a){return a.needsUpdate=!0}),s()}function s(){h||(h=!0,b("requestAnimationFrame")(function(){h=!1,u()}))}function t(a){if(a.needsUpdate){a.needsUpdate=!1;return!0}return!1}function u(){i||(i=l());var a=g.filter(t),b=a.map(function(a){return a.transform.call(null,i)});a.forEach(function(a,c){return a.callback.call(null,b[c])})}e.exports=a}),null);