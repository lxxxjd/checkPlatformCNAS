(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{D139:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,l,r,i,c=a("bx4M"),o=(a("g9YV"),a("wCAj")),d=(a("14J3"),a("BMrR")),u=(a("+L6B"),a("2/Rp")),p=(a("Pwec"),a("CtXQ")),s=(a("jCWc"),a("kPKH")),m=a("2Taf"),f=a.n(m),h=a("vZ4D"),g=a.n(h),v=a("l4Ni"),y=a.n(v),E=a("ujKo"),k=a.n(E),w=a("MhPg"),b=a.n(w),I=(a("tU7J"),a("wFql")),C=(a("OaEy"),a("2fM7")),x=(a("y8nQ"),a("Vl3Y")),M=a("q1tI"),N=a.n(M),S=a("MuoO"),j=(a("Y2fQ"),a("zHco")),z=(a("wd/R"),a("glGN")),A=a.n(z),D=(x["a"].Item,C["a"].Option,I["a"].Title),J=(n=Object(S["connect"])(function(e){var t=e.company,a=e.loading;return{company:t,loading:a.models.company}}),l=x["a"].create(),n(r=l((i=function(e){function t(){var e,a;f()(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=y()(this,(e=k()(t)).call.apply(e,[this].concat(l))),a.state={modalVisible:!1,addModalVisible:!1,modalInfo:{},dataSource:[]},a.columns=[{title:"\u68c0\u67e5\u9886\u57df",dataIndex:"checkName"},{title:"\u68c0\u67e5\u9879\u76ee",dataIndex:"checkProject",render:function(e,t){if(void 0!==typeof e&&null!==e){var a=[];if(a=e.split("|"),a.length<2)return e;for(var n=null,l=N.a.createElement("br",null),r=0;r<a.length;r++)n=0===r?a[r]:N.a.createElement("span",null,n,l,a[r]);return N.a.createElement("div",null,n)}}},{title:"\u8bf4\u660e",dataIndex:"explain"},{title:"\u68c0\u9a8c\u6807\u51c6",dataIndex:"standard",render:function(e,t){if(void 0!==typeof e&&null!==e){var a=[];if(a=e.split("|"),a.length<2)return e;for(var n=null,l=N.a.createElement("br",null),r=0;r<a.length;r++)n=0===r?a[r]:N.a.createElement("span",null,n,l,a[r]);return N.a.createElement("div",null,n)}}},{title:"\u68c0\u9a8c\u5458\u540d\u5355",dataIndex:"checkman",render:function(e,t){if(void 0!==typeof e&&null!==e){var a=[];if(a=e.split("|"),a.length<2)return e;for(var n=null,l=N.a.createElement("br",null),r=0;r<a.length;r++)n=0===r?a[r]:N.a.createElement("span",null,n,l,a[r]);return N.a.createElement("div",null,n)}}},{title:"\u6388\u6743\u7b7e\u5b57\u4eba",dataIndex:"auther"}],a.back=function(){a.props.history.goBack()},a}return b()(t,e),g()(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=sessionStorage.getItem("certcode");e({type:"company/getAllCNASCheckDetail",payload:{certcode:t}})}},{key:"render",value:function(){var e=this.props,t=e.company.CNASCheckDetail,a=e.loading;e.dispatch;return N.a.createElement(j["a"],null,N.a.createElement(c["a"],{bordered:!1,size:"middle"},N.a.createElement(d["a"],{gutter:16},N.a.createElement(s["a"],{span:3},N.a.createElement(D,{level:3},"\u516c\u53f8\u80fd\u529b")),N.a.createElement(s["a"],{span:19}),N.a.createElement(s["a"],{span:2},N.a.createElement(u["a"],{type:"primary",style:{marginLeft:8,paddingLeft:0,paddingRight:15},onClick:this.back},N.a.createElement(p["a"],{type:"left"}),"\u8fd4\u56de"))),N.a.createElement("div",{className:A.a.tableList},N.a.createElement(o["a"],{size:"middle",loading:a,dataSource:t,columns:this.columns,rowKey:"keyno",pagination:{showQuickJumper:!0,showSizeChanger:!0}}))))}}]),t}(M["PureComponent"]),r=i))||r)||r);t["default"]=J}}]);