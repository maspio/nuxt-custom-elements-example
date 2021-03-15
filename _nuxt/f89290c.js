/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{196:function(e,t,n){"use strict";n.r(t);var o=n(1);function r(e,t){return e.__proto__=t,e}Object.setPrototypeOf=Object.setPrototypeOf||r;r.bind(Object);var c="undefined"!=typeof Symbol&&"undefined"!=typeof Reflect&&"undefined"!=typeof Proxy&&!Object.isSealed(Proxy),l=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function v(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!=typeof customElements){if(c){var n=function(e){function n(e){f(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this)),o=e?HTMLElement.call(e):t;return r.call(o),d(t,o)}return h(n,e),l(n,null,[{key:"observedAttributes",get:function(){return t.observedAttributes||[]}}]),n}(v);return n.prototype.connectedCallback=m,n.prototype.disconnectedCallback=y,n.prototype.attributeChangedCallback=_,w(e,n),n}var o=function(e){var t=e?HTMLElement.call(e):this;return r.call(t),t};return o.observedAttributes=t.observedAttributes||[],o.prototype=Object.create(HTMLElement.prototype,{constructor:{configurable:!0,writable:!0,value:o}}),o.prototype.connectedCallback=m,o.prototype.disconnectedCallback=y,o.prototype.attributeChangedCallback=_,w(e,o),o}function r(){!0===t.shadow&&HTMLElement.prototype.attachShadow&&this.attachShadow({mode:"open"}),"function"==typeof t.constructorCallback&&t.constructorCallback.call(this)}function m(){"function"==typeof t.connectedCallback&&t.connectedCallback.call(this)}function y(){"function"==typeof t.disconnectedCallback&&t.disconnectedCallback.call(this)}function _(e,n,o){"function"==typeof t.attributeChangedCallback&&t.attributeChangedCallback.call(this,e,n,o)}function w(e,t){var n=customElements.get(e);return void 0!==n?n:customElements.define(e,t)}}Object.setPrototypeOf(v.prototype,HTMLElement.prototype),Object.setPrototypeOf(v,HTMLElement);var y=/-(\w)/g,_=function(e){return e.replace(y,(function(e,t){return t?t.toUpperCase():""}))},w=/([^-])([A-Z])/g,C=function(e){return e.replace(w,"$1-$2").replace(w,"$1-$2").toLowerCase()};function E(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=e.length-t,n=new Array(i);i--;)n[i]=e[i+t];return n}var k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function T(e,t){if(null==e)return t!==Boolean&&void 0;var n=e,o=["true","false"].indexOf(e)>-1,r=parseFloat(n,10),c=!isNaN(r)&&isFinite(n)&&"string"==typeof n&&!n.match(/^0+[^.]\d*$/g);return t&&t!==Boolean&&(void 0===n?"undefined":k(n))!==t?n=t(e):o||t===Boolean?n=""===n||("true"===n||!0===n):c&&(n=r),n}function O(e,t){if(e&&e.length)e.forEach((function(e){var n=_(e);-1===t.camelCase.indexOf(n)&&t.camelCase.push(n)}));else if(e&&"object"===(void 0===e?"undefined":k(e)))for(var n in e){var o=_(n);-1===t.camelCase.indexOf(o)&&t.camelCase.push(o),e[o]&&e[o].type&&(t.types[n]=[].concat(e[o].type)[0])}}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={camelCase:[],hyphenate:[],types:{}};if(e.mixins&&e.mixins.forEach((function(e){O(e.props,t)})),e.extends&&e.extends.props){var n=e.extends.props;O(n,t)}return O(e.props,t),t.camelCase.forEach((function(e){t.hyphenate.push(C(e))})),t}function L(e){var t={};return E(e.attributes).forEach((function(e){t["vue-slot"===e.nodeName?"slot":e.nodeName]=e.nodeValue})),t}function N(e,element,t){var n=E(function(element){if(element.childNodes.length)return element.childNodes;if(element.content&&element.content.childNodes&&element.content.childNodes.length)return element.content.childNodes;var e=document.createElement("div");return e.innerHTML=element.innerHTML,e.childNodes}(element)).map((function(t){return"#text"===t.nodeName?t.nodeValue:e(t.tagName,{attrs:L(t),domProps:{innerHTML:t.innerHTML}})}));return t.slot=element.id,e("template",t,n)}function P(e,t){var n={bubbles:!1,cancelable:!1,detail:t},o=void 0;return"function"==typeof window.CustomEvent?o=new CustomEvent(e,n):(o=document.createEvent("CustomEvent")).initCustomEvent(e,n.bubbles,n.cancelable,n.detail),o}function x(element,e){for(var t=arguments.length,n=Array(t>2?t-2:0),o=2;o<t;o++)n[o-2]=arguments[o];var r=P(e,[].concat(n));element.dispatchEvent(r)}function A(element,e,t,n,o){if(element.__vue_custom_element__)return Promise.resolve(element);var r=e.util.extend({},t),c=function(element,e,t){var n=e.propsData||{};return t.hyphenate.forEach((function(e,o){var r=t.camelCase[o],c=element.attributes[e]||element[r],l=null;t.types[r]&&(l=t.types[r]),c instanceof Attr?n[r]=T(c.value,l):void 0!==c&&(n[r]=c)})),n}(element,r,n),l=e.version&&parseInt(e.version.split(".")[0],10)||0;if(r.beforeCreate=[].concat(r.beforeCreate||[],(function(){this.$emit=function(){for(var e,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];x.apply(void 0,[element].concat(n)),this.__proto__&&(e=this.__proto__.$emit).call.apply(e,[this].concat(n))}})),r._compiled){var f={},d=r._Ctor;d&&(f=Object.keys(d).map((function(e){return d[e]}))[0].options),f.beforeCreate=r.beforeCreate}var h=void 0;if(l>=2){var v=element.cloneNode(!0).childNodes;h={propsData:c,props:n.camelCase,computed:{reactiveProps:function(){var e=this,t={};return n.camelCase.forEach((function(n){void 0!==e[n]&&(t[n]=e[n])})),t}},render:function(e){var data={props:this.reactiveProps};return e(r,data,function(){var e=arguments[1],t=[];return E(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(n){if("#text"===n.nodeName)n.nodeValue.trim()&&t.push(e("span",n.nodeValue));else if("#comment"!==n.nodeName){var o=L(n),r={attrs:o,domProps:{innerHTML:""===n.innerHTML?n.innerText:n.innerHTML}};o.slot&&(r.slot=o.slot,o.slot=void 0);var c="TEMPLATE"===n.tagName?N(e,n,r):e(n.tagName,r);t.push(c)}})),t}(v,e))}}}else if(1===l)(h=r).propsData=c;else{h=r;var m={};Object.keys(c).forEach((function(e){m[e]={default:c[e]}})),h.props=m}var y=l>=2?"<div></div>":("<div>"+element.innerHTML+"</div>").replace(/vue-slot=/g,"slot=");if(o.shadow&&element.shadowRoot?(element.shadowRoot.innerHTML=y,h.el=element.shadowRoot.children[0]):(element.innerHTML=y,h.el=element.children[0]),o.shadow&&o.shadowCss&&element.shadowRoot){var style=document.createElement("style");style.type="text/css",style.appendChild(document.createTextNode(o.shadowCss)),element.shadowRoot.appendChild(style)}return function(element,e){e.camelCase.forEach((function(t,n){Object.defineProperty(element,t,{get:function(){return this.__vue_custom_element__[t]},set:function(t){if("object"!==(void 0===t?"undefined":k(t))&&"function"!=typeof t||!this.__vue_custom_element__){var o=e.types[e.camelCase[n]];this.setAttribute(e.hyphenate[n],T(t,o))}else{var r=e.camelCase[n];this.__vue_custom_element__[r]=t}}})}))}(element,n),"function"==typeof o.beforeCreateVueInstance&&(h=o.beforeCreateVueInstance(h)||h),Promise.resolve(h).then((function(t){return element.__vue_custom_element__=new e(t),element.__vue_custom_element_props__=n,element.getVueInstance=function(){var e=element.__vue_custom_element__;return e.$children.length?e.$children[0]:e},element.removeAttribute("vce-cloak"),element.setAttribute("vce-ready",""),x(element,"vce-ready"),element}))}function S(e){e.customElement=function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r="function"==typeof n,c=r&&{props:o.props||[]},l=M(r?c:n),f=m(t,{constructorCallback:function(){"function"==typeof o.constructorCallback&&o.constructorCallback.call(this)},connectedCallback:function(){var c=this,f=r&&n(),d=f&&f.then&&"function"==typeof f.then;if("function"==typeof o.connectedCallback&&o.connectedCallback.call(this),r&&!d)throw new Error("Async component "+t+" do not returns Promise");this.__detached__||(d?f.then((function(t){var n=M(t);A(c,e,t,n,o).then((function(){"function"==typeof o.vueInstanceCreatedCallback&&o.vueInstanceCreatedCallback.call(c)}))})):A(this,e,n,l,o).then((function(){"function"==typeof o.vueInstanceCreatedCallback&&o.vueInstanceCreatedCallback.call(c)}))),this.__detached__=!1},disconnectedCallback:function(){var e=this;this.__detached__=!0,"function"==typeof o.disconnectedCallback&&o.disconnectedCallback.call(this),null!==o.destroyTimeout&&setTimeout((function(){e.__detached__&&e.__vue_custom_element__&&(e.__detached__=!1,e.__vue_custom_element__.$destroy(!0),delete e.__vue_custom_element__,delete e.__vue_custom_element_props__)}),o.destroyTimeout||3e3)},attributeChangedCallback:function(e,t,n){if(this.__vue_custom_element__&&void 0!==n){var r=_(e);"function"==typeof o.attributeChangedCallback&&o.attributeChangedCallback.call(this,e,t,n);var c=this.__vue_custom_element_props__.types[r];this.__vue_custom_element__[r]=T(n,c)}},observedAttributes:l.hyphenate,shadow:!!o.shadow&&!!HTMLElement.prototype.attachShadow});return f}}"undefined"!=typeof window&&window.Vue&&(window.Vue.use(S),S.installed&&(S.installed=!1));var H=S,j=(n(202),n(205));o.a.use(H),o.a.customElement("custom-element-example","function"==typeof j.a?(new j.a).$options:j.a,{props:{title:"Prop. Example Title"}}),o.a.component("NuxtLink",{extends:o.a.component("RouterLink")})},202:function(e,t){!function(){"use strict";var e="function"==typeof Promise?Promise:function(e){var t,n=[],o=0;return e((function(e){t=e,o=1,n.splice(0).forEach(r)})),{then:r};function r(e){return o?setTimeout(e,0,t):n.push(e),this}},t=function(e,t){var n=function(e){for(var i=0,t=e.length;i<t;i++)o(e[i])},o=function(e){var t=e.target,n=e.attributeName,o=e.oldValue;t.attributeChangedCallback(n,o,t.getAttribute(n))};return function(r,c){var l=r.constructor.observedAttributes;return l&&e(c).then((function(){new t(n).observe(r,{attributes:!0,attributeOldValue:!0,attributeFilter:l});for(var i=0,e=l.length;i<e;i++)r.hasAttribute(l[i])&&o({target:r,attributeName:l[i],oldValue:null})})),r}},n=self,o=n.document,r=n.MutationObserver,c=n.Set,l=n.WeakMap,f=function(element){return"querySelectorAll"in element},filter=[].filter,d=function(e){var t=new l,n=function(t){var n=e.query;if(n.length)for(var i=0,o=t.length;i<o;i++)d(filter.call(t[i].addedNodes,f),!0,n),d(filter.call(t[i].removedNodes,f),!1,n)},d=function n(o,r,l){for(var f,element,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new c,v=function(v,y,i,_){if(!d.has(y=o[i])){if(d.add(y),r)for(var q,w=h(y),C=0,E=l.length;C<E;C++)w.call(y,q=l[C])&&(t.has(y)||t.set(y,new c),(v=t.get(y)).has(q)||(v.add(q),e.handle(y,r,q)));else t.has(y)&&(v=t.get(y),t.delete(y),v.forEach((function(q){e.handle(y,r,q)})));n(m(y),r,l,d)}f=v,element=y},i=0,y=o.length;i<y;i++)v(f,element,i)},h=function(element){return element.matches||element.webkitMatchesSelector||element.msMatchesSelector},v=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];d(t,n,e.query)},m=function(e){return w.length?e.querySelectorAll(w):w},y=new r(n),_=e.root||o,w=e.query;return y.observe(_,{childList:!0,subtree:!0}),v(m(_)),{drop:function(e){for(var i=0,n=e.length;i<n;i++)t.delete(e[i])},flush:function(){n(y.takeRecords())},observer:y,parse:v}},h=self,v=h.document,m=h.Map,y=h.MutationObserver,_=h.Object,w=h.Set,C=h.WeakMap,E=h.Element,k=h.HTMLElement,T=h.Node,O=h.Error,M=h.TypeError,L=h.Reflect,N=self.Promise||e,P=_.defineProperty,x=_.keys,A=_.getOwnPropertyNames,S=_.setPrototypeOf,H=!self.customElements,j=function(element){for(var e=x(element),t=[],n=e.length,i=0;i<n;i++)t[i]=element[e[i]],delete element[e[i]];return function(){for(var o=0;o<n;o++)element[e[o]]=t[o]}};if(H){var I=function(){var e=this.constructor;if(!D.has(e))throw new M("Illegal constructor");var t=D.get(e);if(U)return Z(U,t);var element=$.call(v,t);return Z(S(element,e.prototype),t)},$=v.createElement,D=new m,R=new m,V=new m,B=new m,F=[],J=d({query:F,handle:function(element,e,t){var n=V.get(t);if(e&&!n.isPrototypeOf(element)){var o=j(element);U=S(element,n);try{new n.constructor}finally{U=null,o()}}var r="".concat(e?"":"dis","connectedCallback");r in n&&element[r]()}}).parse,U=null,W=function(t){if(!R.has(t)){var n,o=new e((function(e){n=e}));R.set(t,{$:o,_:n})}return R.get(t).$},Z=t(W,y);P(self,"customElements",{configurable:!0,value:{define:function(e,t){if(B.has(e))throw new O('the name "'.concat(e,'" has already been used with this registry'));D.set(t,e),V.set(e,t.prototype),B.set(e,t),F.push(e),W(e).then((function(){J(v.querySelectorAll(e))})),R.get(e)._(t)},get:function(e){return B.get(e)},whenDefined:W}}),P(I.prototype=k.prototype,"constructor",{value:I}),P(self,"HTMLElement",{configurable:!0,value:I}),P(v,"createElement",{configurable:!0,value:function(e,t){var n=t&&t.is,o=n?B.get(n):B.get(e);return o?new o:$.call(v,e)}}),"isConnected"in T.prototype||P(T.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{var z=function e(){return self.Reflect.construct(HTMLLIElement,[],e)};z.prototype=HTMLLIElement.prototype;var G="extends-li";self.customElements.define("extends-li",z,{extends:"li"}),H=v.createElement("li",{is:G}).outerHTML.indexOf(G)<0;var K=self.customElements,Q=K.get,X=K.whenDefined;P(self.customElements,"whenDefined",{configurable:!0,value:function(e){var t=this;return X.call(this,e).then((function(n){return n||Q.call(t,e)}))}})}catch(e){H=!H}if(H){var Y=function(element){var e=ce.get(element);(0,e.parse)(e.root.querySelectorAll(this),element.isConnected)},ee=self.customElements,te=E.prototype.attachShadow,ne=v.createElement,oe=ee.define,re=ee.get,ae=(L||{construct:function(e){return e.call(this)}}).construct,ce=new C,ie=new w,le=new m,ue=new m,se=new m,fe=new m,de=[],pe=[],he=function(e){return fe.get(e)||re.call(ee,e)},ve=function(element,e,t){var n=se.get(t);if(e&&!n.isPrototypeOf(element)){var o=j(element);ge=S(element,n);try{new n.constructor}finally{ge=null,o()}}var r="".concat(e?"":"dis","connectedCallback");r in n&&element[r]()},me=d({query:pe,handle:ve}).parse,ye=d({query:de,handle:function(element,e){ce.has(element)&&(e?ie.add(element):ie.delete(element),pe.length&&Y.call(pe,element))}}).parse,be=function(e){if(!ue.has(e)){var t,n=new N((function(e){t=e}));ue.set(e,{$:n,_:t})}return ue.get(e).$},_e=t(be,y),ge=null;A(self).filter((function(e){return/^HTML/.test(e)})).forEach((function(e){var t=self[e];function n(){var e=this.constructor;if(!le.has(e))throw new M("Illegal constructor");var n=le.get(e),o=n.is,r=n.tag;if(o){if(ge)return _e(ge,o);var element=ne.call(v,r);return element.setAttribute("is",o),_e(S(element,e.prototype),o)}return ae.call(this,t,[],e)}P(n.prototype=t.prototype,"constructor",{value:n}),P(self,e,{value:n})})),P(v,"createElement",{configurable:!0,value:function(e,t){var n=t&&t.is;if(n){var o=fe.get(n);if(o&&le.get(o).tag===e)return new o}var element=ne.call(v,e);return n&&element.setAttribute("is",n),element}}),te&&P(E.prototype,"attachShadow",{configurable:!0,value:function(){var e=te.apply(this,arguments),t=d({query:pe,root:e,handle:ve}),n=t.parse;return ce.set(this,{root:e,parse:n}),e}}),P(ee,"get",{configurable:!0,value:he}),P(ee,"whenDefined",{configurable:!0,value:be}),P(ee,"define",{configurable:!0,value:function(e,t,n){if(he(e))throw new O("'".concat(e,"' has already been defined as a custom element"));var o,r=n&&n.extends;le.set(t,r?{is:e,tag:r}:{is:"",tag:e}),r?(o="".concat(r,'[is="').concat(e,'"]'),se.set(o,t.prototype),fe.set(e,t),pe.push(o)):(oe.apply(ee,arguments),de.push(o=e)),be(e).then((function(){r?(me(v.querySelectorAll(o)),ie.forEach(Y,[o])):ye(v.querySelectorAll(o))})),ue.get(e)._(t)}})}}()}}]);