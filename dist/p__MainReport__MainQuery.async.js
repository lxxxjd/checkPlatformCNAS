(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"4Ift":function(e,a,t){"use strict";t.r(a);t("IzEo");var n,l,r,o,i=t("bx4M"),c=(t("g9YV"),t("wCAj")),m=t("jehZ"),s=t.n(m),u=(t("14J3"),t("BMrR")),d=(t("Pwec"),t("CtXQ")),p=(t("5NDa"),t("5rEg")),h=(t("jCWc"),t("kPKH")),E=(t("BoS7"),t("Sdc0")),f=t("2Taf"),v=t.n(f),g=t("vZ4D"),I=t.n(g),k=t("l4Ni"),b=t.n(k),C=t("ujKo"),y=t.n(C),w=t("MhPg"),R=t.n(w),V=(t("OaEy"),t("2fM7")),S=(t("y8nQ"),t("Vl3Y")),F=(t("2qtc"),t("kLXV")),M=(t("bP8k"),t("gFTJ")),D=(t("+L6B"),t("2/Rp")),L=t("q1tI"),N=t.n(L),T=t("MuoO"),Y=t("usdK"),x=t("wd/R"),z=t.n(x),P=t("zHco"),A=t("WTxz"),B=t.n(A),j=t("glGN"),J=t.n(j),O=function(e){var a=e.modalReviewVisible,t=e.handleModalReviewVisible,n=e.modalInfo,l=function(e){return void 0!==e&&null!==e?N.a.createElement("span",null,z()(e).format("YYYY-MM-DD")):null},r=l(n.makingdate);return N.a.createElement(F["a"],{destroyOnClose:!0,title:"\u67e5\u770b\u59d4\u6258\u8be6\u60c5",visible:a,style:{top:100},width:800,onCancel:function(){return t()},footer:[N.a.createElement(D["a"],{type:"primary",onClick:function(){return t()}},"\u5173\u95ed")]},N.a.createElement(M["a"],{bordered:!0},N.a.createElement(M["a"].Item,{label:"\u59d4\u6258\u7f16\u53f7"},n.reportno),N.a.createElement(M["a"].Item,{label:"\u8239\u540d\u6807\u8bc6"},n.shipname),N.a.createElement(M["a"].Item,{label:"\u68c0\u67e5\u54c1\u540d"},n.cargoname),N.a.createElement(M["a"].Item,{label:"\u59d4\u6258\u7f16\u53f7"},n.cargoname),N.a.createElement(M["a"].Item,{label:"\u59d4\u6258\u540d\u79f0"},n.samplename),N.a.createElement(M["a"].Item,{label:"\u59d4\u6258\u7528\u9014"},n.sampleuse),N.a.createElement(M["a"].Item,{label:"\u6301\u6709\u4eba"},n.duration),N.a.createElement(M["a"].Item,{label:"\u4fdd\u5b58\u5929\u6570"},n.reportno),N.a.createElement(M["a"].Item,{label:"\u5b58\u653e\u4f4d\u7f6e"},n.position),N.a.createElement(M["a"].Item,{label:"\u5236\u5907\u65e5\u671f"},r),N.a.createElement(M["a"].Item,{label:"\u72b6\u6001"},n.status)))},K=0,Q=S["a"].Item,q=V["a"].Option,H=(n=Object(T["connect"])(function(e){var a=e.main,t=e.loading;return{main:a,loading:t.models.main}}),l=S["a"].create(),n(r=l((o=function(e){function a(){var e,t;v()(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=b()(this,(e=y()(a)).call.apply(e,[this].concat(l))),t.state={modalReviewVisible:!1,modalInfo:{},mainResult:[]},t.columns=[{title:"\u59d4\u6258\u7f16\u53f7",dataIndex:"reportno"},{title:"\u59d4\u6258\u65e5\u671f",dataIndex:"reportdate",render:function(e){return N.a.createElement("span",null,z()(e).format("YYYY-MM-DD"))}},{title:"\u68c0\u9a8c\u673a\u6784",dataIndex:"namec"},{title:"\u68c0\u67e5\u54c1\u540d",dataIndex:"cargoname"},{title:"\u68c0\u9a8c\u9879\u76ee",dataIndex:"inspway",render:function(e,a){var t=[];if(void 0===e||null===e||""===e)return null;if(t=e.split(" "),t.length<2)return e;for(var n=null,l=N.a.createElement("br",null),r=0;r<t.length;r++)n=0===r?t[r]:r%3===0?N.a.createElement("span",null,n,l,t[r]):N.a.createElement("span",null,n,"\xa0",t[r]);return N.a.createElement("div",null,n)}},{title:"\u64cd\u4f5c",render:function(e,a){return N.a.createElement(L["Fragment"],null,N.a.createElement("a",{onClick:function(){return t.abilityItem(e,a)}},"\u80fd\u529b\u5206\u6790"),"\xa0\xa0",N.a.createElement("a",{onClick:function(){return t.peopleItem(e,a)}},"\u4eba\u5458\u8be6\u60c5"),"\xa0\xa0",N.a.createElement("a",{onClick:function(){return t.instrumentItem(e,a)}},"\u4eea\u5668\u8bbe\u5907"),"\xa0\xa0",N.a.createElement("a",{onClick:function(){return t.recordItem(e,a)}},"\u68c0\u67e5\u8bb0\u5f55"),"\xa0\xa0",N.a.createElement("br",null),N.a.createElement("a",{onClick:function(){return t.sampleItem(e,a)}},"\u6837\u54c1\u6e05\u5355"),"\xa0\xa0",N.a.createElement("a",{onClick:function(){return t.testRecordItem(e,a)}},"\u6d4b\u8bd5\u62a5\u544a"),"\xa0\xa0",N.a.createElement("a",{onClick:function(){return t.certItem(e,a)}},"\u8bc1\u7a3f\u8bc1\u4e66"),"\xa0\xa0",N.a.createElement("a",{onClick:function(){return t.previewItem(e,a)}},"\u59d4\u6258\u8be6\u60c5"))}}],t.init=function(){var e=t.props.dispatch,a={};e({type:"main/getReportByCustoms",payload:a,callback:function(e){t.state.mainResult=e}})},t.abilityItem=function(e){sessionStorage.setItem("certcode",e.certcode),Y["a"].push({pathname:"/MainReport/AbilityAnalysis"})},t.previewItem=function(e){sessionStorage.setItem("reportno",e.reportno),Y["a"].push({pathname:"/MainReport/DetailForEnturstment"})},t.testRecordItem=function(e){sessionStorage.setItem("reportno",e.reportno),Y["a"].push({pathname:"/MainReport/TestRecord"})},t.certItem=function(e){sessionStorage.setItem("reportno",e.reportno),Y["a"].push({pathname:"/MainReport/CertFile"})},t.sampleItem=function(e){sessionStorage.setItem("reportno",e.reportno),Y["a"].push({pathname:"/MainReport/Sample"})},t.recordItem=function(e){sessionStorage.setItem("reportno",e.reportno),Y["a"].push({pathname:"/MainReport/Record"})},t.instrumentItem=function(e){sessionStorage.setItem("reportno",e.reportno),sessionStorage.setItem("certcode",e.certcode),Y["a"].push({pathname:"/MainReport/Instrument"})},t.handleFormReset=function(){var e=t.props.form;e.resetFields(),t.init(),t.flag=0},t.peopleItem=function(e){sessionStorage.setItem("reportno",e.reportno),sessionStorage.setItem("certcode",e.certcode),Y["a"].push({pathname:"/MainReport/PeopleDetail"})},t.handleSearch=function(e){e.preventDefault();var a=t.props,n=a.dispatch,l=a.form;l.validateFields(function(e,a){if(e)console.log(e);else{var r=[],o=[],i=[];!0===a.check&&void 0!==a.kind&&void 0!==a.value&&void 0!==a.condition&&(r.push(a.kind),o.push(a.value),i.push(a.condition));var c=l.getFieldValue("keys");for(var m in c){var s=c[m];console.log(s);var u=l.getFieldValue("kinds".concat(s)),d=l.getFieldValue("conditions".concat(s)),p=l.getFieldValue("values".concat(s)),h=l.getFieldValue("check".concat(s));!0===h&&void 0!==u&&void 0!==p&&void 0!==d&&(r.push(u),o.push(p),i.push(d))}var E={kinds:r,values:o,conditions:i};n({type:"main/getReportByCustoms",payload:E,callback:function(e){t.state.mainResult=e}})}})},t.handleReview=function(e,a){t.handleModalReviewVisible(e),t.state.modalInfo=a},t.handleModalReviewVisible=function(e){t.setState({modalReviewVisible:!!e})},t.remove=function(e){var a=t.props.form,n=a.getFieldValue("keys");t.props.form.validateFields(function(e,a){e||console.log("Received values of form: ",a)}),a.setFieldsValue({keys:n.filter(function(a){return a!==e})})},t.add=function(){var e=t.props.form,a=e.getFieldValue("keys"),n=a.concat(K++);e.setFieldsValue({keys:n})},t.flag=0,t.handleAdvanceSearch=function(){if(0===t.flag){var e=4;while(e>0)t.add(),e--;t.flag=1}},t}return R()(a,e),I()(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator;return N.a.createElement(S["a"],{onSubmit:this.handleSearch,layout:"inline"},N.a.createElement(u["a"],{gutter:{md:6,lg:18,xl:5}},N.a.createElement(h["a"],{md:1,sm:20},N.a.createElement(S["a"].Item,{labelCol:{span:5},wrapperCol:{span:6},colon:!1},e("check",{initialValue:!0,valuePropName:"checked"})(N.a.createElement(E["a"],{checkedChildren:"\u5f00",unCheckedChildren:"\u5173"})))),N.a.createElement(h["a"],{md:3,sm:20},N.a.createElement(S["a"].Item,{labelCol:{span:5},wrapperCol:{span:6},colon:!1},e("kind",{initialValue:"reportno",rules:[{message:"\u9009\u62e9\u5b57\u6bb5"}]})(N.a.createElement(V["a"],{placeholder:"\u9009\u62e9\u5b57\u6bb5"},N.a.createElement(q,{value:"reportno"}," \u59d4\u6258\u7f16\u53f7"),N.a.createElement(q,{value:"shipname"},"\u8239\u540d\u6807\u8bc6"),N.a.createElement(q,{value:"cargoname"},"\u68c0\u67e5\u54c1\u540d"),N.a.createElement(q,{value:"inspway"},"\u68c0\u9a8c\u9879\u76ee"),N.a.createElement(q,{value:"applicant"},"\u68c0\u9a8c\u673a\u6784"))))),N.a.createElement(h["a"],{md:3,sm:20},N.a.createElement(S["a"].Item,{labelCol:{span:5},wrapperCol:{span:6},colon:!1},e("condition",{initialValue:"=",rules:[{message:"\u6761\u4ef6"}]})(N.a.createElement(V["a"],{placeholder:"\u6761\u4ef6"},N.a.createElement(q,{value:"="},"\u7b49\u4e8e"),N.a.createElement(q,{value:"!="},"\u4e0d\u7b49\u4e8e"),N.a.createElement(q,{value:"like"},"\u5305\u542b"),N.a.createElement(q,{value:"not like"},"\u4e0d\u5305\u542b"))))),N.a.createElement(h["a"],{md:4,sm:20},N.a.createElement(Q,null,e("value",{rules:[{message:"\u8bf7\u8f93\u5165"}]})(N.a.createElement(p["a"],{placeholder:"\u8bf7\u8f93\u5165"})))),N.a.createElement(h["a"],{md:1,sm:20},"  ",N.a.createElement(d["a"],{type:"plus-circle",style:{fontSize:24,marginLeft:8,marginTop:4},theme:"twoTone",twoToneColor:"#00ff00",onClick:this.add})),N.a.createElement(h["a"],{md:8,sm:20},N.a.createElement("span",{className:J.a.submitButtons},N.a.createElement(D["a"],{style:{marginLeft:0},onClick:this.handleFormReset},"\u91cd\u7f6e"),N.a.createElement(D["a"],{style:{marginLeft:8},onClick:this.handleAdvanceSearch},"\u9ad8\u7ea7\u68c0\u7d22"),N.a.createElement(D["a"],{type:"primary",style:{marginLeft:8},htmlType:"submit"},"\u67e5\u8be2")))))}},{key:"render",value:function(){var e=this,a=this.props.loading,t=this.props.form,n=t.getFieldDecorator,l=t.getFieldValue;n("keys",{initialValue:[]});var r=l("keys"),o=this.state,m=o.modalReviewVisible,f=o.modalInfo,v=o.mainResult,g={handleModalReviewVisible:this.handleModalReviewVisible},I=r.map(function(a,t){return N.a.createElement("div",null,t%2===0&&0!==r.length?N.a.createElement(u["a"],{className:B.a.rowClass}):null,N.a.createElement(h["a"],{md:1,sm:20},N.a.createElement(S["a"].Item,{labelCol:{span:5},wrapperCol:{span:6},colon:!1},n("check".concat(a),{initialValue:!0,valuePropName:"checked"})(N.a.createElement(E["a"],{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:!0})))),N.a.createElement(h["a"],{md:3,sm:20},N.a.createElement(S["a"].Item,{style:{marginRight:8},labelCol:{span:5},wrapperCol:{span:6}},n("kinds".concat(a),{rules:[{message:"\u9009\u62e9\u5b57\u6bb5"}]})(N.a.createElement(V["a"],{placeholder:"\u9009\u62e9\u5b57\u6bb5"},N.a.createElement(q,{value:"reportno"}," \u59d4\u6258\u7f16\u53f7"),N.a.createElement(q,{value:"shipname"},"\u8239\u540d\u6807\u8bc6"),N.a.createElement(q,{value:"cargoname"},"\u68c0\u67e5\u54c1\u540d"))))),N.a.createElement(h["a"],{md:3,sm:20},N.a.createElement(S["a"].Item,{style:{marginRight:8},labelCol:{span:5},wrapperCol:{span:6}},n("conditions".concat(a),{rules:[{message:"\u9009\u62e9\u6761\u4ef6"}]})(N.a.createElement(V["a"],{placeholder:"\u9009\u62e9\u6761\u4ef6"},N.a.createElement(q,{value:"="},"\u7b49\u4e8e"),N.a.createElement(q,{value:"!="},"\u4e0d\u7b49\u4e8e"),N.a.createElement(q,{value:"like"},"\u5305\u542b"),N.a.createElement(q,{value:"not like"},"\u4e0d\u5305\u542b"))))),N.a.createElement(h["a"],{md:4,sm:10},N.a.createElement(Q,null,n("values".concat(a),{rules:[{message:"\u9009\u62e9\u6570\u503c"}]})(N.a.createElement(p["a"],{placeholder:"\u8bf7\u8f93\u5165"})))),N.a.createElement(h["a"],{md:1,sm:5},r.length>=1?N.a.createElement(d["a"],{style:{fontSize:24,marginLeft:8},type:"minus-circle",theme:"twoTone",twoToneColor:"#ff0000",onClick:function(){return e.remove(a)}}):null))});return N.a.createElement(P["a"],{title:"\u59d4\u6258\u67e5\u8be2"},N.a.createElement(O,s()({},g,{modalReviewVisible:m,modalInfo:f})),N.a.createElement(i["a"],{bordered:!1,size:"small"},N.a.createElement(S["a"],{onSubmit:this.handleSubmit},N.a.createElement("div",{className:J.a.tableListForm},this.renderSimpleForm()),N.a.createElement(u["a"],{className:J.a.tableListForm},I)),N.a.createElement("div",{className:J.a.tableList},N.a.createElement(c["a"],{size:"middle",rowKey:"reportno",loading:a,dataSource:v,pagination:{showQuickJumper:!0,showSizeChanger:!0},columns:this.columns}))))}}]),a}(L["PureComponent"]),r=o))||r)||r);a["default"]=H}}]);