(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-099f0e50"],{"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,n){var r=n("52a7"),a=n("4630"),o=n("6821"),i=n("6a99"),u=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=o(t),e=i(e,!0),c)try{return l(t,e)}catch(n){}if(u(t,e))return a(!r.f.call(t,e),t[e])}},"333d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},a=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function u(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(t,e,n){var r=u(),a=t-r,c=20,l=0;e="undefined"===typeof e?500:e;var s=function t(){l+=c;var u=Math.easeInOutQuad(l,r,a,e);i(u),l<e?o(t):n&&"function"===typeof n&&n()};s()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},size:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.size},set:function(t){this.$emit("update:size",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,size:t}),this.autoScroll&&c(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,size:this.pageSize}),this.autoScroll&&c(0,800)}}},s=l,p=(n("d8f8"),n("0c7c")),d=Object(p["a"])(s,r,a,!1,null,"bf42f026",null);e["a"]=d.exports},"3b2b":function(t,e,n){var r=n("7726"),a=n("5dbc"),o=n("86cc").f,i=n("9093").f,u=n("aae3"),c=n("0bfb"),l=r.RegExp,s=l,p=l.prototype,d=/a/g,f=/a/g,m=new l(d)!==d;if(n("9e1e")&&(!m||n("79e5")((function(){return f[n("2b4c")("match")]=!1,l(d)!=d||l(f)==f||"/a/i"!=l(d,"i")})))){l=function(t,e){var n=this instanceof l,r=u(t),o=void 0===e;return!n&&r&&t.constructor===l&&o?t:a(m?new s(r&&!o?t.source:t,e):s((r=t instanceof l)?t.source:t,r&&o?c.call(t):e),n?this:p,l)};for(var h=function(t){t in l||o(l,t,{configurable:!0,get:function(){return s[t]},set:function(e){s[t]=e}})},g=i(s),b=0;g.length>b;)h(g[b++]);p.constructor=l,l.prototype=p,n("2aba")(r,"RegExp",l)}n("7a56")("RegExp")},"52f3":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("b775");function a(t){return Object(r["a"])({url:"/config/inspirit/kpiRule/all",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/config/inspirit/kpiRule/create",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/config/inspirit/kpiRule/modify",method:"put",data:t})}function u(t){return Object(r["a"])({url:"/config/inspirit/kpiRule/delete",method:"delete",data:t})}},"5dbc":function(t,e,n){var r=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var o,i=e.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&r(o)&&a&&a(t,o),t}},"7adc":function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return c})),n.d(e,"j",(function(){return l})),n.d(e,"b",(function(){return s})),n.d(e,"i",(function(){return p})),n.d(e,"h",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"c",(function(){return m}));var r=n("b775");function a(t){return Object(r["a"])({url:"/product/lists",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/product/all",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/product/info",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/product/detail",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/product/create",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/product/modify",method:"put",data:t})}function s(t){return Object(r["a"])({url:"/product/delete",method:"delete",data:t})}function p(t){return Object(r["a"])({url:"/product/member/import",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/product/member/lists",method:"get",params:t})}function f(t){return Object(r["a"])({url:"/product/member/modify",method:"put",data:t})}function m(t){return Object(r["a"])({url:"/product/member/delete",method:"delete",data:t})}},"8b46":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"g",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return p}));var r=n("b775");function a(t){return Object(r["a"])({url:"/achieve/product/create",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/achieve/product/modify",method:"put",data:t})}function i(t){return Object(r["a"])({url:"/achieve/product/lists",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/achieve/product/member/export",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/achieve/product/member/import",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/achieve/product/info",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/achieve/product/member/lists",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/achieve/product/member/modify",method:"put",data:t})}},"8b97":function(t,e,n){var r=n("d3f4"),a=n("cb7c"),o=function(t,e){if(a(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},9093:function(t,e,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},"96ee":function(t,e,n){},aa77:function(t,e,n){var r=n("5ca1"),a=n("be13"),o=n("79e5"),i=n("fdef"),u="["+i+"]",c="​",l=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),p=function(t,e,n){var a={},u=o((function(){return!!i[t]()||c[t]()!=c})),l=a[t]=u?e(d):i[t];n&&(a[n]=l),r(r.P+r.F*u,"String",a)},d=p.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(s,"")),t};t.exports=p},aae3:function(t,e,n){var r=n("d3f4"),a=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},bb57:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("b775");function a(t){return Object(r["a"])({url:"/product/stage/all/"+t.proId,method:"get",params:t})}},c5f6:function(t,e,n){"use strict";var r=n("7726"),a=n("69a8"),o=n("2d95"),i=n("5dbc"),u=n("6a99"),c=n("79e5"),l=n("9093").f,s=n("11e9").f,p=n("86cc").f,d=n("aa77").trim,f="Number",m=r[f],h=m,g=m.prototype,b=o(n("2aeb")(g))==f,v="trim"in String.prototype,y=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():d(e,3);var n,r,a,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var i,c=e.slice(2),l=0,s=c.length;l<s;l++)if(i=c.charCodeAt(l),i<48||i>a)return NaN;return parseInt(c,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(b?c((function(){g.valueOf.call(n)})):o(n)!=f)?i(new h(y(e)),n,m):y(e)};for(var _,k=n("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;k.length>w;w++)a(h,_=k[w])&&!a(m,_)&&p(m,_,s(h,_));m.prototype=g,g.constructor=m,n("2aba")(r,f,m)}},d8f8:function(t,e,n){"use strict";n("96ee")},e6e2:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:t.$t("table.productName")},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:t.$t("table.productSubName")},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.subName,callback:function(e){t.$set(t.listQuery,"subName",e)},expression:"listQuery.subName"}}),t._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:t.$t("table.productNumber")},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.proNumber,callback:function(e){t.$set(t.listQuery,"proNumber",e)},expression:"listQuery.proNumber"}}),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("\n      "+t._s(t.$t("table.search"))+"\n    ")]),t._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("\n      "+t._s(t.$t("table.add"))+"\n    ")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index+1)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"项目名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.productInfo.name)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"项目简称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.productInfo.subName))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"项目编号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.productInfo.proNumber))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"项目优先级",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.productInfo.lccName))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"研发模式",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.productMode.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"项目经理",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.productPm.userName)+"-"+t._s(e.row.productPm.workNumber))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"当前阶段",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:e.row.productStage.name}},[t._v(t._s(e.row.productStage.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"投资额度(万)",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.productInfo.invest/1e4))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"首年净利润(万)",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.productInfo.netProfit/1e4))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"激励预算(万)",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.productInfo.incentiveBudget/1e4))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[n("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(n){return t.handleEdit(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(n){return t.handleDetail(e.row)}}},[t._v("详情")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(n){return t.handleImport(e.row)}}},[t._v("导入成员")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(n){return t.handleAchieve(e.row)}}},[t._v("录入绩效")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(n){return t.handleShowAchieve(e.row)}}},[t._v("绩效")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(n){return t.handleDelete(e.row)}}},[t._v("删除")])],1)]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,size:t.listQuery.size},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:size":function(e){return t.$set(t.listQuery,"size",e)},pagination:t.fetchData}}),t._v(" "),n("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,width:"50%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"temp",staticStyle:{"margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"当前阶段",prop:"stageId"}},[n("el-select",{attrs:{"remote-method":t.getStage,filterable:"","default-first-option":"",remote:"",placeholder:"请选择当前阶段"},model:{value:t.temp.stageId,callback:function(e){t.$set(t.temp,"stageId",e)},expression:"temp.stageId"}},t._l(t.stageOptions,(function(t,e){return n("el-option",{key:t+e,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),n("el-form-item",{attrs:{label:"阶段评分：",prop:"stageScore"}},[n("el-input",{attrs:{size:"small",autocomplete:"off",placeholder:"请输入标签名称"},model:{value:t.temp.stageScore,callback:function(e){t.$set(t.temp,"stageScore",e)},expression:"temp.stageScore"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"PM分配比例：",prop:"pmRadio"}},[n("el-input",{attrs:{size:"small",autocomplete:"off",placeholder:"请输入项目经理分配比例"},model:{value:t.temp.pmRadio,callback:function(e){t.$set(t.temp,"pmRadio",e)},expression:"temp.pmRadio"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"PM浮动比例：",prop:"pmFloatRadio"}},[n("el-input",{attrs:{size:"small",autocomplete:"off",placeholder:"请输入项目经理浮动比例"},model:{value:t.temp.pmFloatRadio,callback:function(e){t.$set(t.temp,"pmFloatRadio",e)},expression:"temp.pmFloatRadio"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"PM绩效得分：",prop:"pmKpiLevelScore"}},[n("el-input",{attrs:{size:"small",autocomplete:"off",placeholder:"请输入备注信息"},model:{value:t.temp.pmKpiLevelScore,callback:function(e){t.$set(t.temp,"pmKpiLevelScore",e)},expression:"temp.pmKpiLevelScore"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"备注：",prop:"remark"}},[n("el-input",{attrs:{size:"small",autocomplete:"off",placeholder:"请输入备注信息"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){"create"===t.dialogStatus?t.createStageKpiData():t.updateStageKpiData()}}},[t._v(" 确认 ")])],1)],1)],1)},a=[],o=(n("ac6a"),n("7f7f"),n("3b2b"),n("7adc")),i=n("333d"),u=n("bb57"),c=n("8b46"),l=n("52f3"),s={components:{Pagination:i["a"]},filters:{SexFilter:function(t){var e={0:"未知",1:"男",2:"女"};return e[t]}},data:function(){var t=this,e=function(e,n,r){if(""===n||0===n||void 0===n)t.$message({message:"项目阶段为必选项",type:"error"}),r(new Error("请选择项目阶段"));else{var a=/^[0-9]*$/,o=new RegExp(a);o.test(n)||(t.$message({message:"请选择正确的项目阶段",type:"error"}),r(new Error("请选择正确的项目阶段"))),r()}},n=function(e,n,r){if(""===n||0===n||void 0===n)t.$message({message:"阶段评分为必选项",type:"error"}),r(new Error("请输入阶段评分"));else{var a=/^[0-9]*$/,o=new RegExp(a);o.test(n)||(t.$message({message:"请输入正确的阶段评分",type:"error"}),r(new Error("请输入正确的阶段评分"))),r()}},r=function(e,n,r){""===n||0===n||void 0===n?(t.$message({message:"PM分配比例为必选项",type:"error"}),r(new Error("请输入PM分配比例"))):r()},a=function(e,n,r){""===n||0===n||void 0===n?(t.$message({message:"PM浮动比例为必选项",type:"error"}),r(new Error("请输入PM浮动比例"))):r()},o=function(e,n,r){if(""===n||0===n||void 0===n)t.$message({message:"PM绩效等级为必选项",type:"error"}),r(new Error("请选择PM绩效等级"));else{var a=/^[0-9]*$/,o=new RegExp(a);o.test(n)||(t.$message({message:"请选择正确的PM绩效等级",type:"error"}),r(new Error("请选择正确的PM绩效等级"))),r()}};return{list:null,stageOptions:[],kpiOptions:[],total:0,listLoading:!0,listQuery:{page:1,size:10},textMap:{update:"编辑",create:"录入阶段绩效"},dialogStatus:"",dialogFormVisible:!1,temp:{},rules:{stageId:[{validator:e}],stageScore:[{validator:n}],pmRadio:[{validator:r}],pmFloatRadio:[{validator:a}],pmKpiLevelId:[{validator:o}]}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(o["g"])(this.listQuery).then((function(e){t.list=e.data,t.total=e.totalSize,t.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.fetchData()},handleDelete:function(t){var e=this;Object(o["b"])({id:t.productInfo.id}).then((function(t){e.$notify({title:"成功",message:"提交成功",type:"success",duration:2e3}),e.fetchData()}))},handleImport:function(t){this.$router.push({path:"/product/import",query:{id:t.productInfo.id}})},handleDetail:function(t){this.$router.push({path:"/product/info",query:{id:t.productInfo.id}})},handleCreate:function(t){this.$router.push({path:"/product/create",query:{id:t.id,name:t.name}})},handleEdit:function(t){this.$router.push({path:"/product/create",query:{id:t.productInfo.id}})},edit:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/"}),t.loading=!1})).catch((function(){t.loading=!1}))}))},getStage:function(t){var e=this;Object(u["a"])({proId:t}).then((function(t){t&&(e.stageOptions=[],e.stageOptions.push({id:0,name:"请选择"}),t.forEach((function(t,n){e.stageOptions.push({id:t.id,name:t.name})})))}))},getKpi:function(){var t=this;Object(l["c"])().then((function(e){e.Data&&(t.kpiOptions=[],t.kpiOptions.push({id:0,name:"请选择"}),e.Data.forEach((function(e,n){t.kpiOptions.push({id:e.Id,name:e.LevelName})})))}))},handleAchieve:function(t){var e=this;console.log(t),this.parentId=t.parent,this.dialogStatus="create",this.temp.proId=t.productInfo.id,this.dialogFormVisible=!0,this.getStage(t.productInfo.id),this.getKpi(),this.$nextTick((function(){e.$refs["temp"].clearValidate()}))},handleShowAchieve:function(t){this.$router.push({path:"/achieve/index",query:{proId:t.id}})},createStageKpiData:function(){var t=this;this.$refs.temp.validate((function(e){e&&Object(c["a"])(t.temp).then((function(e){t.$notify({title:"成功",message:"提交成功",type:"success",duration:2e3}),t.dialogFormVisible=!1,t.loading=!1,t.$router.push({path:"/product/index"})}))}))}}},p=s,d=n("0c7c"),f=Object(d["a"])(p,r,a,!1,null,null,null);e["default"]=f.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);