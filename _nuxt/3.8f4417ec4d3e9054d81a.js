(window.webpackJsonp=window.webpackJsonp||[]).push([[3,8],{269:function(e,t,r){var content=r(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(48).default)("293e85fc",content,!0,{sourceMap:!1})},274:function(e,t,r){"use strict";r(269)},275:function(e,t,r){var n=r(47)(!1);n.push([e.i,".v-technology{display:grid;grid-template-columns:auto 1fr;grid-gap:0 4px;gap:0 4px;align-items:center;border:1px solid #ddd;padding:4px 9px;font-size:11px;border-radius:6px;text-transform:uppercase}.v-technology img{width:24px;height:24px}",""]),e.exports=n},276:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({props:{technology:Object}}),o=(r(274),r(13)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"v-technology"},[r("img",{attrs:{src:""+e.$config.BASE_URL+e.technology.image,alt:e.technology.name}}),e._v("\n  "+e._s(e.technology.name)+"\n")])}),[],!1,null,null,null);t.default=component.exports},291:function(e,t,r){var content=r(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(48).default)("4648bd90",content,!0,{sourceMap:!1})},294:function(e,t,r){"use strict";r(291)},295:function(e,t,r){var n=r(47)(!1);n.push([e.i,'.v-experience{display:grid;grid-gap:24px 0;gap:24px 0;position:relative;padding:24px 24px 24px 48px;border:2px solid transparent;border-left-color:rgba(0,160,255,.24)}.v-experience .marker{position:absolute;top:37px;left:-1px;transform:translate(-50%,-50%);background-color:#00a0ff;width:12px;height:12px;border-radius:100%}.v-experience>header{display:grid;grid-gap:4px 0;gap:4px 0}.v-experience>header h3{font-size:18px;font-weight:400}.v-experience>header h3 b{font-size:18px}.v-experience>header small{font-size:12px;color:#aaa}.v-experience>header p{margin-top:4px}.v-experience>.body h4{font-size:14px}.v-experience>.body .tasks{display:grid;padding:0 0 0 12px}.v-experience>.body .tasks .task{font-size:14px}.v-experience>.body .tasks .task:before{content:"-"}.v-experience>footer ul{display:flex;align-items:center;flex-wrap:wrap;grid-gap:6px;gap:6px}.v-experience:hover{background-color:rgba(0,160,255,.06);border-color:rgba(0,160,255,.24)}',""]),e.exports=n},298:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({props:{experience:Object}}),o=(r(294),r(13)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"v-experience"},[r("span",{staticClass:"marker"}),e._v(" "),r("header",[r("h3",[r("b",[e._v(e._s(e.experience.company))]),e._v(" / "+e._s(e.experience.role))]),e._v(" "),r("small",[e._v(e._s(e.experience.from)+" - "+e._s(e.experience.to))]),e._v(" "),r("p",[e._v(e._s(e.experience.description))])]),e._v(" "),r("div",{staticClass:"body"},[r("h4",[e._v("Tasks")]),e._v(" "),r("ul",{staticClass:"tasks"},e._l(e.experience.tasks,(function(t,i){return r("li",{key:"task"+i+e.uuid,staticClass:"task"},[e._v("\n        "+e._s(t)+"\n      ")])})),0)]),e._v(" "),r("footer",[r("ul",e._l(e.experience.frameworks.concat(e.experience.technologies),(function(t,i){return r("v-technology",{key:"technology"+i+e.uuid,attrs:{technology:t}})})),1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{VTechnology:r(276).default})}}]);