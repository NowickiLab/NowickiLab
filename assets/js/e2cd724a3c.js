(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2qYH":function(t,e,s){"use strict";s.r(e);var n={components:{SimpleArticlesPreview:s("s3Yi").a},metaInfo:function(){return{title:"Tag: "+this.$page.tag.title}}},i=s("KHd+"),a=null,r=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("Tag: "+this._s(this.$page.tag.title))]),e("SimpleArticlesPreview",{attrs:{articles:this.$page.tag.belongsTo.edges}})],1)}),[],!1,null,null,null);"function"==typeof a&&a(r);e.default=r.exports},s3Yi:function(t,e,s){"use strict";var n={props:{articles:{type:Array,required:!0},linkTo:{type:String,default:""}},computed:{type:function(){return function(t){var e=t.node.__typename.toLowerCase();return"s"!==e[e.length-1]&&(e+="s"),e}}}},i=(s("vUuB"),s("KHd+")),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"articles"},t._l(t.articles,(function(e){return s("li",{key:e.node.id,staticClass:"article"},[t.linkTo?s("span",[s("b",[t._v(t._s(e.node.startDate))]),t._v(" - \n      ")]):s("span",[t._v("\n        ["+t._s(t.type(e))+"] "),s("b",[t._v(t._s(e.node.startDate))]),s("br")]),s("b",[s("g-link",{attrs:{to:"/"+t.type(e)+"/"+e.node.slug+"/"}},[t._v(t._s(e.node.title))])],1),s("br"),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"article__summary",domProps:{innerHTML:t._s(e.node.summary)}})])})),0),t.linkTo?s("div",{staticClass:"link-wrap"},[s("g-link",{staticClass:"link",attrs:{to:"/"+t.linkTo+"/"}},[t._v("\n      See "+t._s(t.linkTo)+" archives...\n    ")])],1):t._e()])}),[],!1,null,"3646ba28",null);e.a=a.exports},sGHu:function(t,e,s){},vUuB:function(t,e,s){"use strict";s("sGHu")}}]);