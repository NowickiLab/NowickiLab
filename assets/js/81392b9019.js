(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{336:function(e,_,s){"use strict";s(35),s(26),s(82),s(83);_.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{metaInfo:function(){var _=this.$page.article,s=_.title,t=_.summary,r=_.img,n=t?t.replace(/(<([^>]+)>)/gi,""):"",a=[{name:"title",content:s},{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:s},{name:"twitter:description",content:n}];if(r){var c="https://nowickilab.science"+r.srcset[1].split(" ")[0];a.push({property:"og:image",content:c},{name:"twitter:image",content:c})}return{title:"".concat(s).concat(e),titleTemplate:"%s",description:n,meta:a}}}}},337:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(36),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(37),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(81),core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(345),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__),C_Users_ja03_NowickiLab_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(346),chart_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(347),chart_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);__webpack_exports__.a={mounted:function mounted(){var _this=this;return Object(C_Users_ja03_NowickiLab_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.a)(regeneratorRuntime.mark((function _callee(){var canvases;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_this.$nextTick();case 2:canvases=_this.$refs.content.querySelectorAll("canvas"),canvases.forEach((function(canvas){var id=canvas.id,configEl=_this.$refs.content.querySelector('script[data-canvas="'.concat(id,'"]'));if(!configEl)throw Error('Brakuje tagu <script> z data-canvas="'.concat(id,'"'));var config=eval(configEl.innerHTML),chart=new chart_js__WEBPACK_IMPORTED_MODULE_5___default.a(canvas,config);_this.$once("hook:beforeDestroy",(function(){setTimeout((function(){chart.destroy()}),150)}))}));case 4:case"end":return _context.stop()}}),_callee)})))()}}},348:function(e,_,s){var t={"./af":208,"./af.js":208,"./ar":209,"./ar-dz":210,"./ar-dz.js":210,"./ar-kw":211,"./ar-kw.js":211,"./ar-ly":212,"./ar-ly.js":212,"./ar-ma":213,"./ar-ma.js":213,"./ar-sa":214,"./ar-sa.js":214,"./ar-tn":215,"./ar-tn.js":215,"./ar.js":209,"./az":216,"./az.js":216,"./be":217,"./be.js":217,"./bg":218,"./bg.js":218,"./bm":219,"./bm.js":219,"./bn":220,"./bn.js":220,"./bo":221,"./bo.js":221,"./br":222,"./br.js":222,"./bs":223,"./bs.js":223,"./ca":224,"./ca.js":224,"./cs":225,"./cs.js":225,"./cv":226,"./cv.js":226,"./cy":227,"./cy.js":227,"./da":228,"./da.js":228,"./de":229,"./de-at":230,"./de-at.js":230,"./de-ch":231,"./de-ch.js":231,"./de.js":229,"./dv":232,"./dv.js":232,"./el":233,"./el.js":233,"./en-SG":234,"./en-SG.js":234,"./en-au":235,"./en-au.js":235,"./en-ca":236,"./en-ca.js":236,"./en-gb":237,"./en-gb.js":237,"./en-ie":238,"./en-ie.js":238,"./en-il":239,"./en-il.js":239,"./en-nz":240,"./en-nz.js":240,"./eo":241,"./eo.js":241,"./es":242,"./es-do":243,"./es-do.js":243,"./es-us":244,"./es-us.js":244,"./es.js":242,"./et":245,"./et.js":245,"./eu":246,"./eu.js":246,"./fa":247,"./fa.js":247,"./fi":248,"./fi.js":248,"./fo":249,"./fo.js":249,"./fr":250,"./fr-ca":251,"./fr-ca.js":251,"./fr-ch":252,"./fr-ch.js":252,"./fr.js":250,"./fy":253,"./fy.js":253,"./ga":254,"./ga.js":254,"./gd":255,"./gd.js":255,"./gl":256,"./gl.js":256,"./gom-latn":257,"./gom-latn.js":257,"./gu":258,"./gu.js":258,"./he":259,"./he.js":259,"./hi":260,"./hi.js":260,"./hr":261,"./hr.js":261,"./hu":262,"./hu.js":262,"./hy-am":263,"./hy-am.js":263,"./id":264,"./id.js":264,"./is":265,"./is.js":265,"./it":266,"./it-ch":267,"./it-ch.js":267,"./it.js":266,"./ja":268,"./ja.js":268,"./jv":269,"./jv.js":269,"./ka":270,"./ka.js":270,"./kk":271,"./kk.js":271,"./km":272,"./km.js":272,"./kn":273,"./kn.js":273,"./ko":274,"./ko.js":274,"./ku":275,"./ku.js":275,"./ky":276,"./ky.js":276,"./lb":277,"./lb.js":277,"./lo":278,"./lo.js":278,"./lt":279,"./lt.js":279,"./lv":280,"./lv.js":280,"./me":281,"./me.js":281,"./mi":282,"./mi.js":282,"./mk":283,"./mk.js":283,"./ml":284,"./ml.js":284,"./mn":285,"./mn.js":285,"./mr":286,"./mr.js":286,"./ms":287,"./ms-my":288,"./ms-my.js":288,"./ms.js":287,"./mt":289,"./mt.js":289,"./my":290,"./my.js":290,"./nb":291,"./nb.js":291,"./ne":292,"./ne.js":292,"./nl":293,"./nl-be":294,"./nl-be.js":294,"./nl.js":293,"./nn":295,"./nn.js":295,"./pa-in":296,"./pa-in.js":296,"./pl":297,"./pl.js":297,"./pt":298,"./pt-br":299,"./pt-br.js":299,"./pt.js":298,"./ro":300,"./ro.js":300,"./ru":301,"./ru.js":301,"./sd":302,"./sd.js":302,"./se":303,"./se.js":303,"./si":304,"./si.js":304,"./sk":305,"./sk.js":305,"./sl":306,"./sl.js":306,"./sq":307,"./sq.js":307,"./sr":308,"./sr-cyrl":309,"./sr-cyrl.js":309,"./sr.js":308,"./ss":310,"./ss.js":310,"./sv":311,"./sv.js":311,"./sw":312,"./sw.js":312,"./ta":313,"./ta.js":313,"./te":314,"./te.js":314,"./tet":315,"./tet.js":315,"./tg":316,"./tg.js":316,"./th":317,"./th.js":317,"./tl-ph":318,"./tl-ph.js":318,"./tlh":319,"./tlh.js":319,"./tr":320,"./tr.js":320,"./tzl":321,"./tzl.js":321,"./tzm":322,"./tzm-latn":323,"./tzm-latn.js":323,"./tzm.js":322,"./ug-cn":324,"./ug-cn.js":324,"./uk":325,"./uk.js":325,"./ur":326,"./ur.js":326,"./uz":327,"./uz-latn":328,"./uz-latn.js":328,"./uz.js":327,"./vi":329,"./vi.js":329,"./x-pseudo":330,"./x-pseudo.js":330,"./yo":331,"./yo.js":331,"./zh-cn":332,"./zh-cn.js":332,"./zh-hk":333,"./zh-hk.js":333,"./zh-tw":334,"./zh-tw.js":334};function r(e){var _=n(e);return s(_)}function n(e){if(!s.o(t,e)){var _=new Error("Cannot find module '"+e+"'");throw _.code="MODULE_NOT_FOUND",_}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=n,e.exports=r,r.id=348},358:function(e,_){},380:function(e,_,s){"use strict";var t=s(358),r=s.n(t);_.default=r.a},395:function(e,_,s){"use strict";s.r(_);var t=s(336),r={mixins:[s(337).a,Object(t.a)(" - Nowicki Lab")]},n=s(15),a=s(380),c=Object(n.a)(r,(function(){var e=this,_=e.$createElement,s=e._self._c||_;return s("div",[s("h1",[e._v(e._s(e.$page.article.title))]),s("div",{},e._l(e.$page.article.tags,(function(_){return s("g-link",{key:_.id,attrs:{to:_.path},domProps:{textContent:e._s(_.title)}})})),1),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(e.$page.article.content)}})])}),[],!1,null,"1eb5556c",null);"function"==typeof a.default&&Object(a.default)(c);_.default=c.exports}}]);