(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e740fe94"],{"211e":function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return r})),a.d(t,"f",(function(){return l})),a.d(t,"h",(function(){return i})),a.d(t,"e",(function(){return u})),a.d(t,"j",(function(){return o})),a.d(t,"c",(function(){return c})),a.d(t,"i",(function(){return d})),a.d(t,"a",(function(){return f})),a.d(t,"g",(function(){return b}));var n=a("b775");function s(e){return Object(n["a"])({url:"/task/product_lists",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/task/npi_lists",method:"get",params:e})}function l(e){return Object(n["a"])({url:"/task/product_modify",method:"put",data:e})}function i(e){return Object(n["a"])({url:"/task/npi_modify",method:"put",data:e})}function u(e){return Object(n["a"])({url:"/task/quality_lists",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/task/quality_modify",method:"put",data:e})}function c(e){return Object(n["a"])({url:"/task/produce_lists",method:"get",params:e})}function d(e){return Object(n["a"])({url:"/task/produce_modify",method:"put",data:e})}function f(e){return Object(n["a"])({url:"/task/develop_lists",method:"get",params:e})}function b(e){return Object(n["a"])({url:"/task/develop_modify",method:"put",data:e})}},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},s=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function u(e,t,a){var n=i(),s=e-n,u=20,o=0;t="undefined"===typeof t?500:t;var c=function e(){o+=u;var i=Math.easeInOutQuad(o,n,s,t);l(i),o<t?r(e):a&&"function"===typeof a&&a()};c()}var o={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},size:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.size},set:function(e){this.$emit("update:size",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,size:e}),this.autoScroll&&u(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,size:this.pageSize}),this.autoScroll&&u(0,800)}}},c=o,d=(a("d8f8"),a("0c7c")),f=Object(d["a"])(c,n,s,!1,null,"bf42f026",null);t["a"]=f.exports},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d46","./pt-br.js":"d2d46","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e9","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e9","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"96ee":function(e,t,a){},b5ae:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return u}));var n=a("b775");function s(e){return Object(n["a"])({url:"/system/organize/employee/lists",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/system/organize/employee/all",method:"get",params:e})}function l(e){return Object(n["a"])({url:"/system/organize/employee/info",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/system/organize/employee/create",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/system/organize/employee/modify",method:"put",data:e})}},b6aa:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("table.productSubName")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.subName,callback:function(t){e.$set(e.listQuery,"subName",t)},expression:"listQuery.subName"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("table.productNumber")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.proNumber,callback:function(t){e.$set(e.listQuery,"proNumber",t)},expression:"listQuery.proNumber"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("table.productTask")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.taskName,callback:function(t){e.$set(e.listQuery,"taskName",t)},expression:"listQuery.taskName"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"300px"},attrs:{placeholder:e.$t("table.dutyWorkNumber"),clearable:"",filterable:""},model:{value:e.listQuery.dutyWorkNumber,callback:function(t){e.$set(e.listQuery,"dutyWorkNumber",t)},expression:"listQuery.dutyWorkNumber"}},e._l(e.employeeAll,(function(e){return a("el-option",{key:e.WorkNumber,attrs:{label:e.UserName,value:e.WorkNumber}})})),1),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"300px"},attrs:{placeholder:e.$t("table.joinWorkNumber"),clearable:"",filterable:""},model:{value:e.listQuery.joinWorkNumber,callback:function(t){e.$set(e.listQuery,"joinWorkNumber",t)},expression:"listQuery.joinWorkNumber"}},e._l(e.employeeAll,(function(e){return a("el-option",{key:e.WorkNumber,attrs:{label:e.UserName,value:e.WorkNumber}})})),1),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n      "+e._s(e.$t("table.search"))+"\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      "+e._s(e.$t("table.add"))+"\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"项目简称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.subName)+" / "+e._s(t.row.proNumber))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"任务分类",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.taskCate))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"任务描述",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.taskDesc))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"任务状态"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.edit?[a("el-select",{staticClass:"filter-item",staticStyle:{width:"300px"},attrs:{placeholder:e.$t("table.dutyWorkNumber"),clearable:""},model:{value:n.taskStatus,callback:function(t){e.$set(n,"taskStatus",t)},expression:"row.taskStatus"}},[a("el-option",{attrs:{label:"未开启",value:1}}),e._v(" "),a("el-option",{attrs:{label:"运行中",value:2}}),e._v(" "),a("el-option",{attrs:{label:"已完成",value:3}}),e._v(" "),a("el-option",{attrs:{label:"暂停",value:4}})],1),e._v(" "),a("el-button",{staticClass:"cancel-btn",attrs:{size:"small",icon:"el-icon-refresh",type:"warning"},on:{click:function(t){return e.cancelEdit(n)}}},[e._v("\n            cancel\n          ")])]:1==n.taskStatus?a("span",[e._v("未开启")]):2==n.taskStatus?a("span",[e._v("运行中")]):3==n.taskStatus?a("span",[e._v("已完成")]):4==n.taskStatus?a("span",[e._v("暂停")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"责任人",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.dutyWorkNumber))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"关联责任人",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.joinWorkNumber))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"计划时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.palnStartTime)+" ~ "+e._s(t.row.palnEndTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"实际时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.realStartTime)+" ~ "+e._s(t.row.realEndTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.edit?[a("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:n.remark,callback:function(t){e.$set(n,"remark",t)},expression:"row.remark"}})]:a("span",[e._v(e._s(n.remark))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"未完成升级",align:"center",width:"310"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.upgradeStep))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.edit?a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-check-outline"},on:{click:function(t){return e.confirmEdit(n)}}},[e._v("\n          Ok\n        ")]):a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(e){n.edit=!n.edit}}},[e._v("\n          Edit\n        ")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,size:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:size":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}})],1)},s=[],r=(a("7f7f"),a("c1df")),l=a.n(r),i=a("211e"),u=a("333d"),o=a("b5ae"),c={components:{Pagination:u["a"]},filters:{SexFilter:function(e){var t={0:"未知",1:"男",2:"女"};return t[e]}},data:function(){return{employeeAll:[],list:null,stageOptions:[],kpiOptions:[],total:0,listLoading:!0,listQuery:{page:1,size:10,proId:this.$route.query.proId,subName:this.$route.query.name},textMap:{update:"编辑",create:"录入阶段绩效"},dialogStatus:"",dialogFormVisible:!1,temp:{},rules:{}}},created:function(){this.fetchData(),this.getProductMembereAll()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(i["e"])(this.listQuery).then((function(t){if(e.list=t.data,e.total=t.totalSize,e.listLoading=!1,e.total>0)for(var a in e.list)e.list[a].palnStartTime=l()(e.list[a].palnStartTime).format("YYYY-MM-DD"),e.list[a].palnEndTime=l()(e.list[a].palnEndTime).format("YYYY-MM-DD"),null!==e.list[a].realStartTime&&void 0!==e.list[a].realStartTime&&(e.list[a].realStartTime=l()(e.list[a].realStartTime).format("YYYY-MM-DD")),null!==e.list[a].realEndTime&&void 0!==e.list[a].realEndTime&&(e.list[a].realEndTime=l()(e.list[a].realEndTime).format("YYYY-MM-DD")),e.list[a].originalTaskStatus=e.list[a].taskStatus,e.list[a].originalRemark=e.list[a].remark,null!==e.list[a].upgradeFirstTime?e.list[a].upgradeStep="第一次升级："+e.list[a].upgradeFirstTime+"给"+e.list[a].upgradeFirst+"第二次升级："+e.list[a].upgradeTwoTime+"给"+e.list[a].upgradeTwo+"第三次升级："+e.list[a].upgradeThreeTime+"给"+e.list[a].upgradeThree:e.list[a].upgradeStep="不升级"}))},getProductMembereAll:function(){var e=this;Object(o["b"])().then((function(t){e.employeeAll=t.Data}))},handleFilter:function(){this.listQuery.page=1,this.fetchData()},cancelEdit:function(e){e.taskStatus=e.originalTaskStatus,e.remark=e.originalRemark,e.edit=!1,this.$message({message:"任务信息未做变更",type:"warning"})},confirmEdit:function(e){var t=this;e.edit=!1,Object(i["j"])({id:e.id,taskStatus:e.taskStatus,remark:e.remark}).then((function(e){t.$message({message:"任务信息变更",type:"success"})}))}}},d=c,f=a("0c7c"),b=Object(f["a"])(d,n,s,!1,null,null,null);t["default"]=b.exports},d8f8:function(e,t,a){"use strict";a("96ee")}}]);