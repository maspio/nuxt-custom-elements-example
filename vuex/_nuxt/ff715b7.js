(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{199:function(e,t,n){var content=n(201);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(80).default)("712c526a",content,!0,{sourceMap:!1})},200:function(e,t,n){"use strict";n(199)},201:function(e,t,n){var o=n(79)((function(i){return i[1]}));o.push([e.i,'.example[data-v-689c32e7]{position:relative;padding:10px;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;color:#35495e;text-align:center;background:#35495e;border-radius:4px}span[data-v-689c32e7]{font-size:28px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}p[data-v-689c32e7]{font-size:30px;font-weight:700}a[data-v-689c32e7]{display:block;color:#fff;text-decoration:none;text-transform:uppercase;cursor:pointer}.nuxt-link-exact-active.nuxt-link-active[data-v-689c32e7],.router-link-exact-active.router-link-active[data-v-689c32e7]{font-weight:700}.content[data-v-689c32e7]{padding:5px;overflow:hidden;line-height:1.6;color:#35495e;background:#fff}.content>div[data-v-689c32e7]{position:relative;overflow:hidden}.content[data-v-689c32e7] h2{margin:0 0 10px;font-size:24px;font-weight:700;text-transform:uppercase}.router-view-change-enter-active[data-v-689c32e7],.router-view-change-leave-active[data-v-689c32e7]{transition:opacity 0s linear .15s}.router-view-change-enter[data-v-689c32e7],.router-view-change-leave-to[data-v-689c32e7]{position:absolute;width:100%;opacity:0;transition:opacity .15s linear .15s}',""]),e.exports=o},202:function(e,t,n){"use strict";n(200);var o=n(34),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example"},[n("div",{staticClass:"content"},[n("span",{on:{click:function(t){return e.$store.dispatch("example/increment")}}},[e._v("You have pressed "),n("strong",[e._v(e._s(e.$store.getters["example/count"]))]),e._v(" times on the text!")])])])}),[],!1,null,"689c32e7",null);t.a=component.exports},206:function(e,t,n){var map={"./example.js":156};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=206},207:function(e,t,n){"use strict";var o=n(202),r=(n(12),n(25),n(57),n(35),n(1)),c=n(56);r.a.use(c.a);var l,v={store:new c.a.Store({modules:(l=n(206),l.keys().reduce((function(e,t){var n=t.replace(/\.\/(.*)\.js/,"$1");return e[String(n)]=Object.assign({namespaced:!0},l(t)),e}),{}))}),components:{Example:o.a}},d=n(34),component=Object(d.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Example")],1)}),[],!1,null,null,null);t.a=component.exports}}]);