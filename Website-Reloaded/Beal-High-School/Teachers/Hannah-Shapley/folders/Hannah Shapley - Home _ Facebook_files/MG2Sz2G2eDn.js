if (self.CavalryLogger) { CavalryLogger.start_js(["Zb4oRHp"]); }

__d("CometMenuFocusGroup",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusGroup.react","focusScopeQueries","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");c=b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);var j=c[0];d=c[1];function a(a){var c=[{command:{key:b("CometKeys").UP},description:g._("Previous item"),handler:function(){}},{command:{key:b("CometKeys").DOWN},description:g._("Next item"),handler:function(){}}];return i.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:c,children:i.jsx(j,babelHelpers["extends"]({},a))})}f={FocusGroup:a,FocusItem:d};e.exports=f}),null);
__d("CometMenuItemBaseRoleContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext(null);e.exports=c}),null);
__d("CometSeparatorMenuItem.react",["CometMenuItemBaseRoleContext","react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j={separator:{borderTop:"l6v480f0",marginTop:"aahdfvyu",marginEnd:"wkznzc2l",marginBottom:"tvmbv18p",marginStart:"dhix69tm"}};function a(a,c){a=a.xstyle;var d=i.useContext(b("CometMenuItemBaseRoleContext"));return i.jsx("div",{className:(h||(h=b("stylex")))([j.separator,a]),ref:c,role:d==="menuitem"?"separator":"presentation"})}c=i.forwardRef(a);e.exports=c}),null);
__d("CometMenuBase.react",["BaseScrollableArea.react","CometErrorBoundary.react","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometSeparatorMenuItem.react","TetraTextPairing.react","focusScopeQueries","react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react"),j=145,k={listItem:{borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",display:"j83agx80",flexDirection:"btwxx1t3",marginTop:"kvgmc6g5",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"h676nmdw",paddingTop:"pybr56ya",paddingEnd:"dflh9lhu",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr"},root:{alignItems:"gs1a9yip",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"cbu4d94t",paddingTop:"cxgpxx05",paddingEnd:"rz4wbd8a",paddingBottom:"sj5x9vvc",paddingStart:"a8nywdso"},sizeFull:{width:"k4urcfbm"},sizeNormal:{width:"geg40m2u"},sizeSmall:{width:"jbcpqwzg"}},l="menu",m={listbox:"option",menu:"menuitem"};function a(a){var c=a.children,d=a.footer,e=a.header,f=a.maxHeight,g=a.role;g=g===void 0?l:g;a=a.size;a=a===void 0?"normal":a;var n=0,o=i.Children.toArray(c).map(function(a){if(a==null)return null;var c=n++;return a.type===b("CometSeparatorMenuItem.react")?a:i.jsx(b("CometErrorBoundary.react"),{children:a},c)});g=m[g];return i.Children.count(c)>0?i.jsx(b("BaseScrollableArea.react"),{horizontal:!1,style:f!=null?{maxHeight:Math.max(f,j)}:void 0,vertical:!0,xstyle:[k.root,a==="full"&&k.sizeFull,a==="normal"&&k.sizeNormal,a==="small"&&k.sizeSmall],children:i.jsxs(b("CometMenuItemBaseRoleContext").Provider,{value:g,children:[e!=null?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:(h||(h=b("stylex")))(k.listItem),role:g,children:i.jsx(b("TetraTextPairing.react"),{headline:e.title,level:3,meta:e.meta,reduceEmphasis:!0})}),i.jsx(b("CometSeparatorMenuItem.react"),{})]}):null,i.jsx(b("CometMenuFocusGroup").FocusGroup,{orientation:"vertical",preventScrollOnFocus:!1,tabScopeQuery:b("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:o}),d!=null?i.jsxs(i.Fragment,{children:[i.jsx(b("CometSeparatorMenuItem.react"),{}),i.jsx("div",{className:(h||(h=b("stylex")))(k.listItem),role:g,children:i.jsx(b("TetraTextPairing.react"),{level:3,meta:d.text})})]}):null]})}):null}}),null);
__d("CometMenuBaseWithPopover.react",["BaseContextualLayerAvailableHeightContext","CometMenuBase.react","CometPopover.react","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react"),i=15,j="menu";function a(a,c){var d=a.children,e=a.id,f=a.role;f=f===void 0?j:f;var g=a.withArrow;g=g===void 0?!1:g;var k=a.testid;k=k===void 0?"comet-menu":k;k=a.truncate;k=k===void 0?!1:k;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","id","role","withArrow","testid","truncate"]);var l=h.useContext(b("BaseContextualLayerAvailableHeightContext"));g&&l!=null&&(l-=i);return h.Children.count(d)>0?h.jsx(b("CometPopover.react"),{id:e,ref:c,role:f,testid:void 0,withArrow:g,children:h.jsx(b("CometMenuBase.react"),babelHelpers["extends"]({},a,{children:d,maxHeight:k?(e=l)!=null?e:0:void 0,role:f}))}):null}c=h.memo(h.forwardRef(a));e.exports=c}),null);
__d("CometMenu.react",["CometMenuBaseWithPopover.react","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a,c){return h.jsx(b("CometMenuBaseWithPopover.react"),babelHelpers["extends"]({},a,{ref:c}))}c=h.forwardRef(a);e.exports=c}),null);
__d("CometMenuItemBase.react",["BaseFocusRing.react","CometMenuContext","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometMenuItemHighlightContext","CometNonBreakingSpace.react","CometPressable.react","CometPressableOverlay.react","CometTextWithIcon.react","TetraText.react","TetraTextPairing.react","mergeRefs","react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j={aux:{marginStart:"ozuftl9m"},content:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3",flexGrow:"buofh1pr",justifyContent:"i1fnvgqd",minWidth:"hpfvmrgz"},disabled:{cursor:"rj84mg9z"},listItem:{alignItems:"bp9cbjyn",appearance:"dwo3fsh8",boxSizing:"rq0escxv",cursor:"nhd2j8a9",display:"j83agx80",flexDirection:"btwxx1t3",flexShrink:"pfnyh3mw",marginTop:"kvgmc6g5",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"h676nmdw",paddingTop:"pybr56ya",paddingEnd:"dflh9lhu",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr",position:"l9j0dhe7",textAlign:"i1ao9s8h",zIndex:"du4w35lb"},listItemAlignedCenter:{alignItems:"bp9cbjyn"},listItemWithIcon:{paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"}};function a(a,c){var d=a.alignCenter;d=d===void 0?!1:d;var e=a.aux,f=a.badge,g=a.bodyColor,k=a.bodyText,l=a.disabled,m=l===void 0?!1:l;l=a.download;var n=a.href,o=a.iconNode,p=a.id,q=a.onClick,r=a.onHoverIn,s=a.onHoverOut,t=a.onPressIn,u=a.passthroughProps,v=a.prefetchQueries,w=a.preventClosingMenuOnSelect;w=w===void 0?!1:w;var x=a.preventLocalNavigation,y=a.primaryColor,z=a.primaryText,A=a.role,B=a.routeTarget,C=a.secondaryColor,D=a.secondaryText,E=a.target,F=a.testid;F=a.visuallyFocused;var G=F===void 0?!1:F;F=babelHelpers.objectWithoutPropertiesLoose(a,["alignCenter","aux","badge","bodyColor","bodyText","disabled","download","href","iconNode","id","onClick","onHoverIn","onHoverOut","onPressIn","passthroughProps","prefetchQueries","preventClosingMenuOnSelect","preventLocalNavigation","primaryColor","primaryText","role","routeTarget","secondaryColor","secondaryText","target","testid","visuallyFocused"]);var H=i.useRef(null);a=i.useContext(b("CometMenuContext"));var I=w!==!0&&a?a.onClose:null;w=n!=null||B!=null||E!=null?{download:l,passthroughProps:u,prefetchQueries:v,preventLocalNavigation:x,routeTarget:B,target:E,url:n}:void 0;a=i.useCallback(function(a){I!=null&&I(),q&&q(a)},[q,I]);l=i.useContext(b("CometMenuItemBaseRoleContext"));x=(v=(u=A)!=null?u:l)!=null?v:void 0;var J=i.useRef(G);i.useEffect(function(){var a=H.current;!J.current&&G&&a!=null&&a.scrollIntoView({block:"nearest"})},[G]);B=i.useMemo(function(){return b("mergeRefs")(c,H)},[c]);var K=f!=null?typeof f==="number"?i.jsxs(i.Fragment,{children:[z,i.jsx(b("CometNonBreakingSpace.react"),{size:.5}),i.jsx(b("TetraText.react"),{color:m?"disabled":y,type:"body4",children:f})]}):i.jsx(b("CometTextWithIcon.react"),{iconAfter:f,children:z}):z;return i.jsx(b("CometMenuFocusGroup").FocusItem,{children:i.jsx(b("CometPressable.react"),babelHelpers["extends"]({},F,{disabled:m,display:"inline",id:p,linkProps:w,onHoverIn:r,onHoverOut:s,onPress:a,onPressIn:t,overlayDisabled:!0,ref:B,role:x,testid:void 0,xstyle:[j.listItem,d&&j.listItemAlignedCenter,o!=null&&j.listItemWithIcon,m&&j.disabled,G&&b("BaseFocusRing.react").focusRingXStyle],children:function(a){var c=a.focused,d=a.focusVisible,f=a.hovered;a=a.pressed;return i.jsxs(b("CometMenuItemHighlightContext").Provider,{value:c&&d||f,children:[o,i.jsxs("div",{className:(h||(h=b("stylex")))(j.content),children:[i.jsx(b("TetraTextPairing.react"),{body:k,bodyColor:g,headline:K,headlineColor:m?"disabled":y,level:4,meta:D,metaColor:C,reduceEmphasis:!0}),e!=null&&i.jsx("div",{className:(h||(h=b("stylex")))(j.aux),children:e})]}),i.jsx(b("CometPressableOverlay.react"),{focusVisible:d||G,hovered:f,pressed:a,radius:4})]})}}))})}c=i.forwardRef(a);e.exports=c}),null);
__d("CometImageIcon.react",["BaseImage_DEPRECATED.react","react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react");function a(a){var c=a.auxiliary,d=a.size;d=d===void 0?24:d;var e=a.src,f=a.style;f=f===void 0?"circle":f;a=a.testid;return i.jsxs("div",{className:"l9j0dhe7",children:[i.jsx(b("BaseImage_DEPRECATED.react"),{className:(h||(h=b("stylex"))).dedupe(f==="circle"?{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv"}:{},{"display-1":"a8c37x1j"},f==="roundedRect"?{"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi"}:null),height:d,src:e,testid:void 0,width:d}),f!=="square"?i.jsx("div",{className:(h||(h=b("stylex"))).dedupe(f==="circle"?{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv"}:{},{"box-shadow-1":"oaz4zybt","position-1":"pmk7jnqg","start-1":"j9ispegn","top-1":"kr520xx4"},f==="roundedRect"?{"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi"}:null),style:{height:d,width:d}}):null,c!=null?i.jsx("div",{className:"pmk7jnqg n7fi1qx3 i09qtzwb",children:c}):null]})}}),null);
__d("CometMenuItemIcon.react",["CometImageIcon.react","IconSource","ImageIconSource","SVGIcon","TetraIcon.react","react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j={contained:{backgroundColor:"tdjehn4e",borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",height:"tv7at329",minWidth:"odlk74j0"},root:{alignItems:"bp9cbjyn",alignSelf:"tiyi1ipj",display:"j83agx80",justifyContent:"taijpn5t",marginEnd:"tvfksri0"}};function a(a){var c=a.disabled,d=a.icon,e=a.iconColor,f=a.iconCssSelectorId;a=a.use;var g=a===void 0?"normal":a;a=i.useMemo(function(){if(d instanceof b("IconSource")){var a;return i.jsx(b("TetraIcon.react"),{color:(a=e)!=null?a:"primary",disabled:c,icon:d})}if(d instanceof b("ImageIconSource"))return i.jsx(b("TetraIcon.react"),{disabled:c,icon:d});if(d instanceof b("SVGIcon").SVGIcon){return i.jsx(b("TetraIcon.react"),{color:(a=e)!=null?a:"primary",disabled:c,icon:d})}return typeof d==="object"&&typeof d!=="function"?i.jsx(b("CometImageIcon.react"),babelHelpers["extends"]({},d,{size:g==="contained"?36:20})):i.jsx(b("TetraIcon.react"),{color:(a=e)!=null?a:"secondary",disabled:c,icon:d})},[c,d,e,g]);return i.jsx("div",{className:(h||(h=b("stylex")))([j.root,(g==="contained"||g==="contained_small_icon")&&j.contained]),id:f,children:a})}c=i.memo(a);e.exports=c}),null);