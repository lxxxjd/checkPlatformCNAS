(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{BOD2:function(e,a,t){e.exports={container:"antd-pro-layouts-user-layout-container",lang:"antd-pro-layouts-user-layout-lang",content:"antd-pro-layouts-user-layout-content",top:"antd-pro-layouts-user-layout-top",header:"antd-pro-layouts-user-layout-header",logo:"antd-pro-layouts-user-layout-logo",title:"antd-pro-layouts-user-layout-title",desc:"antd-pro-layouts-user-layout-desc"}},jH8a:function(e,a,t){"use strict";t.r(a);var n=t("2Taf"),r=t.n(n),o=t("vZ4D"),l=t.n(o),c=t("l4Ni"),u=t.n(c),s=t("ujKo"),i=t.n(s),m=t("MhPg"),p=t.n(m),d=(t("Pwec"),t("CtXQ")),y=t("q1tI"),g=t.n(y),h=(t("Y2fQ"),t("MuoO")),E=t("mOP9"),v=t("ggcP"),f=t("ZFw/"),b=t.n(f),N=t("bfXr"),w=t("BOD2"),D=t.n(w),M=t("zwU1"),k=t.n(M),O=t("tGQQ"),j=[],C=g.a.createElement(y["Fragment"],null,"Copyright ",g.a.createElement(d["a"],{type:"copyright"})," \u6c34\u6728\u6881\u6e05"),P=function(e){function a(){return r()(this,a),u()(this,i()(a).apply(this,arguments))}return p()(a,e),l()(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.dispatch,t=e.route,n=t.routes,r=t.authority;a({type:"menu/getMenuData",payload:{routes:n,authority:r}})}},{key:"render",value:function(){var e=this.props,a=e.children,t=e.location.pathname,n=e.breadcrumbNameMap;return g.a.createElement(b.a,{title:Object(O["a"])(t,n)},g.a.createElement("div",{className:D.a.container},g.a.createElement("div",{className:D.a.lang},g.a.createElement(N["a"],null)),g.a.createElement("div",{className:D.a.content},g.a.createElement("div",{className:D.a.top},g.a.createElement("div",{className:D.a.header},g.a.createElement(E["a"],{to:"/user/login"},g.a.createElement("span",{className:D.a.title},"CNAS\u68c0\u9a8c\u68c0\u6d4b\u62bd\u67e5\u7cfb\u7edf"))),g.a.createElement("div",{style:{marginTop:10}},g.a.createElement("img",{alt:"404",src:k.a,style:{height:27,paddingTop:2}}),g.a.createElement("span",{style:{verticalAlign:"middle",fontFamily:"\u6977\u4f53",fontSize:23,marginLeft:10,color:"black"}},"\u660e\u68c0\u8fbe")),g.a.createElement("div",{className:D.a.desc})),a),g.a.createElement(v["a"],{links:j,copyright:C})))}}]),a}(y["Component"]);a["default"]=Object(h["connect"])(function(e){var a=e.menu;return{menuData:a.menuData,breadcrumbNameMap:a.breadcrumbNameMap}})(P)}}]);