(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{Di74:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,i,l,r,o=a("bx4M"),s=(a("g9YV"),a("wCAj")),c=(a("14J3"),a("BMrR")),d=(a("+L6B"),a("2/Rp")),p=(a("Pwec"),a("CtXQ")),m=(a("jCWc"),a("kPKH")),u=a("2Taf"),g=a.n(u),h=a("vZ4D"),f=a.n(h),y=a("l4Ni"),w=a.n(y),E=a("ujKo"),k=a.n(E),v=a("MhPg"),I=a.n(v),b=(a("tU7J"),a("wFql")),x=(a("OaEy"),a("2fM7")),M=(a("y8nQ"),a("Vl3Y")),Y=a("q1tI"),C=a.n(Y),D=a("MuoO"),z=(a("Y2fQ"),a("zHco")),J=a("wd/R"),R=a.n(J),S=a("glGN"),j=a.n(S),B=(M["a"].Item,x["a"].Option,b["a"].Title),L=(n=Object(D["connect"])(function(e){var t=e.main,a=e.loading;return{main:t,loading:a.models.main}}),i=M["a"].create(),n(l=i((r=function(e){function t(){var e,a;g()(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return a=w()(this,(e=k()(t)).call.apply(e,[this].concat(i))),a.state={visible:!1,url:"",sample:[]},a.columns=[{title:"\u6837\u54c1\u7f16\u53f7",dataIndex:"sampleno"},{title:"\u6837\u54c1\u540d\u79f0",dataIndex:"samplename"},{title:"\u6837\u54c1\u7528\u9014",dataIndex:"sampleuse"},{title:"\u5236\u6837\u65e5\u671f",dataIndex:"makingdate",render:function(e){return C.a.createElement("span",null,R()(e).format("YYYY-MM-DD"))}},{title:"\u91cd\u91cf\u6570\u91cf",dataIndex:"weight"},{title:"\u4fdd\u5b58\u4f4d\u7f6e",dataIndex:"position"},{title:"\u72b6\u6001",dataIndex:"state"}],a.back=function(){a.props.history.goBack()},a}return I()(t,e),f()(t,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("reportno"),a=this.props.dispatch;a({type:"main/selectSampleByReportno",payload:{reportno:t},callback:function(t){200===t.code&&e.setState({sample:t.data.list})}})}},{key:"render",value:function(){var e=this.props,t=(e.main.recordData,e.loading),a=(e.dispatch,this.state.sample);return C.a.createElement(z["a"],null,C.a.createElement(o["a"],{bordered:!1,size:"middle"},C.a.createElement(c["a"],{gutter:16},C.a.createElement(m["a"],{span:3},C.a.createElement(B,{level:3},"\u6837\u54c1\u6e05\u5355")),C.a.createElement(m["a"],{span:19}),C.a.createElement(m["a"],{span:2},C.a.createElement(d["a"],{type:"primary",style:{marginLeft:8,paddingLeft:0,paddingRight:15},onClick:this.back},C.a.createElement(p["a"],{type:"left"}),"\u8fd4\u56de"))),C.a.createElement("div",{className:j.a.tableList},C.a.createElement(s["a"],{size:"middle",loading:t,dataSource:a,columns:this.columns,rowKey:"keyno",pagination:{showQuickJumper:!0,showSizeChanger:!0}}))))}}]),t}(Y["PureComponent"]),l=r))||l)||l);t["default"]=L}}]);