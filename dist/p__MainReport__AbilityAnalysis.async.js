(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{ZAYa:function(e,t,n){"use strict";n.r(t);n("IzEo");var a,l,r,i,c=n("bx4M"),u=(n("g9YV"),n("wCAj")),o=(n("14J3"),n("BMrR")),d=(n("+L6B"),n("2/Rp")),s=(n("Pwec"),n("CtXQ")),m=(n("jCWc"),n("kPKH")),p=n("2Taf"),f=n.n(p),h=n("vZ4D"),v=n.n(h),g=n("l4Ni"),E=n.n(g),w=n("ujKo"),k=n.n(w),y=n("MhPg"),b=n.n(y),I=(n("tU7J"),n("wFql")),x=(n("OaEy"),n("2fM7")),C=(n("y8nQ"),n("Vl3Y")),S=n("q1tI"),M=n.n(S),j=n("MuoO"),z=(n("Y2fQ"),n("zHco")),A=(n("wd/R"),n("glGN")),J=n.n(A),L=(C["a"].Item,x["a"].Option,I["a"].Title),N=(a=Object(j["connect"])(function(e){var t=e.main,n=e.loading;return{main:t,loading:n.models.main}}),l=C["a"].create(),a(r=l((i=function(e){function t(){var e,n;f()(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return n=E()(this,(e=k()(t)).call.apply(e,[this].concat(l))),n.state={visible:!1,url:"",list:[]},n.columns=[{title:"\u68c0\u67e5\u9886\u57df",dataIndex:"checkName"},{title:"\u68c0\u67e5\u9879\u76ee",dataIndex:"checkProject",render:function(e,t){var n=[];if(void 0===e||null===e||""===e)return null;n=e.split("|");for(var a=null,l=M.a.createElement("br",null),r=0;r<n.length;r++)a=M.a.createElement("span",null,a,l,n[r]);return M.a.createElement("div",null,a)}},{title:"\u8bf4\u660e",dataIndex:"explain"},{title:"\u68c0\u9a8c\u6807\u51c6",dataIndex:"standard",render:function(e,t){var n=[];if(void 0===e||null===e||""===e)return null;n=e.split("|");for(var a=null,l=M.a.createElement("br",null),r=0;r<n.length;r++)a=0===r?n[r]:M.a.createElement("span",null,a,l,n[r]);return M.a.createElement("div",null,a)}},{title:"\u68c0\u9a8c\u5458\u540d\u5355",dataIndex:"checkman",render:function(e,t){var n=[];if(void 0===e||null===e||""===e)return null;if(n=e.split("|"),n.length<1)return e;for(var a=null,l=M.a.createElement("br",null),r=0;r<n.length;r++)a=0===r?n[r]:M.a.createElement("span",null,a,l,n[r]);return M.a.createElement("div",null,a)}},{title:"\u72b6\u6001",dataIndex:"manStatus"},{title:"\u6388\u6743\u4eba\u5458",dataIndex:"auther",render:function(e,t){var n=[];if(void 0===e||null===e||""===e)return null;if(n=e.split("|"),n.length<2)return e;for(var a=null,l=M.a.createElement("br",null),r=0;r<n.length;r++)a=0===r?n[r]:M.a.createElement("span",null,a,l,n[r]);return M.a.createElement("div",null,a)}},{title:"\u72b6\u6001",dataIndex:"autherStatus"}],n.back=function(){window.close()},n}return b()(t,e),v()(t,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("certcode"),n=this.props.dispatch;n({type:"main/getAllCNASCheckDetail",payload:{certcode:t},callback:function(t){200===t.code&&e.setState({list:t.data})}})}},{key:"render",value:function(){var e=this.props,t=(e.main.recordData,e.loading),n=(e.dispatch,this.state.list);return M.a.createElement(z["a"],null,M.a.createElement(c["a"],{bordered:!1,size:"middle"},M.a.createElement(o["a"],{gutter:16},M.a.createElement(m["a"],{span:3},M.a.createElement(L,{level:3},"\u80fd\u529b\u5206\u6790")),M.a.createElement(m["a"],{span:19}),M.a.createElement(m["a"],{span:2},M.a.createElement(d["a"],{type:"primary",style:{marginLeft:8,paddingLeft:0,paddingRight:15},onClick:this.back},M.a.createElement(s["a"],{style:{paddingLeft:5},type:"close"}),"\u5173\u95ed"))),M.a.createElement("div",{className:J.a.tableList},M.a.createElement(u["a"],{size:"middle",loading:t,dataSource:n,columns:this.columns,rowKey:"keyno",pagination:{showQuickJumper:!0,showSizeChanger:!0}}))))}}]),t}(S["PureComponent"]),r=i))||r)||r);t["default"]=N}}]);