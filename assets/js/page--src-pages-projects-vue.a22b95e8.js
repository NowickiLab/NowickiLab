(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{257:function(t,e,n){"use strict";var a=n(1),o=n(101)(!0);a(a.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(163)("includes")},258:function(t,e,n){"use strict";var a=n(1),o=n(99);a(a.P+a.F*n(100)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},259:function(t,e,n){"use strict";n(257),n(258);var a={props:["base","totalPages","currentPage"],computed:{showPreviousPage:function(){return 1!==this.currentPage},previousPage:function(){return[0,1].includes(this.currentPage-1)?this.base:"".concat(this.base,"/").concat(this.currentPage-1)},showNextPage:function(){return this.currentPage!==this.totalPages},nextPage:function(t,e){return this.totalPages>this.currentPage?"".concat(this.base,"/").concat(this.currentPage+1):"".concat(this.base,"/").concat(this.currentPage)}}},o=n(10),r=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("g-link",{class:{"ursor-not-allowed":!t.showPreviousPage},attrs:{to:t.previousPage}},[t._v("← Prev")]),n("div",[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),n("g-link",{class:{"cursor-not-allowed":!t.showNextPage},attrs:{to:t.nextPage}},[t._v("Next →")])],1)}),[],!1,null,null,null);e.a=r.exports},262:function(t,e){},271:function(t,e,n){"use strict";var a=n(262),o=n.n(a);e.default=o.a},279:function(t,e,n){"use strict";n.r(e);var a=n(259),o={props:{project:{type:Object,required:!0}},computed:{path:function(){return"/projects/".concat(this.project.slug,"/")}}},r=n(10),s=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[n("g-link",{attrs:{to:t.path}},[t._v(t._s(t.project.title))])],1),n("div",[n("span",[t._v(t._s(t.project.date))]),n("span",[t._v(" · ")]),n("span",[t._v(t._s(t.project.timeToRead)+" min read")])]),t._v("\n\n  "+t._s(t.project.summary)+"\n\n  "),n("div",[n("g-link",{attrs:{to:t.path}},[t._v("Read More")])],1)])}),[],!1,null,"58b8a11e",null).exports,i="https://nowickilab.science/projects/",c="Projects - NowickiLab",u="What’s cooking in the Nowicki Lab right now?",l={metaInfo:{title:c,titleTemplate:"%s",description:u,meta:[{name:"title",content:c},{name:"description",content:u},{name:"og:title",content:c},{name:"og:description",content:u},{name:"og:url",content:i},{name:"og:type",content:"website"},{name:"og:image",content:""},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:url",content:i},{name:"twitter:title",content:c},{name:"twitter:description",content:u},{name:"twitter:image",content:""}]},components:{PaginationPosts:a.a,ProjectPreview:s}},g=n(271),p=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",[e("h1",[this._v("Projects")]),this._l(this.$page.projects.edges,(function(t){return e("ProjectPreview",{key:t.id,attrs:{project:t.node}})})),this.$page.projects.pageInfo.totalPages>1?e("pagination-posts",{attrs:{base:"/projects",totalPages:this.$page.projects.pageInfo.totalPages,currentPage:this.$page.projects.pageInfo.currentPage}}):this._e()],2)])}),[],!1,null,null,null);"function"==typeof g.default&&Object(g.default)(p);e.default=p.exports}}]);