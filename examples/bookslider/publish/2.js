(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{107:function(e,t,n){"use strict";n.r(t);n(113),n(117),n(121);var i=n(108),a=Object(i.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("ZHB Bookslider")])])}],!1,null,null,null).exports,r=Object(i.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Neuerwerbungen")])])}],!1,null,null,null).exports,o=Object(i.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Musik in der Literatur")])])}],!1,null,null,null).exports,l=Object(i.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Brandstifter im Weissen Haus")])])}],!1,null,null,null).exports,s=n(122),c=[{title:"👩‍💻",path:"/",component:a},{title:"Neu",path:"/view-1",component:r},{title:"Musik in der Literatur",path:"/view-2",component:o},{title:"Brandstifter im Weissen Haus",path:"/view-3",component:l}],u={router:Object(s.a)(c),props:{title:{type:String,default:null},debug:{type:Boolean,default:null},viewSelector:{type:Boolean,default:null},filterSelector:{type:Boolean,default:null},viewPre:{type:String,default:null},height:{type:Number,default:null},breakpoints:{type:Number,default:null}},computed:{config:function(){return{debug:this.debug||!1,viewSelector:this.viewSelector||!0,filterSelector:this.filterSelector||!0,viewPre:this.viewPre||"123",height:this.height||400,breakpoints:this.breakpoints||"{s:500px,m:800px,l:1000px}"}},links:function(){return this.$router.options.routes.map((function(e){return{title:c.find((function(t){var n=t.path;return e.path===n})).title,to:e}}))}}},v=(n(133),{components:{ZhbBookslider:Object(i.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bookslider"},[n("nav",{staticClass:"navigation"},[n("ul",e._l(e.links,(function(t){return n("li",{key:t.title},[n("router-link",{attrs:{to:t.to,title:t.title}},[e._v("\n          "+e._s(t.title)+"\n        ")])],1)})),0)]),e._v(" "),n("div",{staticClass:"content"},[n("div",[n("transition",{attrs:{name:"router-view-change"}},[n("keep-alive",[n("router-view")],1)],1)],1)]),e._v(" "),e.config.debug?n("div",{staticClass:"content"},[n("h3",[e._v("Config")]),e._v(" "),n("div",[n("span",[e._v("debug="+e._s(e.config.debug))])]),e._v(" "),n("div",[n("span",[e._v("viewSelector="+e._s(e.config.viewSelector))])]),e._v(" "),n("div",[n("span",[e._v("filterSelector="+e._s(e.config.filterSelector))])]),e._v(" "),n("div",[n("span",[e._v("viewPre="+e._s(e.config.viewPre))])]),e._v(" "),n("div",[n("span",[e._v("height="+e._s(e.config.height))])]),e._v(" "),n("div",[n("span",[e._v("breakpoints="+e._s(e.config.breakpoints))])])]):e._e()])}),[],!1,null,"59391e3c",null).exports}}),d=Object(i.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("ZhbBookslider")],1)}),[],!1,null,null,null);t.default=d.exports},112:function(e,t,n){var i=n(134);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(136).default)("755adec9",i,!0,{sourceMap:!1})},122:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));n(111),n(127);var i=n(14),a=n(132);function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"abstract",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o(),i=new a.a({mode:t,base:n,routes:e});return"abstract"===t&&i.replace("/"),i}function o(){return e.__CUSTOM_ELEMENT_ROUTER_BASE__||e.location&&e.location.pathname||"/"}i.a.use(a.a)}).call(this,n(11))},133:function(e,t,n){"use strict";n(112)},134:function(e,t,n){var i=n(135)((function(e){return e[1]}));i.push([e.i,'.bookslider[data-v-59391e3c]{position:relative;padding:10px;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:14px;color:#35495e;text-align:center;background:#35495e;border-radius:4px}nav[data-v-59391e3c]{display:flex;padding:5px 10px;margin-bottom:10px;color:#fff;background:#3b8070}nav>span[data-v-59391e3c]{padding-right:10px}ul[data-v-59391e3c]{display:flex;flex:1;padding:0;margin:0;list-style:none}ul li[data-v-59391e3c]{padding:0 10px}a[data-v-59391e3c]{display:block;color:#fff;text-decoration:none;text-transform:uppercase;cursor:pointer}.nuxt-link-exact-active.nuxt-link-active[data-v-59391e3c],.router-link-exact-active.router-link-active[data-v-59391e3c]{font-weight:700}.content[data-v-59391e3c]{padding:5px;overflow:hidden;line-height:1.6;color:#35495e;background:#fff}.content>div[data-v-59391e3c]{position:relative;overflow:hidden}.content[data-v-59391e3c] h2{margin:0 0 10px;font-size:18px;font-weight:700;text-transform:uppercase}.router-view-change-enter-active[data-v-59391e3c],.router-view-change-leave-active[data-v-59391e3c]{transition:opacity 0s linear .15s}.router-view-change-enter[data-v-59391e3c],.router-view-change-leave-to[data-v-59391e3c]{position:absolute;width:100%;opacity:0;transition:opacity .15s linear .15s}',""]),i.locals={},e.exports=i}}]);