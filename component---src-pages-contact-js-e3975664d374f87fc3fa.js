/*! For license information please see component---src-pages-contact-js-e3975664d374f87fc3fa.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[501],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},7408:function(e,t,n){"use strict";var r=n(7462),a=n(3366),o=n(5900),s=n.n(o),i=n(7294),l=n(9541),c=["bsPrefix","className","as"],u=["xl","lg","md","sm","xs"],m=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,m=e.as,d=void 0===m?"div":m,f=(0,a.Z)(e,c),p=(0,l.vE)(n,"col"),v=[],g=[];return u.forEach((function(e){var t,n,r,a=f[e];if(delete f[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var s="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+p+s:""+p+s+"-"+t),null!=r&&g.push("order"+s+"-"+r),null!=n&&g.push("offset"+s+"-"+n)})),v.length||v.push(p),i.createElement(d,(0,r.Z)({},f,{ref:t,className:s().apply(void 0,[o].concat(v,g))}))}));m.displayName="Col",t.Z=m},6187:function(e,t,n){"use strict";var r=n(7462),a=n(3366),o=n(5900),s=n.n(o),i=n(7294),l=n(9541),c=["bsPrefix","fluid","as","className"],u=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,u=e.as,m=void 0===u?"div":u,d=e.className,f=(0,a.Z)(e,c),p=(0,l.vE)(n,"container"),v="string"==typeof o?"-"+o:"-fluid";return i.createElement(m,(0,r.Z)({ref:t},f,{className:s()(d,o?""+p+v:p)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.Z=u},994:function(e,t,n){"use strict";var r=n(7462),a=n(3366),o=n(5900),s=n.n(o),i=n(7294),l=n(9541),c=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],m=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,m=e.noGutters,d=e.as,f=void 0===d?"div":d,p=(0,a.Z)(e,c),v=(0,l.vE)(n,"row"),g=v+"-cols",h=[];return u.forEach((function(e){var t,n=p[e];delete p[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&h.push(""+g+r+"-"+t)})),i.createElement(f,(0,r.Z)({ref:t},p,{className:s().apply(void 0,[o,v,m&&"no-gutters"].concat(h))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.Z=m},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return o}});var r=n(7294),a=r.createContext({});a.Consumer,a.Provider;function o(e,t){var n=(0,r.useContext)(a);return e||n[t]||t}},5610:function(e,t,n){"use strict";var r=n(7294),a=n(4097);t.Z=function(){var e=a.yA.light;return r.createElement("footer",{className:"footer_1"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-5 col-sm-6 col-md-5"},r.createElement("aside",{className:"widget aboutwidget text-center"},r.createElement("a",{href:"/"},r.createElement("img",{src:e,alt:""})),r.createElement("p",null,"UTILIZING STATE OF THE ART INTELLIGENT DISINFECTION TECHNOLOGIES, KAIZN CREATES HEALTHY, PRODUCTIVE INTERIOR ENVIRONMENTS."))),r.createElement("div",{className:"col-lg-4 col-sm-4 col-md-4"},r.createElement("aside",{className:"widget contact_widgets"},r.createElement("h3",{className:"widget_title"},"contact"),r.createElement("p",null,r.createElement("a",{href:"/contact"},"info@kaiznpureair.com")))),r.createElement("div",{className:"col-lg-3 col-sm-2 col-md-3"},r.createElement("aside",{className:"widget social_widget"},r.createElement("h3",{className:"widget_title"},"social"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://www.instagram.com/kaiznpureair/"},r.createElement("i",{className:"fa fa-instagram"}),"Instagram")))))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-12 col-sm-12 text-center"},r.createElement("div",{className:"copyright"},"© copyright ",(new Date).getFullYear()," by"," ",r.createElement("a",{href:"#"},"Kaiznpureair.com")," "," ","/ Designed by ",r.createElement("a",{href:"https://www.heyboss.us/"},"HEYBOSS"))))))}},5097:function(e,t,n){"use strict";var r=n(7294),a=n(4097),o=n(6187),s=n(994),i=n(7408),l=n(7859),c=n(3530),u=n(5444);t.Z=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],m=(0,r.useContext)(l.c),d=(m.searchStatus,m.updateSearchStatus,(0,r.useContext)(c.p)),f=d.menuStatus,p=d.updateMenuStatus,v=function(){window.scrollY>70?n(!0):window.scrollY<70&&n(!1)};return(0,r.useEffect)((function(){return window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[t]),r.createElement("header",{className:"header_01 "+(!0===t?"fixedHeader animated flipInX":null),id:"header"},r.createElement(o.Z,{fluid:!0},r.createElement(s.Z,{className:"justify-content-between"},r.createElement(i.Z,{className:"col-6",lg:2,md:3,sm:3},r.createElement("div",{className:"logo"},r.createElement(u.Link,{to:"/"},r.createElement("img",{src:a.yA.light,alt:""})))),r.createElement(i.Z,{lg:8,sm:8,md:7,className:"d-none d-lg-block "},r.createElement("nav",{className:"mainmenu text-center"},r.createElement("ul",null,a.H9.map((function(e,t){return r.createElement("li",{key:t,className:void 0!==e.subItems?"menu-item-has-children":""},r.createElement(u.Link,{to:e.url},e.name),void 0!==e.subItems?r.createElement("ul",{className:"sub-menu"},e.subItems.map((function(e,t){return r.createElement("li",{key:t},r.createElement(u.Link,{to:e.url},e.name))}))):null)}))))),r.createElement(i.Z,{lg:2,md:2,sm:4,className:"col-6"},r.createElement("div",{className:"navigator text-right"},r.createElement("a",{href:"#",className:"menu mobilemenu d-none d-md-none d-lg-none"},r.createElement("i",{className:"mei-menu"})),r.createElement("a",{id:"open-overlay-nav",className:"menu hamburger",onClick:function(e){e.preventDefault(),p(!f)},href:"#"},r.createElement("i",{className:"mei-menu"})))))))}},5035:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.title;e.name;return r.createElement("section",{className:"pageBanner"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-12"},r.createElement("div",{className:"banner_content text-center"},r.createElement("h2",null,t))))))}},4954:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ce}});var r=n(7294),a=n(5610),o=n(2728),s=n(4097),i={_origin:"https://api.emailjs.com"},l=function(e,t,n){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var m=u((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText})),d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,a){var o=new XMLHttpRequest;o.addEventListener("load",(function(e){var t=e.target,n=new m(t);200===n.status||"OK"===n.text?r(n):a(n)})),o.addEventListener("error",(function(e){var t=e.target;a(new m(t))})),o.open("POST",i._origin+e,!0),Object.keys(n).forEach((function(e){o.setRequestHeader(e,n[e])})),o.send(t)}))},f=function(e,t,n,r){var a=r||i._userID,o=function(e){var t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);l(a,e,t);var s=new FormData(o);return s.append("lib_version","3.2.0"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",a),d("/api/v1.0/email/send-form",s)};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=n(3366);function g(e,t){if(null==e)return{};var n,r,a=(0,v.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=n(181);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(l){i=!0,a=l}finally{try{s||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||(0,h.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=n(2982);function b(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function T(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(r&&(r+=" "),r+=t);return r}var N=["delay","staleId"],O=["theme","type"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){return"number"==typeof e&&!isNaN(e)}function I(e){return"boolean"==typeof e}function x(e){return"string"==typeof e}function L(e){return"function"==typeof e}function P(e){return x(e)||L(e)?e:null}function R(e){return 0===e||e}function S(e){return(0,r.isValidElement)(e)||x(e)||L(e)||C(e)}var k={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},D={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function A(e){var t=e.enter,n=e.exit,a=e.appendPosition,o=void 0!==a&&a,s=e.collapse,i=void 0===s||s,l=e.collapseDuration,c=void 0===l?300:l;return function(e){var a=e.children,s=e.position,l=e.preventExitTransition,u=e.done,m=e.nodeRef,d=e.isIn,f=o?t+"--"+s:t,p=o?n+"--"+s:n,v=(0,r.useRef)(),g=(0,r.useRef)(0);function h(e){if(e.target===m.current){var t=m.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===g.current&&"animationcancel"!==e.type&&(t.className=v.current)}}function y(){var e=m.current;e.removeEventListener("animationend",y),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=r+"px",a.transition="all "+n+"ms",requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()}return(0,r.useLayoutEffect)((function(){var e;e=m.current,v.current=e.className,e.className+=" "+f,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}),[]),(0,r.useEffect)((function(){d||(l?y():function(){g.current=1;var e=m.current;e.className+=" "+p,e.addEventListener("animationend",y)}())}),[d]),r.createElement(r.Fragment,null,a)}}function j(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var M={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var a=setTimeout((function(){r.apply(void 0,(0,E.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}};function B(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=y(t,2)[1],a=y((0,r.useState)([]),2),o=a[0],s=a[1],i=(0,r.useRef)(null),l=(0,r.useRef)(new Map).current,c=function(e){return-1!==o.indexOf(e)},u=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:c,getToast:function(e){return l.get(e)}}).current;function m(e){var t=e.containerId;!u.props.limit||t&&u.containerId!==t||(u.count-=u.queue.length,u.queue=[])}function d(e){s((function(t){return R(e)?t.filter((function(t){return t!==e})):[]}))}function f(){var e=u.queue.shift();v(e.toastContent,e.toastProps,e.staleId)}function p(e,t){var a=t.delay,o=t.staleId,s=g(t,N);if(S(e)&&!function(e){return!i.current||u.props.enableMultiContainer&&e.containerId!==u.props.containerId||l.has(e.toastId)&&null==e.updateId}(s)){var c=s.toastId,m=s.updateId,p=s.data,h=u.props,y=function(){return d(c)},E=null==m;E&&u.count++;var b,T,O={toastId:c,updateId:m,containerId:s.containerId,isLoading:s.isLoading,theme:s.theme||h.theme,icon:null!=s.icon?s.icon:h.icon,isIn:!1,key:s.key||u.toastKey++,type:s.type,closeToast:y,closeButton:s.closeButton,rtl:h.rtl,position:s.position||h.position,transition:s.transition||h.transition,className:P(s.className||h.toastClassName),bodyClassName:P(s.bodyClassName||h.bodyClassName),style:s.style||h.toastStyle,bodyStyle:s.bodyStyle||h.bodyStyle,onClick:s.onClick||h.onClick,pauseOnHover:I(s.pauseOnHover)?s.pauseOnHover:h.pauseOnHover,pauseOnFocusLoss:I(s.pauseOnFocusLoss)?s.pauseOnFocusLoss:h.pauseOnFocusLoss,draggable:I(s.draggable)?s.draggable:h.draggable,draggablePercent:s.draggablePercent||h.draggablePercent,draggableDirection:s.draggableDirection||h.draggableDirection,closeOnClick:I(s.closeOnClick)?s.closeOnClick:h.closeOnClick,progressClassName:P(s.progressClassName||h.progressClassName),progressStyle:s.progressStyle||h.progressStyle,autoClose:!s.isLoading&&(b=s.autoClose,T=h.autoClose,!1===b||C(b)&&b>0?b:T),hideProgressBar:I(s.hideProgressBar)?s.hideProgressBar:h.hideProgressBar,progress:s.progress,role:s.role||h.role,deleteToast:function(){var e=j(l.get(c),"removed");l.delete(c),M.emit(4,e);var t=u.queue.length;if(u.count=R(c)?u.count-1:u.count-u.displayedToast,u.count<0&&(u.count=0),t>0){var r=R(c)?1:u.props.limit;if(1===t||1===r)u.displayedToast++,f();else{var a=r>t?t:r;u.displayedToast=a;for(var o=0;o<a;o++)f()}}else n()}};L(s.onOpen)&&(O.onOpen=s.onOpen),L(s.onClose)&&(O.onClose=s.onClose),O.closeButton=h.closeButton,!1===s.closeButton||S(s.closeButton)?O.closeButton=s.closeButton:!0===s.closeButton&&(O.closeButton=!S(h.closeButton)||h.closeButton);var w=e;(0,r.isValidElement)(e)&&!x(e.type)?w=(0,r.cloneElement)(e,{closeToast:y,toastProps:O,data:p}):L(e)&&(w=e({closeToast:y,toastProps:O,data:p})),h.limit&&h.limit>0&&u.count>h.limit&&E?u.queue.push({toastContent:w,toastProps:O,staleId:o}):C(a)?setTimeout((function(){v(w,O,o)}),a):v(w,O,o)}}function v(e,t,n){var r=t.toastId;n&&l.delete(n);var a={content:e,props:t};l.set(r,a),s((function(e){return[].concat((0,E.Z)(e),[r]).filter((function(e){return e!==n}))})),M.emit(4,j(a,null==a.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return u.containerId=e.containerId,M.cancelEmit(3).on(0,p).on(1,(function(e){return i.current&&d(e)})).on(5,m).emit(2,u),function(){return M.emit(3,u)}}),[]),(0,r.useEffect)((function(){u.props=e,u.isToastActive=c,u.displayedToast=o.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:i,isToastActive:c}}function Z(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function F(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function H(e){var t=y((0,r.useState)(!1),2),n=t[0],a=t[1],o=y((0,r.useState)(!1),2),s=o[0],i=o[1],l=(0,r.useRef)(null),c=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,u=(0,r.useRef)(e),m=e.autoClose,d=e.pauseOnHover,f=e.closeToast,p=e.onClick,v=e.closeOnClick;function g(t){if(e.draggable){c.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",N),document.addEventListener("touchmove",T),document.addEventListener("touchend",N);var n=l.current;c.canCloseOnClick=!0,c.canDrag=!0,c.boundingRect=n.getBoundingClientRect(),n.style.transition="",c.x=Z(t.nativeEvent),c.y=F(t.nativeEvent),"x"===e.draggableDirection?(c.start=c.x,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=c.y,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(){if(c.boundingRect){var t=c.boundingRect,n=t.top,r=t.bottom,a=t.left,o=t.right;e.pauseOnHover&&c.x>=a&&c.x<=o&&c.y>=n&&c.y<=r?b():E()}}function E(){a(!0)}function b(){a(!1)}function T(t){var r=l.current;c.canDrag&&r&&(c.didMove=!0,n&&b(),c.x=Z(t),c.y=F(t),c.delta="x"===e.draggableDirection?c.x-c.start:c.y-c.start,c.start!==c.x&&(c.canCloseOnClick=!1),r.style.transform="translate"+e.draggableDirection+"("+c.delta+"px)",r.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function N(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",N),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",N);var t=l.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,r.useEffect)((function(){u.current=e})),(0,r.useEffect)((function(){return l.current&&l.current.addEventListener("d",E,{once:!0}),L(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=u.current;L(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||b(),window.addEventListener("focus",E),window.addEventListener("blur",b)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",b))}}),[e.pauseOnFocusLoss]);var O={onMouseDown:g,onTouchStart:g,onMouseUp:h,onTouchEnd:h};return m&&d&&(O.onMouseEnter=b,O.onMouseLeave=E),v&&(O.onClick=function(e){p&&p(e),c.canCloseOnClick&&f()}),{playToast:E,pauseToast:b,isRunning:n,preventExitTransition:s,toastRef:l,eventHandlers:O}}function z(e){var t=e.closeToast,n=e.theme,a=e.ariaLabel,o=void 0===a?"close":a;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function q(e){var t=e.delay,n=e.isRunning,a=e.closeToast,o=e.type,s=e.hide,i=e.className,l=e.style,c=e.controlledProgress,u=e.progress,m=e.rtl,d=e.isIn,f=e.theme,v=_(_({},l),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:s?0:1});c&&(v.transform="scaleX("+u+")");var g=T("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+f,"Toastify__progress-bar--"+o,{"Toastify__progress-bar--rtl":m}),h=L(i)?i({rtl:m,type:o,defaultClassName:g}):T(g,i);return r.createElement("div",p({role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:h,style:v},c&&u>=1?"onTransitionEnd":"onAnimationEnd",c&&u<1?null:function(){d&&a()}))}q.defaultProps={type:D.DEFAULT,hide:!1};var V=function(e){var t=e.theme,n=e.type,a=g(e,O);return r.createElement("svg",_({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},a))},G={info:function(e){return r.createElement(V,_({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(V,_({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(V,_({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(V,_({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}},U=function(e){var t=H(e),n=t.isRunning,a=t.preventExitTransition,o=t.toastRef,s=t.eventHandlers,i=e.closeButton,l=e.children,c=e.autoClose,u=e.onClick,m=e.type,d=e.hideProgressBar,f=e.closeToast,p=e.transition,v=e.position,g=e.className,h=e.style,y=e.bodyClassName,E=e.bodyStyle,b=e.progressClassName,N=e.progressStyle,O=e.updateId,w=e.role,C=e.progress,I=e.rtl,P=e.toastId,R=e.deleteToast,S=e.isIn,k=e.isLoading,D=e.icon,A=e.theme,j=T("Toastify__toast","Toastify__toast-theme--"+A,"Toastify__toast--"+m,{"Toastify__toast--rtl":I}),M=L(g)?g({rtl:I,position:v,type:m,defaultClassName:j}):T(j,g),B=!!C,Z=G[m],F={theme:A,type:m},z=Z&&Z(F);return!1===D?z=void 0:L(D)?z=D(F):r.isValidElement(D)?z=r.cloneElement(D,F):x(D)?z=D:k&&(z=G.spinner()),r.createElement(p,{isIn:S,done:R,position:v,preventExitTransition:a,nodeRef:o},r.createElement("div",_(_({id:P,onClick:u,className:M},s),{},{style:h,ref:o}),r.createElement("div",_(_({},S&&{role:w}),{},{className:L(y)?y({type:m}):T("Toastify__toast-body",y),style:E}),z&&r.createElement("div",{className:T("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},z),r.createElement("div",null,l)),function(e){if(e){var t={closeToast:f,type:m,theme:A};return L(e)?e(t):r.isValidElement(e)?r.cloneElement(e,t):void 0}}(i),(c||B)&&r.createElement(q,_(_({},O&&!B?{key:"pb-"+O}:{}),{},{rtl:I,theme:A,delay:c,isRunning:n,isIn:S,closeToast:f,hide:d,type:m,style:N,className:b,controlledProgress:B,progress:C}))))},Y=A({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),Q=(A({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),A({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),A({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,r.forwardRef)((function(e,t){var n=B(e),a=n.getToastToRender,o=n.containerRef,s=n.isToastActive,i=e.className,l=e.style,c=e.rtl,u=e.containerId;function m(e){var t=T("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":c});return L(i)?i({position:e,rtl:c,defaultClassName:t}):T(t,P(i))}return(0,r.useEffect)((function(){t&&(t.current=o.current)}),[]),r.createElement("div",{ref:o,className:"Toastify",id:u},a((function(e,t){var n=t.length?_({},l):_(_({},l),{},{pointerEvents:"none"});return r.createElement("div",{className:m(e),style:n,key:"container-"+e},t.map((function(e,n){var a=e.content,o=e.props;return r.createElement(U,_(_({},o),{},{isIn:s(o.toastId),style:{"--nth":n+1,"--len":t.length},key:"toast-"+o.key,closeButton:!0===o.closeButton?z:o.closeButton}),a)})))})))})));Q.displayName="ToastContainer",Q.defaultProps={position:k.TOP_RIGHT,transition:Y,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:z,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var K,W=new Map,X=[];function J(){return Math.random().toString(36).substring(2,9)}function $(e){return e&&(x(e.toastId)||C(e.toastId))?e.toastId:J()}function ee(e,t){return W.size>0?M.emit(0,e,t):X.push({content:e,options:t}),t.toastId}function te(e,t){return _(_({},t),{},{type:t&&t.type||e,toastId:$(t)})}function ne(e){return function(t,n){return ee(t,te(e,n))}}function re(e,t){return ee(e,te(D.DEFAULT,t))}re.loading=function(e,t){return ee(e,te(D.DEFAULT,_({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},re.promise=function(e,t,n){var r,a=t.pending,o=t.error,s=t.success;a&&(r=x(a)?re.loading(a,n):re.loading(a.render,_(_({},n),a)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=function(e,t,a){if(null!=t){var o=_(_(_({type:e},i),n),{},{data:a}),s=x(t)?{render:t}:t;return r?re.update(r,_(_({},o),s)):re(s.render,_(_({},o),s)),a}re.dismiss(r)},c=L(e)?e():e;return c.then((function(e){return l("success",s,e)})).catch((function(e){return l("error",o,e)})),c},re.success=ne(D.SUCCESS),re.info=ne(D.INFO),re.error=ne(D.ERROR),re.warning=ne(D.WARNING),re.warn=re.warning,re.dark=function(e,t){return ee(e,te(D.DEFAULT,_({theme:"dark"},t)))},re.dismiss=function(e){return M.emit(1,e)},re.clearWaitingQueue=function(e){return void 0===e&&(e={}),M.emit(5,e)},re.isActive=function(e){var t=!1;return W.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},re.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=W.get(n||K);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,a=n.content,o=_(_(_({},r),t),{},{toastId:t.toastId||e,updateId:J()});o.toastId!==e&&(o.staleId=e);var s=o.render||a;delete o.render,ee(s,o)}}),0)},re.done=function(e){re.update(e,{progress:1})},re.onChange=function(e){return M.on(4,e),function(){M.off(4,e)}},re.POSITION=k,re.TYPE=D,M.on(2,(function(e){K=e.containerId||e,W.set(K,e),X.forEach((function(e){M.emit(0,e.content,e.options)})),X=[]})).on(3,(function(e){W.delete(e.containerId||e),0===W.size&&M.off(0).off(1).off(5)}));n(5444);var ae=function(){var e=s.yl.subTitle,t=s.yl.title,n=s.yl.description;return r.createElement("section",{className:"commonSection ContactPage"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-12 text-center"},r.createElement("h4",{className:"sub_title"},e),r.createElement("h2",{className:"sec_title"},t),r.createElement("p",{className:"sec_desc"},n))),r.createElement(Q,null),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1"},r.createElement("form",{onSubmit:function(e){e.preventDefault(),f("outlook","template_a3m01jh",e.target,"2Dx_QYicKvY_TsVDg").then((function(t){re.success("Successfully Emailed",{position:"bottom-left"}),e.target.reset()}),(function(e){console.log(e.text),re.error(" Failed to email",{position:"bottom-left"})}))}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-6 col-sm-6"},r.createElement("input",{className:"input-form required",type:"text",name:"firstName",id:"firstName",placeholder:"First Name"})),r.createElement("div",{className:"col-lg-6 col-sm-6"},r.createElement("input",{className:"input-form required",type:"text",name:"lastName",id:"lastName",placeholder:"Last Name"})),r.createElement("div",{className:"col-lg-6 col-sm-6"},r.createElement("input",{className:"input-form required",type:"email",name:"email",id:"email",placeholder:"Email Address"})),r.createElement("div",{className:"col-lg-6 col-sm-6"},r.createElement("input",{className:"input-form",type:"text",name:"phone",id:"phone",placeholder:"Phone Number"})),r.createElement("div",{className:"col-lg-12 col-sm-12"},r.createElement("textarea",{className:"input-form required",name:"message",id:"message",placeholder:"Write Message"}))),r.createElement("button",{className:"common_btn red_bg",type:"submit",id:"con_submit"},r.createElement("span",null,"Send Message")))))))},oe=n(5035),se=n(7859),ie=n(3530),le=n(5097),ce=function(){return r.createElement(ie.Z,null,r.createElement(se.Z,null,r.createElement(o.Z,{PageTitle:"Contact Page"},r.createElement(le.Z,null),r.createElement(oe.Z,{title:"Contact Us",name:"Contact"}),r.createElement(ae,null),r.createElement(a.Z,null))))}},7462:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-contact-js-e3975664d374f87fc3fa.js.map