(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{x9B8:function(e,a,t){"use strict";t.r(a);t("2qtc");var n,l,r,c=t("kLXV"),o=(t("g9YV"),t("wCAj")),i=(t("IzEo"),t("bx4M")),m=(t("bP8k"),t("gFTJ")),d=(t("/zsF"),t("PArb")),s=(t("14J3"),t("BMrR")),p=(t("+L6B"),t("2/Rp")),E=(t("Pwec"),t("CtXQ")),u=(t("jCWc"),t("kPKH")),b=t("p0pE"),g=t.n(b),h=t("2Taf"),y=t.n(h),I=t("vZ4D"),f=t.n(I),w=t("l4Ni"),k=t.n(w),x=t("ujKo"),v=t.n(x),C=t("MhPg"),Y=t.n(C),M=(t("tU7J"),t("wFql")),S=t("q1tI"),z=t.n(S),D=t("MuoO"),A=t("zHco"),B=t("WTxz"),J=t.n(B),R=t("wd/R"),q=t.n(R),P=M["a"].Title,V=(n=Object(D["connect"])(function(e){var a=e.main,t=e.loading;return{main:a,loading:t.models.main}}),n((r=function(e){function a(){var e,t;y()(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=k()(this,(e=v()(a)).call.apply(e,[this].concat(l))),t.state={visible:!1,showVisible:!1,url:"",cnasInfo:{checkcode:"",checkname:"",domaincode:"",domainname:"",subdomaincode:"",subdomainname:""}},t.columns=[{title:"\u8bb0\u5f55\u540d",dataIndex:"recordname",render:function(e){var a=/\.{1}[a-z]{1,}$/;return null!==a.exec(e)?z.a.createElement("span",null,e.slice(0,a.exec(e).index)):z.a.createElement("span",null,e)}},{title:"\u4e0a\u4f20\u65e5\u671f",dataIndex:"recorddate",render:function(e){return z.a.createElement("span",null,q()(e).format("YYYY-MM-DD"))}},{title:"\u64cd\u4f5c",render:function(e,a){return z.a.createElement(S["Fragment"],null,z.a.createElement("a",{onClick:function(){return t.previewItem(e,a)}},"\u67e5\u770b"))}}],t.previewItem=function(e){var a=t.props.dispatch,n=sessionStorage.getItem("reportno"),l=g()({},e,{reportno:n});a({type:"main/getRecord",payload:l,callback:function(e){if(400===e.code)notification.open({message:"\u6253\u5f00\u5931\u8d25",description:e.data});else{var a=e.data;t.setState({url:a})}}}),t.setState({showVisible:!0})},t.back=function(){t.props.history.goBack()},t.showCancel=function(){t.setState({showVisible:!1})},t}return Y()(a,e),f()(a,[{key:"componentWillMount",value:function(){var e=sessionStorage.getItem("reportno"),a=this.props.dispatch;JSON.parse(localStorage.getItem("cnas_userinfo"));a({type:"main/getReport",payload:e}),a({type:"main/getRecordInfo",payload:{reportno:e,source:"\u59d4\u6258"}})}},{key:"componentDidMount",value:function(){var e=this,a=this.props,t=a.main.report,n=a.dispatch;void 0!==t.cnasCode&&null!==t.cnasCode&&1===t.iscnas&&n({type:"main/getCnasInfo",payload:{checkCode:t.cnasCode},callback:function(a){200===a.code&&e.setState({cnasInfo:a.data})}})}},{key:"render",value:function(){var e=this.props,a=e.main,t=a.recordData,n=a.report,l=e.loading,r=this.state,b=r.showVisible,g=r.url,h=r.cnasInfo;return z.a.createElement(A["a"],{loading:l},z.a.createElement(i["a"],{bordered:!1},z.a.createElement(s["a"],{gutter:16},z.a.createElement(u["a"],{span:3},z.a.createElement(P,{level:3},"\u59d4\u6258\u8be6\u60c5")),z.a.createElement(u["a"],{span:19}),z.a.createElement(u["a"],{span:2},z.a.createElement(p["a"],{type:"primary",style:{marginLeft:8,paddingLeft:0,paddingRight:15},onClick:this.back},z.a.createElement(E["a"],{type:"left"}),"\u8fd4\u56de"))),z.a.createElement(d["a"],{style:{marginBottom:32}}),z.a.createElement(m["a"],{size:"large",title:"\u4e1a\u52a1\u4fe1\u606f",style:{marginBottom:32},bordered:!0},z.a.createElement(m["a"].Item,{label:"\u59d4\u6258\u7f16\u53f7"},n.reportno),z.a.createElement(m["a"].Item,{label:"\u59d4\u6258\u65e5\u671f"},q()(n.reportdate).format("YYYY-MM-DD")),z.a.createElement(m["a"].Item,{label:"\u68c0\u9a8c\u8d39"},n.price),z.a.createElement(m["a"].Item,{label:"\u7533\u8bf7\u4eba"},n.applicant),z.a.createElement(m["a"].Item,{label:"\u8054\u7cfb\u4eba"},n.applicantname),z.a.createElement(m["a"].Item,{label:"\u8054\u7cfb\u7535\u8bdd"},n.applicanttel),z.a.createElement(m["a"].Item,{label:"\u4ee3\u7406\u4eba"},n.agent),z.a.createElement(m["a"].Item,{label:"\u8054\u7cfb\u4eba"},n.agentname),z.a.createElement(m["a"].Item,{label:"\u8054\u7cfb\u7535\u8bdd"},n.agenttel),z.a.createElement(m["a"].Item,{label:"\u4ed8\u6b3e\u4eba"},n.payer),z.a.createElement(m["a"].Item,{label:"\u4e1a\u52a1\u6765\u6e90"},n.businesssource),z.a.createElement(m["a"].Item,{label:"\u8d38\u6613\u65b9\u5f0f"},n.tradeway),z.a.createElement(m["a"].Item,{label:"\u8bc1\u4e66\u8981\u6c42"},n.certstyle),z.a.createElement(m["a"].Item,{label:"\u81ea\u7f16\u53f7"},n.reportno20),z.a.createElement(m["a"].Item,{label:"\u4e1a\u52a1\u5206\u7c7b"},n.businesssort),z.a.createElement(m["a"].Item,{label:"\u6267\u884c\u90e8\u95e8"},n.section),z.a.createElement(m["a"].Item,{label:"\u6d77\u5173\u90e8\u95e8"},n.costomsName)),z.a.createElement(d["a"],{style:{marginBottom:32}}),z.a.createElement(m["a"],{size:"large",title:"\u68c0\u67e5\u5bf9\u8c61",style:{marginBottom:32},bordered:!0},z.a.createElement(m["a"].Item,{label:"\u68c0\u67e5\u54c1\u540d"},n.cargoname),z.a.createElement(m["a"].Item,{label:"\u4e2d\u6587\u4fd7\u540d"},n.chineselocalname),z.a.createElement(m["a"].Item,{label:"\u8239\u540d\u6807\u8bc6"},n.shipname),z.a.createElement(m["a"].Item,{label:"\u7533\u62a5\u6570\u91cf\u548c\u5355\u4f4d"},(void 0===n.quantityd||null===n.quantityd?"":n.quantityd)+n.unit),z.a.createElement(m["a"].Item,{label:"\u68c0\u9a8c\u65f6\u95f4"},q()(n.inspdate).format("YYYY-MM-DD")),z.a.createElement(m["a"].Item,{label:"\u68c0\u67e5\u6e2f\u53e3"},n.inspplace2),z.a.createElement(m["a"].Item,{label:"\u68c0\u9a8c\u5730\u70b9"},n.inspplace1))),z.a.createElement(i["a"],{title:"\u68c0\u67e5\u9879\u76ee",className:J.a.card,bordered:!1},z.a.createElement("table",{width:"100%",border:1},z.a.createElement("tr",null,z.a.createElement("td",{width:"8%",style:{backgroundColor:"#E5E5E5",textAlign:"center",padding:"10px"}},"\u8ba4\u53ef\u9886\u57df\u53ca\u4ee3\u7801"),z.a.createElement("td",{width:"8%",style:{backgroundColor:"#E5E5E5",textAlign:"center",padding:"10px"}},"\u8ba4\u53ef\u5b50\u9886\u57df\u4ee3\u7801"),z.a.createElement("td",{width:"12%",style:{backgroundColor:"#E5E5E5",textAlign:"center",padding:"10px"}}," \u68c0\u67e5\u9886\u57df/\u68c0\u67e5\u5bf9\u8c61\u53ca\u4ee3\u7801"),z.a.createElement("td",{width:"15%",style:{backgroundColor:"#E5E5E5",textAlign:"center",padding:"10px"}},"\u68c0\u67e5\u9879\u76ee\u53ca\u4ee3\u7801"),z.a.createElement("td",{style:{backgroundColor:"#E5E5E5",textAlign:"center",padding:"10px"}}," \u68c0\u67e5\u9879\u76ee\u8be6\u7ec6\u63cf\u8ff0")),z.a.createElement("tr",null,z.a.createElement("td",{style:{padding:"10px"}},h.domaincode,z.a.createElement("br",null),h.domainname),z.a.createElement("td",{style:{padding:"10px"}},h.subdomaincode,z.a.createElement("br",null),h.subdomainname),z.a.createElement("td",{style:{padding:"10px"}},h.checkcode,z.a.createElement("br",null),h.checkname),z.a.createElement("td",{style:{padding:"10px"}},n.cnasProject),z.a.createElement("td",{style:{padding:"10px"}},z.a.createElement(s["a"],null,z.a.createElement(u["a"],{span:24},z.a.createElement("span",null,"\u7533\u8bf7\u9879\u76ee:",n.inspway))),z.a.createElement(s["a"],null,z.a.createElement(u["a"],{span:24},z.a.createElement("span",null,"\u68c0\u9a8c\u5907\u6ce8:",n.inspwaymemo1))))))),z.a.createElement(i["a"],{bordered:!1,title:"\u9644\u4ef6"},z.a.createElement("div",null,z.a.createElement(o["a"],{size:"middle",loading:l,dataSource:t,columns:this.columns,rowKey:"recordname",pagination:{showQuickJumper:!0,showSizeChanger:!0}}))),z.a.createElement(c["a"],{title:"\u8bb0\u5f55\u8be6\u60c5",visible:b,onCancel:this.showCancel,footer:null,width:800,style:{top:10}},z.a.createElement("embed",{src:g,style:{width:"100%",height:.8*document.body.clientHeight},type:"application/pdf"})))}}]),a}(S["Component"]),l=r))||l);a["default"]=V}}]);