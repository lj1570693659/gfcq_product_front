(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-687a86ca"],{3119:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return s}));var a=n("b775");function i(t){return Object(a["a"])({url:"/system/organize/job/lists",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/system/organize/job/all",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/system/organize/job/create",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/system/organize/job/modify",method:"put",data:t})}function s(t){return Object(a["a"])({url:"/system/organize/job/delete",method:"delete",data:t})}},aa10:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-button",{staticStyle:{margin:"10px 0"},attrs:{type:"primary",size:"small",icon:"el-icon-circle-plus-outline"},on:{click:t.handleCreate}},[t._v("添加")]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index+1)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"岗位名称"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.edit?[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:a.job.name,callback:function(e){t.$set(a.job,"name",e)},expression:"row.job.name"}})]:n("span",[t._v(t._s(a.job.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"所属部门"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.department.name)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"备注",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.edit?[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:a.job.remark,callback:function(e){t.$set(a.job,"remark",e)},expression:"row.job.remark"}}),t._v(" "),n("el-button",{staticClass:"cancel-btn",attrs:{size:"small",icon:"el-icon-refresh",type:"warning"},on:{click:function(e){return t.cancelEdit(a)}}},[t._v("\n            cancel\n          ")])]:n("span",[t._v(t._s(a.job.remark))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.edit?n("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-check-outline"},on:{click:function(e){return t.confirmEdit(a)}}},[t._v("\n          Ok\n        ")]):n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(t){a.edit=!a.edit}}},[t._v("\n          Edit\n        ")]),t._v(" "),n("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(e){return t.handleDelete(a)}}},[t._v("\n          删除\n        ")])]}}])})],1),t._v(" "),n("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,width:"50%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",staticStyle:{"margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"所属部门",prop:"departId"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{"remote-method":t.getDepartment,filterable:"","default-first-option":"",remote:"",placeholder:"请选择所属部门"},model:{value:t.temp.departId,callback:function(e){t.$set(t.temp,"departId",e)},expression:"temp.departId"}},t._l(t.departmentListOptions,(function(t,e){return n("el-option",{key:t+e,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),n("el-form-item",{attrs:{label:"岗位名称：",prop:"name"}},[n("el-input",{attrs:{size:"small",autocomplete:"off",placeholder:"请输入岗位名称",required:""},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"备注",prop:"remark"}},[n("el-input",{attrs:{size:"small",autocomplete:"off",placeholder:"请输入备注"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){"create"===t.dialogStatus?t.createLevelData():t.updateData()}}},[t._v(" 确认 ")])],1)],1)],1)},i=[],r=(n("ac6a"),n("7f7f"),n("3119")),o=n("c0c4"),l={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{textMap:{update:"编辑",create:"添加"},dialogStatus:"",dialogFormVisible:!1,rules:{},temp:{},departmentListOptions:[],list:null,listLoading:!0}},created:function(){this.fetchData(),this.getDepartment()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(r["d"])().then((function(e){t.listLoading=!1;var n=e.data;t.list=n.map((function(e){return t.$set(e,"edit",!1),e.originalName=e.job.name,e.originalRemark=e.job.remark,e.originalDepartId=e.job.departId,e}))}))},getDepartment:function(){var t=this;Object(o["c"])().then((function(e){e&&(t.departmentListOptions.push({id:0,name:"请选择"}),e.forEach((function(e,n){0===e.parentId&&(t.departmentListOptions.push({id:e.id,name:e.name}),e.children.forEach((function(n,a){t.departmentListOptions.push({id:n.id,name:e.name+" - "+n.name}),n.children.forEach((function(a,i){t.departmentListOptions.push({id:a.id,name:e.name+" - "+n.name+" - "+a.name}),console.log("this.departmentListOptions----skc--------------",a),null!==a.children&&a.children.forEach((function(i,r){t.departmentListOptions.push({id:i.id,name:e.name+" - "+n.name+" - "+a.name+" - "+i.name})}))}))}))),console.log("this.departmentListOptions------------------",t.departmentListOptions)})))}))},cancelEdit:function(t){t.job.name=t.originalName,t.job.remark=t.originalRemark,t.job.departId=t.originalDepartId,t.edit=!1,this.$message({message:"信息未做变更",type:"warning"})},confirmEdit:function(t){var e=this;t.edit=!1,t.id=t.job.id,t.remark=t.job.remark,t.departId=t.job.departId,t.name=t.job.name,Object(r["e"])(t).then((function(t){e.$message({message:"信息变更成功",type:"success"})}))},handleCreate:function(){var t=this;this.temp={},this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createLevelData:function(){var t=this;this.$refs.dataForm.validate((function(e){e&&Object(r["a"])(t.temp).then((function(t){location.reload()}))}))},handleDelete:function(t){var e=this;Object(r["b"])({id:t.job.id}).then((function(t){e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),e.fetchData()}))},edit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];console.log(e),console.log(this.$refs),this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/"}),t.loading=!1})).catch((function(){t.loading=!1}))}))}}},s=l,c=n("0c7c"),d=Object(c["a"])(s,a,i,!1,null,null,null);e["default"]=d.exports},c0c4:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return l}));var a=n("b775");function i(t){return Object(a["a"])({url:"/system/organize/department/lists",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/system/organize/department/create",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/system/organize/department/modify",method:"put",data:t})}function l(t){return Object(a["a"])({url:"/system/organize/department/delete",method:"delete",data:t})}}}]);