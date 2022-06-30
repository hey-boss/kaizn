/*! For license information please see component---src-pages-blog-single-js-e796e476e042a47b93f5.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[543],{5900:function(o,K){var A;!function(){"use strict";var i={}.hasOwnProperty;function e(){for(var o=[],K=0;K<arguments.length;K++){var A=arguments[K];if(A){var t=typeof A;if("string"===t||"number"===t)o.push(A);else if(Array.isArray(A)){if(A.length){var a=e.apply(null,A);a&&o.push(a)}}else if("object"===t)if(A.toString===Object.prototype.toString)for(var n in A)i.call(A,n)&&A[n]&&o.push(n);else o.push(A.toString())}}return o.join(" ")}o.exports?(e.default=e,o.exports=e):void 0===(A=function(){return e}.apply(K,[]))||(o.exports=A)}()},7408:function(o,K,A){"use strict";var i=A(7462),e=A(3366),t=A(5900),a=A.n(t),n=A(7294),l=A(9541),r=["bsPrefix","className","as"],g=["xl","lg","md","sm","xs"],c=n.forwardRef((function(o,K){var A=o.bsPrefix,t=o.className,c=o.as,C=void 0===c?"div":c,s=(0,e.Z)(o,r),m=(0,l.vE)(A,"col"),u=[],F=[];return g.forEach((function(o){var K,A,i,e=s[o];if(delete s[o],"object"==typeof e&&null!=e){var t=e.span;K=void 0===t||t,A=e.offset,i=e.order}else K=e;var a="xs"!==o?"-"+o:"";K&&u.push(!0===K?""+m+a:""+m+a+"-"+K),null!=i&&F.push("order"+a+"-"+i),null!=A&&F.push("offset"+a+"-"+A)})),u.length||u.push(m),n.createElement(C,(0,i.Z)({},s,{ref:K,className:a().apply(void 0,[t].concat(u,F))}))}));c.displayName="Col",K.Z=c},6187:function(o,K,A){"use strict";var i=A(7462),e=A(3366),t=A(5900),a=A.n(t),n=A(7294),l=A(9541),r=["bsPrefix","fluid","as","className"],g=n.forwardRef((function(o,K){var A=o.bsPrefix,t=o.fluid,g=o.as,c=void 0===g?"div":g,C=o.className,s=(0,e.Z)(o,r),m=(0,l.vE)(A,"container"),u="string"==typeof t?"-"+t:"-fluid";return n.createElement(c,(0,i.Z)({ref:K},s,{className:a()(C,t?""+m+u:m)}))}));g.displayName="Container",g.defaultProps={fluid:!1},K.Z=g},994:function(o,K,A){"use strict";var i=A(7462),e=A(3366),t=A(5900),a=A.n(t),n=A(7294),l=A(9541),r=["bsPrefix","className","noGutters","as"],g=["xl","lg","md","sm","xs"],c=n.forwardRef((function(o,K){var A=o.bsPrefix,t=o.className,c=o.noGutters,C=o.as,s=void 0===C?"div":C,m=(0,e.Z)(o,r),u=(0,l.vE)(A,"row"),F=u+"-cols",E=[];return g.forEach((function(o){var K,A=m[o];delete m[o];var i="xs"!==o?"-"+o:"";null!=(K=null!=A&&"object"==typeof A?A.cols:A)&&E.push(""+F+i+"-"+K)})),n.createElement(s,(0,i.Z)({ref:K},m,{className:a().apply(void 0,[t,u,c&&"no-gutters"].concat(E))}))}));c.displayName="Row",c.defaultProps={noGutters:!1},K.Z=c},9541:function(o,K,A){"use strict";A.d(K,{vE:function(){return t}});var i=A(7294),e=i.createContext({});e.Consumer,e.Provider;function t(o,K){var A=(0,i.useContext)(e);return o||A[K]||K}},5978:function(o,K,A){"use strict";var i=A(7294),e=A(4097);K.Z=function(){return i.createElement(i.Fragment,null,i.createElement("aside",{className:"widget search-widget"},i.createElement("form",{method:"post",action:"#",className:"searchform"},i.createElement("input",{type:"search",placeholder:"Search here...",name:"s",id:"s"}))),i.createElement("aside",{className:"widget recent_posts"},i.createElement("h3",{className:"widget_title"},"Latest Posts"),i.createElement("div",{className:"meipaly_post_widget"},e.Qg.map((function(o,K){var A=o.title,e=o.image,t=o.url;return i.createElement("div",{className:"mpw_item",key:K},i.createElement("img",{src:e,alt:""}),i.createElement("a",{href:t},A))})))),i.createElement("aside",{className:"widget categories"},i.createElement("h3",{className:"widget_title"},"Categories"),i.createElement("div",{className:"meipaly_categorie_widget"},i.createElement("ul",null,i.createElement("li",null,i.createElement("a",{href:"#"},"Business")),i.createElement("li",null,i.createElement("a",{href:"#"},"Introductions")),i.createElement("li",null,i.createElement("a",{href:"#"},"One Page Template")),i.createElement("li",null,i.createElement("a",{href:"#"},"Parallax Effects")),i.createElement("li",null,i.createElement("a",{href:"#"},"New Technologies")),i.createElement("li",null,i.createElement("a",{href:"#"},"Video Backgrounds"))))),i.createElement("aside",{className:"widget"},i.createElement("h3",{className:"widget_title"},"Tags:"),i.createElement("div",{className:"meipaly_tagcloude_widget"},i.createElement("a",{href:"#"},"Business,")," ",i.createElement("a",{href:"#"},"Agency,")," ",i.createElement("a",{href:"#"},"Digital,")," ",i.createElement("a",{href:"#"},"Technology,"),i.createElement("a",{href:"#"},"Parallax,")," ",i.createElement("a",{href:"#"},"Innovative,")," ",i.createElement("a",{href:"#"},"Professional,"),i.createElement("a",{href:"#"},"Experience,"))))}},5610:function(o,K,A){"use strict";var i=A(7294),e=A(4097);K.Z=function(){var o=e.yA.light;return i.createElement("footer",{className:"footer_1"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-lg-5 col-sm-6 col-md-5"},i.createElement("aside",{className:"widget aboutwidget text-center"},i.createElement("a",{href:"/"},i.createElement("img",{src:o,alt:""})),i.createElement("p",null,"UTILIZING STATE OF THE ART INTELLIGENT DISINFECTION TECHNOLOGIES, KAIZN CREATES HEALTHY, PRODUCTIVE INTERIOR ENVIRONMENTS."))),i.createElement("div",{className:"col-lg-4 col-sm-4 col-md-4"},i.createElement("aside",{className:"widget contact_widgets"},i.createElement("h3",{className:"widget_title"},"contact"),i.createElement("p",null,i.createElement("a",{href:"/contact"},"info@kaiznpureair.com")))),i.createElement("div",{className:"col-lg-3 col-sm-2 col-md-3"},i.createElement("aside",{className:"widget social_widget"},i.createElement("h3",{className:"widget_title"},"social"),i.createElement("ul",null,i.createElement("li",null,i.createElement("a",{href:"https://www.instagram.com/kaiznpureair/"},i.createElement("i",{className:"fa fa-instagram"}),"Instagram")))))),i.createElement("div",{className:"row"},i.createElement("div",{className:"col-lg-12 col-sm-12 text-center"},i.createElement("div",{className:"copyright"},"© copyright ",(new Date).getFullYear()," by"," ",i.createElement("a",{href:"#"},"Kaiznpureair.com")," "," ","/ Designed by ",i.createElement("a",{href:"https://www.heyboss.us/"},"HEYBOSS"))))))}},5097:function(o,K,A){"use strict";var i=A(7294),e=A(4097),t=A(6187),a=A(994),n=A(7408),l=A(7859),r=A(3530),g=A(5444);K.Z=function(){var o=(0,i.useState)(!1),K=o[0],A=o[1],c=(0,i.useContext)(l.c),C=(c.searchStatus,c.updateSearchStatus,(0,i.useContext)(r.p)),s=C.menuStatus,m=C.updateMenuStatus,u=function(){window.scrollY>70?A(!0):window.scrollY<70&&A(!1)};return(0,i.useEffect)((function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[K]),i.createElement("header",{className:"header_01 "+(!0===K?"fixedHeader animated flipInX":null),id:"header"},i.createElement(t.Z,{fluid:!0},i.createElement(a.Z,{className:"justify-content-between"},i.createElement(n.Z,{className:"col-6",lg:2,md:3,sm:3},i.createElement("div",{className:"logo"},i.createElement(g.Link,{to:"/"},i.createElement("img",{src:e.yA.light,alt:""})))),i.createElement(n.Z,{lg:8,sm:8,md:7,className:"d-none d-lg-block "},i.createElement("nav",{className:"mainmenu text-center"},i.createElement("ul",null,e.H9.map((function(o,K){return i.createElement("li",{key:K,className:void 0!==o.subItems?"menu-item-has-children":""},i.createElement(g.Link,{to:o.url},o.name),void 0!==o.subItems?i.createElement("ul",{className:"sub-menu"},o.subItems.map((function(o,K){return i.createElement("li",{key:K},i.createElement(g.Link,{to:o.url},o.name))}))):null)}))))),i.createElement(n.Z,{lg:2,md:2,sm:4,className:"col-6"},i.createElement("div",{className:"navigator text-right"},i.createElement("a",{href:"#",className:"menu mobilemenu d-none d-md-none d-lg-none"},i.createElement("i",{className:"mei-menu"})),i.createElement("a",{id:"open-overlay-nav",className:"menu hamburger",onClick:function(o){o.preventDefault(),m(!s)},href:"#"},i.createElement("i",{className:"mei-menu"})))))))}},5035:function(o,K,A){"use strict";var i=A(7294);K.Z=function(o){var K=o.title;o.name;return i.createElement("section",{className:"pageBanner"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-lg-12"},i.createElement("div",{className:"banner_content text-center"},i.createElement("h2",null,K))))))}},6286:function(o,K,A){"use strict";A.r(K),A.d(K,{default:function(){return R}});var i=A(7294),e=A(5610),t=A(2728),a=A(5035),n=A(6187),l=A(994),r=A(7408),g=A(5978),c=function(){return i.createElement("div",{className:"post_author"},i.createElement("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAvgCqAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKrTTTLdQIExEzYL5HPBOMfhUd2txGGkS7ZcnCII1PJ6CgC7RVQm4d1gWYK6RhnfaDknjp+Bqa3lMtursPm5BA9RwaAJaKrx3scpiVA+588Y5XHXPpSXc00QTy0+UuoZ8jgEgdKALNFV7hpWmjhifyywZi2M8DHH61H9oka3jCsoleQx7scAjOTj8DQBcoqvbvIHkhlbeyYIbGMg//qNWKACiiigAooooAKKKKACiiigAooooAKKKKAIJ1JktyASBJk4HQbWpsitJfQgqdkal8443dB/WrNFAFWVmgujKI3kV0CnYMkEE/wCNPtkaK1UOPm5ZgOeSc/1qeigDOtEljuzO8RAuckgLzHjpn6j9atXaloAFBJ3ocAf7QqeigCnfKG8vdHKQM/PCTuU//XpiwPBaQMqEtG5coOTg5yPwz+lX6KAK1tukllnZGQNhVDDBwM8/qas0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFRXDvHFlNu4sqjcMjlgP61ELlo3dJcOwIA8sY3E54wT7etAFqioVuFYA7WBL7CCOVPv/AJ70q3EblQhLbmI47Y6/596AJaKhjuVkdQFcK33GI4b6U0XakO3lyBEJXcQMEg4wOc0AWKKg+0qEcsroUxlSOeenT1psMrSXcwKugVE+VvXLc/yoAs0VVedo7yRdkjjy1OF5xy2T/KphOjOqj+Ndyt2IoAkopkcgljDqDg9M9x61V/tGL7D5vnQ+d5W7ZuH3sdMZ9aALtFVna5FysayRAMrMMxk4wRx973pFuiLqaOTasa/db6KCc/n+lAFqiqcd1K0LuyqCJVUDH8LbevvhquUAFFVxJPKWaLy1RWKjcCS2Dg/Tn60skkpm8qHYCFDMzjIGc44/A0AT0VSku5URfkUusmxwOcgKW4/CntdE3UUce0xt95vqpIx+X60AWqKKKAI54RPF5bYxuUkEZzgg4/SmtbLsUQhYijbl2rxnp0+hNTUUAVzbEwSIZP3jtuLgdCMY4/AUsVqsMu9T8u0KFx06ZP6D8qnooAqQWKQSKyiLavTEYDfi1SG1VrZ4WOQzFunq26p6KAKqWYWJ1/dqWIIMcYXBByD781JFC6TSSSSBy4UYC4Axn396mooAryQSGdpY5gm5ApBXPQnnr71HPAGWC2QOAuPmAPC4wefccfjVyigAAwMDpUH2f/Qfs27/AJZeXux7Yzip6KAGGPM6S5+6rLj6kf4VG1rHJ5nmDcHcPjpj5QP6frU9FAFd7cssu1wC8iyAlc4xt9/9mnhZ8ENKmcggqmOM8jknrUtFAEHkSKzeVMFRiSQUzgnrjn/GlkhcyCSKQI+NpyuQR9KmooAgW22mMlyWVy7Ej7x2kfh1/ShbWOPy/LG0I5fHXPykf1/Sp6KACiiigD//2Q==",alt:""}),i.createElement("h3",null,i.createElement("a",{href:"#"},"Christine Eve")),i.createElement("p",null,"Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer nullam condimentum purus."),i.createElement("a",{href:"#"},"View all posts"))},C=function(o){var K=o.data,A=K.image,e=K.name,t=K.date,a=K.content;return i.createElement("div",{className:"single-comment"},i.createElement("img",{src:A,alt:""}),i.createElement("div",{className:"authorDetails"},i.createElement("h5",null,i.createElement("a",{href:"#"},e)),i.createElement("span",null,t)),i.createElement("div",{className:"comment"},i.createElement("p",null,a)),i.createElement("a",{className:"common_btn red_bg",href:"#"},i.createElement("span",null,"Reply")))},s=A(4097),m=function(){return i.createElement(i.Fragment,null,i.createElement("div",{className:"comment_area"},i.createElement("h3",null,s.T2.length," Comments"),i.createElement("ol",null,s.T2.map((function(o,K){return i.createElement("li",{key:K},i.createElement(C,{data:o}))})))),i.createElement("div",{className:"commentForm"},i.createElement("h3",null,"Leave a Comment"),i.createElement("form",{action:"#",method:"post"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-lg-6"},i.createElement("input",{required:"",className:"input-form",type:"text",name:"name",placeholder:"Your Name"})),i.createElement("div",{className:"col-lg-6"},i.createElement("input",{required:"",className:"input-form",type:"email",name:"email",placeholder:"Email Address"})),i.createElement("div",{className:"col-lg-12"},i.createElement("textarea",{required:"",className:"input-form",name:"comment",placeholder:"Write Message"}))),i.createElement("a",{className:"common_btn red_bg",href:"#"},i.createElement("span",null,"Send Message")))))},u=function(){return i.createElement(i.Fragment,null,i.createElement("div",{className:"single_blog"},i.createElement("div",{className:"blog_thumb"},i.createElement("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBnwMCAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApGYIhY9AM0tNkXfGy+oIoAzf7etf8AnnN+Q/xo/t61/wCec35D/Gqv9gS/890/I0f2BL/z3T8jQBa/t61/55zfkP8AGj+3rX/nnN+Q/wAaq/2BL/z3T8jWbNB5VyYEcSMDtyo6n0oA6gXkZsvte1vLxnGOap/29a/885vyH+NTpZt/ZItSwDlME9getZ39gS/890/I0AWv7etf+ec35D/Gj+3rX/nnN+Q/xqr/AGBL/wA90/I0n9gSj/lun5GgC3/b1r/zzm/If41pRuJI1cZwwBGa5BYDJc+REd5LYBHQ+9ddEnlxImc7VAzQASypDGZJGCqOpNZUmvxqxEcDOPUtiqer3bXF2YVOUjOAB3PerNtoIaMNcSMGI+6vagC1a6xb3LhGBic9N3Q/jWjXMahpj2WHVt8ROM45B9619Iuzc2u1zmSPg+47GgDQooooAKKKKACiiigAooooAKKKKACiioLy6W0tmlbkjhR6mgCpfaslnP5Sx+YwGW+bGP0q/DJ50EcuMb1DY9MiuOdmkcu5JZjkk9662y/48bf/AK5L/KgCeiio5LiGH/WSon+8wFACyyCGF5D0RS1VdP1D7f5n7rZsx/FnOc+3tWfquqRzRG3gO4E/M3b6CneHv+Xn/gP9aANuiiigDOl1q2hmeNklJQlSQBjj8aZ/b1r/AM85vyH+NY8cLX2oOisAXZmyfzq9/YEv/PdPyNAFr+3rX/nnN+Q/xq9a3KXcIljDBc4+brWP/YEv/PdPyNathatZ2oiZgxyTkUAWaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA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qAJ+lFFFAFLV/wDkFzf8B/8AQhVHw9/y8/8AAf61e1f/AJBc3/Af/QhVHw9/y8/8B/rQBt1la200UUUkUjoAxDbWI6//AKq1ahurdbq2eFuNw4PoaAKWi3RntmSRy0iHqxySDWnXIsLiwucZaORe47/4irX9uXezGI8/3tvP86ANPWbkQ2TRg/PJwB7d6q6BEf30xHHCg/qf6VmolzqNz1LuerHoo/oK6e1t0tbdYk6DqfU+tAE1FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVVk02zlbc8C59iR/KrVFAEUNrBbjEMSpnqQOT+NS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFADJYYp12yxq49xVb+ybHOfIH/fR/xq5RQAyOKOFdsaKi+ijFPoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiio55DFFuVQx3KoBOOpA/rQBJRVcXO0uJlCMuPundnPTHGe1SLPGyqQ3DNtHB6+ntQBJRTBKhKgMDuJUY9R1/lTUuIpH2K2Tz2OD9D3oAloqEXUJ34c4TO47TgYODzSi4iMbPuwq/e3Agj8DQBLRVeGcTXMqqTtVF4K4IJLZ689hSPdLFdOkjEKI1YAKTjlsnj6CgCzRTRIhcIG+YruHuKEdZF3Kcr60AOoqD7R/oP2nb/yy8zbn2zjNI81wJxEIYjuBYEyEcAj/Z9xQBYoqBLkNdSwlduzo2fvcAn8simR3nmRNJ5eAJVQc9QcYP8A49QBaooqDz5GZvKiDKpwSWxkjrjj/CgCeioZJnEgjijDvjcctgAfWopL3y41YxnO/Y65+7wST78CgC3RUD3IW6ihC7t/Vs/d4JH8jU9ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFRXERmi2A4+ZSeSOAwJ6fSpaKAK7WwUK0I+dW3fOxO7gjk8noaaYJTBJygmdw49ARjH8qtUUAVYLUwS53AoFwB3ycZP6D8zTYLNoXjzysf3WMrHtj7vQVcooArG2LWrxFgCXLggn+9uFMW1fy5MgK5KkEyM/3TkZJ7VcooAghjlE8ksuwblVQFJOMZ/xpskc4uXki8shkC/MTwQTz+tWaKAKM0YVbe3ikxKoABHULjBP+e+KuqoRQqjCgYA9KWigCl/Z0X2HyvJh87ytu/aPvY65x61ZaMm5STjCoyn8Sv+FSUUAVntBKZd7EBn3AqecbQpH86R7d9suzZlpUdQTgYG3jp/s1aooAiBuCDuSJTkYw5bjPPYdqYEniLLF5bIzFhuJBXJye3PP0qxRQBBJHKJvNh2ElQrK5wDjOOfxNNFu+UZypbzC7+n3SuB+lWaKAKyWgiMWxiQr7iWPONpUD+VWaKKACiiigD//Z",alt:""})),i.createElement("div",{className:"blog_headings"},i.createElement("span",{className:"blog_date"},"20 nov"),i.createElement("h2",null,"Become the best sale marketer"),i.createElement("p",{className:"blog_metas"},i.createElement("a",{href:"#"},"By layerdrops"),"-",i.createElement("a",{href:"#"},"30 Likes"),"-",i.createElement("a",{href:"#"},"2 Comments"))),i.createElement("div",{className:"blog_details"},i.createElement("p",null,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."),i.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.")),i.createElement("div",{className:"blog_tagitems"},i.createElement("span",null,"Tags:"),i.createElement("a",{href:"#"},"Business"),", ",i.createElement("a",{href:"#"},"Agency"),","," ",i.createElement("a",{href:"#"},"Digital"),", ",i.createElement("a",{href:"#"},"Technology")),i.createElement(c,null),i.createElement(m,null)))},F=function(){return i.createElement("section",{className:"commonSection blogDetails"},i.createElement(n.Z,null,i.createElement(l.Z,null,i.createElement(r.Z,{lg:8},i.createElement(u,null)),i.createElement(r.Z,{lg:4,className:"sidebar"},i.createElement(g.Z,null)))))},E=A(3530),d=A(7859),U=A(5097),R=function(){return i.createElement(E.Z,null,i.createElement(d.Z,null,i.createElement(t.Z,{PageTitle:"Blog Details Page"},i.createElement(U.Z,null),i.createElement(a.Z,{title:"Blog Details",name:"Blog"}),i.createElement(F,null),i.createElement(e.Z,null))))}},7462:function(o,K,A){"use strict";function i(){return i=Object.assign||function(o){for(var K=1;K<arguments.length;K++){var A=arguments[K];for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&(o[i]=A[i])}return o},i.apply(this,arguments)}A.d(K,{Z:function(){return i}})},3366:function(o,K,A){"use strict";function i(o,K){if(null==o)return{};var A,i,e={},t=Object.keys(o);for(i=0;i<t.length;i++)A=t[i],K.indexOf(A)>=0||(e[A]=o[A]);return e}A.d(K,{Z:function(){return i}})}}]);
//# sourceMappingURL=component---src-pages-blog-single-js-e796e476e042a47b93f5.js.map