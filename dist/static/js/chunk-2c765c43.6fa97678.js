(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c765c43"],{1:function(e,t){},2:function(e,t){},3:function(e,t){},3796:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),e._v(" "),a("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[e._v("\n    Drop excel file here or\n    "),a("el-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:e.handleUpload}},[e._v("\n      Browse\n    ")])],1)])},n=[],o=(a("7f7f"),a("1146")),u=a.n(o),l={props:{beforeUpload:Function,onSuccess:Function},data:function(){return{loading:!1,excelData:{header:null,results:null,rawFile:null}}},methods:{generateData:function(e){var t=e.header,a=e.results;this.excelData.header=t,this.excelData.results=a,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var t=e.dataTransfer.files;if(1===t.length){var a=t[0];if(!this.isExcel(a))return this.$message.error("Only supports upload .xlsx, .xls, .csv suffix files"),!1;this.upload(a),e.stopPropagation(),e.preventDefault()}else this.$message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var t=e.target.files,a=t[0];a&&this.upload(a)},upload:function(e){if(this.$refs["excel-upload-input"].value=null,this.beforeUpload){var t=this.beforeUpload(e);t&&this.readerData(e)}else this.readerData(e)},readerData:function(e){var t=this;return console.log("rawFile-----------",e),this.loading=!0,new Promise((function(a,r){var n=new FileReader;n.onload=function(r){var n=r.target.result,o=u.a.read(n,{type:"array"}),l=o.SheetNames[0],i=o.Sheets[l],c=t.getHeaderRow(i),s=u.a.utils.sheet_to_json(i);t.generateData({header:c,results:s,rawFile:e}),t.loading=!1,a()},n.readAsArrayBuffer(e)}))},getHeaderRow:function(e){var t,a=[],r=u.a.utils.decode_range(e["!ref"]),n=r.s.r;for(t=r.s.c;t<=r.e.c;++t){var o=e[u.a.utils.encode_cell({c:t,r:n})],l="UNKNOWN "+t;o&&o.t&&(l=u.a.utils.format_cell(o)),a.push(l)}return a},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},i=l,c=(a("8b03"),a("0c7c")),s=Object(c["a"])(i,r,n,!1,null,"1aedf6c9",null);t["a"]=s.exports},"7adc":function(e,t,a){"use strict";a.d(t,"g",(function(){return n})),a.d(t,"d",(function(){return o})),a.d(t,"f",(function(){return u})),a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"j",(function(){return c})),a.d(t,"b",(function(){return s})),a.d(t,"i",(function(){return d})),a.d(t,"l",(function(){return p})),a.d(t,"h",(function(){return f})),a.d(t,"k",(function(){return h})),a.d(t,"c",(function(){return m}));var r=a("b775");function n(e){return Object(r["a"])({url:"/product/lists",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/product/all",method:"get",params:e})}function u(e){return Object(r["a"])({url:"/product/info",method:"get",params:e})}function l(e){return Object(r["a"])({url:"/product/detail",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/product/create",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/product/modify",method:"put",data:e})}function s(e){return Object(r["a"])({url:"/product/delete",method:"delete",data:e})}function d(e){return Object(r["a"])({url:"/product/member/import",method:"post",data:e})}function p(e){return Object(r["a"])({url:"/product/member/web",method:"post",data:e})}function f(e){return Object(r["a"])({url:"/product/member/lists",method:"get",params:e})}function h(e){return Object(r["a"])({url:"/product/member/modify",method:"put",data:e})}function m(e){return Object(r["a"])({url:"/product/member/delete",method:"delete",data:e})}},"8b03":function(e,t,a){"use strict";a("98da")},"98da":function(e,t,a){},f02b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}}),e._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","highlight-current-row":""}},e._l(e.tableHeader,(function(e){return a("el-table-column",{key:e,attrs:{prop:e,label:e}})})),1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")])],1)},n=[],o=a("3796"),u=a("7adc"),l={name:"UploadExcel",components:{UploadExcelComponent:o["a"]},mutipartFile:{proId:0,productMemberList:null},data:function(){return{tableData:[],tableHeader:[],rawFile:Object}},methods:{beforeUpload:function(e){var t=e.size/1024/1024<1;return!!t||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess:function(e){var t=e.results,a=e.header,r=e.rawFile;this.tableHeader=a,this.rawFile=r;var n=t;this.tableData=n.map((function(e){return void 0!==e.投入占比&&null!==e.投入占比||(e.投入占比=0),e.投入占比=e.投入占比.toFixed(2),e})),console.log("this.tabledata-------------------",this.tableData)},onSubmit:function(){var e=this,t={proId:this.$route.query.id,tableData:this.tableData,tableHeader:this.tableHeader};console.log("subData-----------------",t),Object(u["i"])(t).then((function(t){e.$notify({title:"成功",message:"提交成功",type:"success",duration:2e3}),e.loading=!1,e.$router.push({path:"/product/index"})}))}}},i=l,c=a("0c7c"),s=Object(c["a"])(i,r,n,!1,null,null,null);t["default"]=s.exports}}]);