(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{207:function(e,s,t){},339:function(e,s,t){"use strict";t(35),t(27),t(84),t(86);s.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{metaInfo:function(){var s=this.$page.article,t=s.title,_=s.summary,a=s.img,n=_?_.replace(/(<([^>]+)>)/gi,""):"",r=[{name:"title",content:t},{name:"description",content:n},{property:"og:title",content:t},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:t},{name:"twitter:description",content:n}];if(a){var i="https://nowickilab.science"+a.srcset[1].split(" ")[0];r.push({property:"og:image",content:i},{name:"twitter:image",content:i})}return{title:"".concat(t).concat(e),titleTemplate:"%s",description:n,meta:r}}}}},340:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(37),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(38),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(83),core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(347),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__),C_Users_ja03_NowickiLab_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(348),chart_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(349),chart_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);__webpack_exports__.a={mounted:function mounted(){var _this=this;return Object(C_Users_ja03_NowickiLab_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.a)(regeneratorRuntime.mark((function _callee(){var canvases;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_this.$nextTick();case 2:canvases=_this.$refs.content.querySelectorAll("canvas"),canvases.forEach((function(canvas){var id=canvas.id,configEl=_this.$refs.content.querySelector('script[data-canvas="'.concat(id,'"]'));if(!configEl)throw Error('Brakuje tagu <script> z data-canvas="'.concat(id,'"'));var config=eval(configEl.innerHTML),chart=new chart_js__WEBPACK_IMPORTED_MODULE_5___default.a(canvas,config);_this.$once("hook:beforeDestroy",(function(){setTimeout((function(){chart.destroy()}),150)}))}));case 4:case"end":return _context.stop()}}),_callee)})))()}}},341:function(e,s,t){"use strict";var _=t(207);t.n(_).a},342:function(e,s,t){"use strict";s.a={mounted:function(){if(window.DISQUS){var e=window.location.origin+window.location.pathname;DISQUS.reset({reload:!0,config:function(){this.page.identifier=e,this.page.url=e}})}}}},345:function(e,s,t){"use strict";var _={props:{tags:{type:Array,default:function(){return[]}}}},a=(t(341),t(15)),n=Object(a.a)(_,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.tags.length>0?t("ul",{staticClass:"tags"},e._l(e.tags,(function(s){return t("li",{key:s.id,staticClass:"tag"},[t("g-link",{staticClass:"link",attrs:{to:s.path}},[e._v("\n      "+e._s(s.title)+"\n    ")])],1)})),0):e._e()}),[],!1,null,"128f53c6",null);s.a=n.exports},350:function(e,s,t){var _={"./af":209,"./af.js":209,"./ar":210,"./ar-dz":211,"./ar-dz.js":211,"./ar-kw":212,"./ar-kw.js":212,"./ar-ly":213,"./ar-ly.js":213,"./ar-ma":214,"./ar-ma.js":214,"./ar-sa":215,"./ar-sa.js":215,"./ar-tn":216,"./ar-tn.js":216,"./ar.js":210,"./az":217,"./az.js":217,"./be":218,"./be.js":218,"./bg":219,"./bg.js":219,"./bm":220,"./bm.js":220,"./bn":221,"./bn.js":221,"./bo":222,"./bo.js":222,"./br":223,"./br.js":223,"./bs":224,"./bs.js":224,"./ca":225,"./ca.js":225,"./cs":226,"./cs.js":226,"./cv":227,"./cv.js":227,"./cy":228,"./cy.js":228,"./da":229,"./da.js":229,"./de":230,"./de-at":231,"./de-at.js":231,"./de-ch":232,"./de-ch.js":232,"./de.js":230,"./dv":233,"./dv.js":233,"./el":234,"./el.js":234,"./en-SG":235,"./en-SG.js":235,"./en-au":236,"./en-au.js":236,"./en-ca":237,"./en-ca.js":237,"./en-gb":238,"./en-gb.js":238,"./en-ie":239,"./en-ie.js":239,"./en-il":240,"./en-il.js":240,"./en-nz":241,"./en-nz.js":241,"./eo":242,"./eo.js":242,"./es":243,"./es-do":244,"./es-do.js":244,"./es-us":245,"./es-us.js":245,"./es.js":243,"./et":246,"./et.js":246,"./eu":247,"./eu.js":247,"./fa":248,"./fa.js":248,"./fi":249,"./fi.js":249,"./fo":250,"./fo.js":250,"./fr":251,"./fr-ca":252,"./fr-ca.js":252,"./fr-ch":253,"./fr-ch.js":253,"./fr.js":251,"./fy":254,"./fy.js":254,"./ga":255,"./ga.js":255,"./gd":256,"./gd.js":256,"./gl":257,"./gl.js":257,"./gom-latn":258,"./gom-latn.js":258,"./gu":259,"./gu.js":259,"./he":260,"./he.js":260,"./hi":261,"./hi.js":261,"./hr":262,"./hr.js":262,"./hu":263,"./hu.js":263,"./hy-am":264,"./hy-am.js":264,"./id":265,"./id.js":265,"./is":266,"./is.js":266,"./it":267,"./it-ch":268,"./it-ch.js":268,"./it.js":267,"./ja":269,"./ja.js":269,"./jv":270,"./jv.js":270,"./ka":271,"./ka.js":271,"./kk":272,"./kk.js":272,"./km":273,"./km.js":273,"./kn":274,"./kn.js":274,"./ko":275,"./ko.js":275,"./ku":276,"./ku.js":276,"./ky":277,"./ky.js":277,"./lb":278,"./lb.js":278,"./lo":279,"./lo.js":279,"./lt":280,"./lt.js":280,"./lv":281,"./lv.js":281,"./me":282,"./me.js":282,"./mi":283,"./mi.js":283,"./mk":284,"./mk.js":284,"./ml":285,"./ml.js":285,"./mn":286,"./mn.js":286,"./mr":287,"./mr.js":287,"./ms":288,"./ms-my":289,"./ms-my.js":289,"./ms.js":288,"./mt":290,"./mt.js":290,"./my":291,"./my.js":291,"./nb":292,"./nb.js":292,"./ne":293,"./ne.js":293,"./nl":294,"./nl-be":295,"./nl-be.js":295,"./nl.js":294,"./nn":296,"./nn.js":296,"./pa-in":297,"./pa-in.js":297,"./pl":298,"./pl.js":298,"./pt":299,"./pt-br":300,"./pt-br.js":300,"./pt.js":299,"./ro":301,"./ro.js":301,"./ru":302,"./ru.js":302,"./sd":303,"./sd.js":303,"./se":304,"./se.js":304,"./si":305,"./si.js":305,"./sk":306,"./sk.js":306,"./sl":307,"./sl.js":307,"./sq":308,"./sq.js":308,"./sr":309,"./sr-cyrl":310,"./sr-cyrl.js":310,"./sr.js":309,"./ss":311,"./ss.js":311,"./sv":312,"./sv.js":312,"./sw":313,"./sw.js":313,"./ta":314,"./ta.js":314,"./te":315,"./te.js":315,"./tet":316,"./tet.js":316,"./tg":317,"./tg.js":317,"./th":318,"./th.js":318,"./tl-ph":319,"./tl-ph.js":319,"./tlh":320,"./tlh.js":320,"./tr":321,"./tr.js":321,"./tzl":322,"./tzl.js":322,"./tzm":323,"./tzm-latn":324,"./tzm-latn.js":324,"./tzm.js":323,"./ug-cn":325,"./ug-cn.js":325,"./uk":326,"./uk.js":326,"./ur":327,"./ur.js":327,"./uz":328,"./uz-latn":329,"./uz-latn.js":329,"./uz.js":328,"./vi":330,"./vi.js":330,"./x-pseudo":331,"./x-pseudo.js":331,"./yo":332,"./yo.js":332,"./zh-cn":333,"./zh-cn.js":333,"./zh-hk":334,"./zh-hk.js":334,"./zh-tw":335,"./zh-tw.js":335};function a(e){var s=n(e);return t(s)}function n(e){if(!t.o(_,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return _[e]}a.keys=function(){return Object.keys(_)},a.resolve=n,e.exports=a,a.id=350},365:function(e,s,t){},366:function(e,s){},398:function(e,s,t){"use strict";var _=t(365);t.n(_).a},399:function(e,s,t){"use strict";var _=t(366),a=t.n(_);s.default=a.a},416:function(e,s,t){"use strict";t.r(s);var _=t(345),a=t(342),n=t(339),r=t(340),i={components:{Tags:_.a},mixins:[a.a,r.a,Object(n.a)(" - Publications - Nowicki Lab")]},c=(t(398),t(15)),o=t(399),j=Object(c.a)(i,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("article",[t("header",[t("h1",[e._v(e._s(e.$page.article.title))]),t("time",{staticClass:"date",attrs:{datetime:e.$page.article.validDateString}},[e._v("\n        "+e._s(e.$page.article.date)+"\n      ")]),t("tags",{attrs:{tags:e.$page.article.tags}}),t("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(e.$page.article.summary)}})],1),t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(e.$page.article.content)}})]),t("div",{staticClass:"disqus",attrs:{id:"disqus_thread"}})])}),[],!1,null,"9fd89ee4",null);"function"==typeof o.default&&Object(o.default)(j);s.default=j.exports}}]);