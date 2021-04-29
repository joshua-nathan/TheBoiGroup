if (self.CavalryLogger) { CavalryLogger.start_js(["\/UUxMFH"]); }

__d("CenteredContainer.react",["cx","joinClasses","prop-types","react"],(function(a,b,c,d,e,f,g){var h,i=h||b("react");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.fullHeight,d=a.horizontal,e=a.vertical;a=babelHelpers.objectWithoutPropertiesLoose(a,["fullHeight","horizontal","vertical"]);e=(e?"_3bwv":"")+(d?" _3bww":"");d=i.Children.map(this.props.children,function(a){return i.jsx("div",{className:"_3bwx",children:a})});c=b("joinClasses")(this.props.className,c?"_5bpf":"");return i.jsx("div",babelHelpers["extends"]({},a,{className:c,children:i.jsx("div",{className:e,children:i.jsx("div",{className:"_3bwy",children:d})})}))};return c}(i.Component);e.exports=a;a.propTypes={fullHeight:b("prop-types").bool,vertical:b("prop-types").bool,horizontal:b("prop-types").bool};a.defaultProps={fullHeight:!1,vertical:!1,horizontal:!0}}),null);
__d("ClickableArea.react",["Focus","ReactDOM","react"],(function(a,b,c,d,e,f){var g,h=g||b("react");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){if(this.props.buttonRef){var a=this.props.buttonRef();b("Focus").relocate(b("ReactDOM").findDOMNode(a),b("ReactDOM").findDOMNode(this))}};d.render=function(){var a=this.props,b=a.children,c=a.onClick;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","onClick"]);return h.cloneElement(h.Children.only(b),babelHelpers["extends"]({},a,{onClick:c}))};return c}(h.Component);e.exports=a}),null);
__d("FantaConst",[],(function(a,b,c,d,e,f){"use strict";f.getCookieIDs=a;b=2;f.DEFAULT_ALLOWED_RAISED_TABS=b;c=10;f.DEFAULT_MESSAGE_COUNT=c;var g={PERSONAL_COOKIE_ID:"t3",PERSONAL_FOCUS_COOKIE_ID:"lm3",PERSONAL_TIME_COOKIE_ID:"utc3",WORK_COOKIE_ID:"t3w",WORK_FOCUS_COOKIE_ID:"lm3w",WORK_TIME_COOKIE_ID:"utc3w"};f.cookieIDs=g;function a(){return[g.PERSONAL_COOKIE_ID,g.PERSONAL_FOCUS_COOKIE_ID,g.PERSONAL_TIME_COOKIE_ID,g.WORK_COOKIE_ID,g.WORK_FOCUS_COOKIE_ID,g.WORK_TIME_COOKIE_ID]}}),null);
__d("Dcode",[],(function(a,b,c,d,e,f){var g,h={},i={_:"%",A:"%2",B:"000",C:"%7d",D:"%7b%22",E:"%2c%22",F:"%22%3a",G:"%2c%22ut%22%3a1",H:"%2c%22bls%22%3a",I:"%2c%22n%22%3a%22%",J:"%22%3a%7b%22i%22%3a0%7d",K:"%2c%22pt%22%3a0%2c%22vis%22%3a",L:"%2c%22ch%22%3a%7b%22h%22%3a%22",M:"%7b%22v%22%3a2%2c%22time%22%3a1",N:".channel%22%2c%22sub%22%3a%5b",O:"%2c%22sb%22%3a1%2c%22t%22%3a%5b",P:"%2c%22ud%22%3a100%2c%22lc%22%3a0",Q:"%5d%2c%22f%22%3anull%2c%22uct%22%3a",R:".channel%22%2c%22sub%22%3a%5b1%5d",S:"%22%2c%22m%22%3a0%7d%2c%7b%22i%22%3a",T:"%2c%22blc%22%3a1%2c%22snd%22%3a1%2c%22ct%22%3a",U:"%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",V:"%2c%22blc%22%3a0%2c%22snd%22%3a0%2c%22ct%22%3a",W:"%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a",X:"%2c%22ri%22%3a0%7d%2c%22state%22%3a%7b%22p%22%3a0%2c%22ut%22%3a1",Y:"%2c%22pt%22%3a0%2c%22vis%22%3a1%2c%22bls%22%3a0%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",Z:"%2c%22sb%22%3a1%2c%22t%22%3a%5b%5d%2c%22f%22%3anull%2c%22uct%22%3a0%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a"};(function(){var a=[];for(var b in i)h[i[b]]=b,a.push(i[b]);a.reverse();g=new RegExp(a.join("|"),"g")})();a={encode:function(a){return encodeURIComponent(a).replace(/([_A-Z])|%../g,function(a,b){return b?"%"+b.charCodeAt(0).toString(16):a}).toLowerCase().replace(g,function(a){return h[a]})},decode:function(a){return decodeURIComponent(a.replace(/[_A-Z]/g,function(a){return i[a]}))}};e.exports=a}),null);
__d("PresenceCookieManager",["Cookie","CurrentUser","Dcode","ErrorUtils","PresenceInitialData","PresenceUtil","WebStorage"],(function(a,b,c,d,e,f){f.register=a;f.store=c;f.clear=d;f.getSubCookie=z;var g,h,i=b("PresenceInitialData").cookieVersion,j="presence",k={},l=null,m=null;function n(a){var c=b("Cookie").get(j)||"";if(c.length===0)return null;return c[0]!==a?null:c.substring(1)}function o(a,c){b("Cookie").set(j,a+c)}function p(){return!(b("PresenceInitialData").useWebStorage||!1)?null:(g||(g=b("WebStorage"))).getSessionStorage()}function q(){var a=p();a=a!=null?a.getItem(j):null;return a!=null?a.substring(1):null}function r(a){var b=p();if(b==null)return!1;b.setItem(j,"E"+a);return!0}function s(){var a=q();return a!=null?a:n("E")}function t(a){a=a.state;if(a==null)return"";var c=n("S")||"",d=b("CurrentUser").isWorkUser()?"w":"f";a=b("CurrentUser").isWorkUser()?a.t3w:a.t3;a=a!=null?a.length>0:!1;var e=c.indexOf(d)!==-1;e&&!a&&(c=c.replace(d,""));!e&&a&&(c+=d);return c}function u(a,b){var c=r(a);c?o("S",b):o("E",a)}function v(){try{var a=s();l!==a&&(l=a,m=null,a&&(a=b("Dcode").decode(a),m=JSON.parse(a)));if(m){if(m.user&&m.user!==b("CurrentUser").getID())return null;return m.v!==i?null:m}}catch(a){}return null}function w(){return{v:i,time:x(),user:b("CurrentUser").getID()}}function x(){return parseInt(Date.now()/1e3,10)}function y(a){var c=b("Dcode").encode(JSON.stringify(a));b("PresenceUtil").hasUserCookie()&&u(c,t(a))}function a(a,b){k[a]=b}function c(){var a=v();if(a&&a.v&&i<a.v)return;var c=w();for(var d in k)c[d]=(h||(h=b("ErrorUtils"))).applyWithGuard(k[d],k,[a&&a[d]],function(a){a.presence_subcookie=d});y(c)}function d(){var a=z("state");b("Cookie").clear(j);var c=(g||(g=b("WebStorage"))).getSessionStorage();c!=null&&c.removeItem(j);if(a){c=w();c.state=a;y(c)}}function z(a){var b=v();return!b?null:b[a]}}),null);
__d("PresenceState",["ErrorUtils","FantaConst","PresenceCookieManager","PresenceInitialData","debounceAcrossTransitions","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";f.verifyNumber=u;f.doSync=a;f.registerStateStorer=c;f.registerStateLoader=d;f.get=e;f.getInitial=A;f.shouldSuppress=B;var g,h=b("PresenceInitialData").cookiePollInterval||2e3,i=b("PresenceInitialData").shouldSuppress||!1,j=[],k=[],l=null,m=null,n=0,o=null,p=0,q=["sb2","tr","tw","at","wml"].concat(b("FantaConst").getCookieIDs());function r(){return b("PresenceCookieManager").getSubCookie("state")}function s(){n=Date.now(),b("PresenceCookieManager").store(),w(m)}var t=b("debounceAcrossTransitions")(s,0);function u(a){(a==void 0||isNaN(a)||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)&&(a=0);return a}function v(a){var c={};a&&q.forEach(function(b){a&&a[b]&&(c[b]=a[b])});c.ut=n;for(var d=0,e=j.length;d<e;d++)(g||(g=b("ErrorUtils"))).applyWithGuard(j[d],null,[c]);m=c;return m}function w(a){p++;n=u(a&&a.ut);l||(l=b("setIntervalAcrossTransitions")(z,h));m=a;o===null&&(o=a);for(var c=0,d=k.length;c<d;c++)(g||(g=b("ErrorUtils"))).applyWithGuard(k[c],null,[a]);p--}function x(a){return a&&a.ut&&n<a.ut?!0:!1}function y(){var a=r();x(a)&&(m=a);return m}function z(){var a=r();x(a)&&w(a)}b("PresenceCookieManager").register("state",v);(function(){var a=y();if(a)w(a);else{w(v());return}})();function a(a){if(p)return;a?s():t()}function c(a){j.push(a)}function d(a){k.push(a)}function e(){return y()}function A(){return o}function B(){return i}}),null);
__d("RelayFBResponseCache",["RelayRuntime"],(function(a,b,c,d,e,f){"use strict";a=b("RelayRuntime").QueryResponseCache;c=10;d=5*60*1e3;e.exports=new a({size:c,ttl:d})}),null);
__d("isFalsey",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return a==null||!Boolean(a)}}),null);
__d("concatArrays",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){var b;return(b=[]).concat.apply(b,a)}}),null);
__d("distinctArray",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){if(a==null)return[];if(Array.isArray(a)){var b=a.length;if(b<=200){var c=[];for(var d=0;d<b;d++){var e=a[d];c.indexOf(e)===-1&&c.push(e)}return c}}return Array.from(new Set(a).values())}}),null);
__d("objectKeys",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){return Object.keys(a)}}),null);
__d("ExplicitRegistrationReactDispatcher",["ExplicitRegistrationDispatcher","ReactDOMComet"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.dispatch=function(c){var d=this;b("ReactDOMComet").unstable_batchedUpdates(function(){a.prototype.dispatch.call(d,c)})};return c}(b("ExplicitRegistrationDispatcher"));e.exports=a}),null);
__d("FluxStoreInstrumentation",["invariant"],(function(a,b,c,d,e,f,g){"use strict";f.inject=a;f.onEmitChange=b;var h=null;function a(a){h==null||g(0,2260),h=a}function b(a){return h?h.emitChange(a):null}}),null);
__d("FluxStore",["invariant","EventEmitter","FluxStoreInstrumentation","__debug","concatArrays","distinctArray"],(function(a,b,c,d,e,f,g){"use strict";var h,i;a=function(){function a(a){this.__className=this.constructor.name,this.__moduleID=this.constructor.__moduleID,this.__changed=!1,this.__changeEvent="change",this.__dispatcher=a,this.__emitter=new(b("EventEmitter"))(),this.$3=!1,this.__registerDispatcherCallback(a)}var c=a.prototype;c.__registerDispatcherCallback=function(a){var b=this;this.$2=a.register(function(a){return b.__invokeOnDispatch(a)},this.__getIDForDispatcher(),this,this.__moduleID)};c.addListener=function(a){return this.__emitter.addListener(this.__changeEvent,a)};c.getActionTypes=function(){if(!this.$1){var a=this.__getActionTypes();if(a!=null){var c=this.getDependencyStores();if(c.length>0){var d=!1;c=b("concatArrays")(c.map(function(a){a=a&&a.getActionTypes?a.getActionTypes():null;a==null&&(d=!0);return a}).filter(Boolean));d?a=null:a=(h||(h=b("distinctArray")))(a.concat(c))}}this.$1=a}return this.$1};c.getDispatcher=function(){return this.__dispatcher};c.getDispatchToken=function(){return this.$2};c.getDependencyDispatchTokens=function(){this.$5||(this.$5=this.getDependencyStores().map(function(a){return a&&a.getDispatchToken&&a.getDispatchToken()}));return this.$5};c.getDependencyStores=function(){this.$4||(this.$4=(h||(h=b("distinctArray")))(this.__getDependencyStores()));return this.$4};c.addStoreDependency=function(a){var b=this.__dispatcher.registerDependency;b&&b(this.getDispatchToken(),a.getDispatchToken())};c.hasChanged=function(){this.__dispatcher.isDispatching()||g(0,1147,this.__className);return this.__changed};c.__setAsUnchanged=function(){this.__changed=!1};c.__emitChange=function(){this.__dispatcher.isDispatching()||g(0,1148,this.__className);if(this.__changed)return;b("FluxStoreInstrumentation").onEmitChange(this.__moduleID!=null?this.__moduleID:"unknown");this.__changed=!0};c.__invokeOnDispatch=function(a){this.__changed=!1,this.__onDispatch(a),this.__inform()};c.__inform=function(a){this.$3=this.__changed||this.$3;var b=this.__dispatcher.shouldAllowInforms==null||this.__dispatcher.shouldAllowInforms();b&&this.$3&&(this.$3=!1,this.__emitter.emit(a||this.__changeEvent))};c.__onDispatch=function(a){g(0,1149,this.__className)};c.__getActionTypes=function(){return null};c.__getDependencyStores=function(){return[]};c.__getIDForDispatcher=function(){return this.__className};return a}();a;c=a;e.exports=c}),null);
__d("TypedFluxStore",["FluxStore"],(function(a,b,c,d,e,f){"use strict";a=b("FluxStore");e.exports=a}),null);
__d("FluxReduceStore",["invariant","TypedFluxStore","abstractMethod"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.$FluxReduceStore1=b.getInitialState();return b}var d=c.prototype;d.getState=function(){return this.$FluxReduceStore1};d.getInitialState=function(){return b("abstractMethod")("FluxReduceStore","getInitialState")};d.reduce=function(a,c){return b("abstractMethod")("FluxReduceStore","reduce")};d.areEqual=function(a,b){return a===b};d.__invokeOnDispatch=function(a,b){b===void 0&&(b=!0);this.__changed=!1;var c=this.$FluxReduceStore1;a=this.reduce(c,a);a!==void 0||g(0,2189,this.constructor.name);this.areEqual(c,a)||(this.$FluxReduceStore1=a,this.__emitChange());b&&this.__inform()};d.__setState=function(a){this.$FluxReduceStore1=a};return c}(b("TypedFluxStore"));e.exports=a;a.__moduleID=e.id}),null);